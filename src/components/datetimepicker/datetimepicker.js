import flatpickr from 'flatpickr'
const Brazilian = require('flatpickr/dist/l10n/pt').default.pt

class BRDateTimePicker {
  constructor(name, component, config) {
    this.name = name
    this.component = component
    // localization global
    flatpickr.localize(Brazilian)
    this.config = config
    this._buildDateTimePicker()
  }

  _buildDateTimePicker() {
    let format = 'd/m/Y'
    let time = false
    let noCalendar = false
    switch (this.component.getAttribute('data-type')) {
      case 'date':
        format = 'd/m/Y'
        time = false
        noCalendar = false
        break
      case 'time':
        format = 'H:i'
        time = true
        noCalendar = true
        break
      case 'datetime-local':
        format = 'd/m/Y H:i'
        time = true
        noCalendar = false
        break
      default:
        format = 'd/m/Y'
        time = false
        noCalendar = false
        break
    }

    this.config_native = {
      dateFormat: format,
      disableMobile: 'true',
      enableTime: time,

      minuteIncrement: 1,
      mode: this.component.getAttribute('data-mode'),
      nextArrow:
        '<button class="br-button circle small" type="button"><i class="fas fa-angle-right"></i></button>',
      noCalendar: noCalendar,
      prevArrow:
        '<button class="br-button circle small" type="button"><i class="fas fas fa-angle-left"></i></button>',
      time_24hr: true,
      wrap: true,
    }

    console.log(this.config, Object.assign(this.config_native, this.config))

    this.calendar = flatpickr(
      this.component,
      Object.assign(this.config_native, this.config)
    )
  }
}

export default BRDateTimePicker

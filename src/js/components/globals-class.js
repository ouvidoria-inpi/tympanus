import BRAccordion from './accordion'
import BRDatepicker from './datepicker'
import BRInput from './input'
import BRAlert from './message'
import BRNavigation from './navigation'
import BRSelect from './select'
import BRTabs from './tabs'
import BRTag from './tag'
import BRTagInput from './taginput'
import BRUpload from './upload'
import BRTable from './table'
import BRScrim from './scrim'
import BRModal from './modal'
import BRTooltip from './tooltip'
import BRList from './list'
import BRBreadcrumb from './breadcrumb'
import BRWizard from './wizard'

export default class Globals {
  constructor() {}

  initInstanceAll() {
    this.initInstanceAccordion()
    this.initInstanceMessage()
    this.initInstanceInput()
    this.initInstanceNavigation()
    this.initInstanceSelect()
    this.initInstanceTabs()
    this.initInstanceUpload()
    this.initInstanceDatepicker()
    this.initInstanceTable()
    this.initInstanceScrim()
    this.initInstanceModal()
    this.initInstanceTooltip()
    this.initInstanceList()
    this.initInstanceBreadcrumb()
    this.initInstanceWizard()
    this.initInstanceLoading()
  }

  initInstanceAccordion() {
    let accordionList = []

    for ( let brAccordion of window.document.querySelectorAll( '.br-accordion' ) ) {
      accordionList.push( new BRAccordion( 'br-accordion', brAccordion ) )
    }
  }

  initInstanceMessage() {
    let alertList = []

    for ( let brAlert of window.document.querySelectorAll( '.br-message' ) ) {
      alertList.push( new BRAlert( 'br-message', brAlert ) )
    }
  }

  initInstanceInput() {
    const countries = [
      'Afeganistão',
      'África do Sul',
      'Albânia',
      'Alemanha',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antártida',
      'Antígua e Barbuda',
      'Antilhas Holandesas',
      'Arábia Saudita',
      'Argélia',
      'Argentina',
      'Armênia',
      'Aruba',
      'Austrália',
      'Áustria',
      'Azerbaijão',
      'Bahamas',
      'Bahrein',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Bélgica',
      'Belize',
      'Benin',
      'Bermudas',
      'Bolívia',
      'Bósnia-Herzegóvina',
      'Botsuana',
      'Brasil',
      'Brunei',
      'Bulgária',
      'Burkina Fasso',
      'Burundi',
      'Butão',
      'Cabo Verde',
      'Camarões',
      'Camboja',
      'Canadá',
      'Cazaquistão',
      'Chade',
      'Chile',
      'China',
      'Chipre',
      'Cingapura',
      'Colômbia',
      'Congo',
      'Coréia do Norte',
      'Coréia do Sul',
      'Costa do Marfim',
      'Costa Rica',
      'Croácia (Hrvatska)',
      'Cuba',
      'Dinamarca',
      'Djibuti',
      'Dominica',
      'Egito',
      'El Salvador',
      'Emirados Árabes Unidos',
      'Equador',
      'Eritréia',
      'Eslováquia',
      'Eslovênia',
      'Espanha',
      'Estados Unidos',
      'Estônia',
      'Etiópia',
      'Fiji',
      'Filipinas',
      'Finlândia',
      'França',
      'Gabão',
      'Gâmbia',
      'Gana',
      'Geórgia',
      'Gibraltar',
      'Grã-Bretanha (Reino Unido, UK)',
      'Granada',
      'Grécia',
      'Groelândia',
      'Guadalupe',
      'Guam (Território dos Estados Unidos)',
      'Guatemala',
      'Guernsey',
      'Guiana',
      'Guiana Francesa',
      'Guiné',
      'Guiné Equatorial',
      'Guiné-Bissau',
      'Haiti',
      'Holanda',
      'Honduras',
      'Hong Kong',
      'Hungria',
      'Iêmen',
      'Ilha Bouvet (Território da Noruega)',
      'Ilha do Homem',
      'Ilha Natal',
      'Ilha Pitcairn',
      'Ilha Reunião',
      'Ilhas Aland',
      'Ilhas Cayman',
      'Ilhas Cocos',
      'Ilhas Comores',
      'Ilhas Cook',
      'Ilhas Faroes',
      'Ilhas Falkland (Malvinas)',
      'Ilhas Geórgia do Sul e Sandwich do Sul',
      'Ilhas Heard e McDonald (Território da Austrália)',
      'Ilhas Marianas do Norte',
      'Ilhas Marshall',
      'Ilhas Menores dos Estados Unidos',
      'Ilhas Norfolk',
      'Ilhas Seychelles',
      'Ilhas Solomão',
      'Ilhas Svalbard e Jan Mayen',
      'Ilhas Tokelau',
      'Ilhas Turks e Caicos',
      'Ilhas Virgens (Estados Unidos)',
      'Ilhas Virgens (Inglaterra)',
      'Ilhas Wallis e Futuna',
      'índia',
      'Indonésia',
      'Irã',
      'Iraque',
      'Irlanda',
      'Islândia',
      'Israel',
      'Itália',
      'Jamaica',
      'Japão',
      'Jersey',
      'Jordânia',
      'Kênia',
      'Kiribati',
      'Kuait',
      'Laos',
      'Látvia',
      'Lesoto',
      'Líbano',
      'Libéria',
      'Líbia',
      'Liechtenstein',
      'Lituânia',
      'Luxemburgo',
      'Macau',
      'Macedônia (República Yugoslava)',
      'Madagascar',
      'Malásia',
      'Malaui',
      'Maldivas',
      'Mali',
      'Malta',
      'Marrocos',
      'Martinica',
      'Maurício',
      'Mauritânia',
      'Mayotte',
      'México',
      'Micronésia',
      'Moçambique',
      'Moldova',
      'Mônaco',
      'Mongólia',
      'Montenegro',
      'Montserrat',
      'Myanma',
      'Namíbia',
      'Nauru',
      'Nepal',
      'Nicarágua',
      'Níger',
      'Nigéria',
      'Niue',
      'Noruega',
      'Nova Caledônia',
      'Nova Zelândia',
      'Omã',
      'Palau',
      'Panamá',
      'Papua-Nova Guiné',
      'Paquistão',
      'Paraguai',
      'Peru',
      'Polinésia Francesa',
      'Polônia',
      'Porto Rico',
      'Portugal',
      'Qatar',
      'Quirguistão',
      'República Centro-Africana',
      'República Democrática do Congo',
      'República Dominicana',
      'República Tcheca',
      'Romênia',
      'Ruanda',
      'Rússia (antiga URSS) - Federação Russa',
      'Saara Ocidental',
      'Saint Vincente e Granadinas',
      'Samoa Americana',
      'Samoa Ocidental',
      'San Marino',
      'Santa Helena',
      'Santa Lúcia',
      'São Bartolomeu',
      'São Cristóvão e Névis',
      'São Martim',
      'São Tomé e Príncipe',
      'Senegal',
      'Serra Leoa',
      'Sérvia',
      'Síria',
      'Somália',
      'Sri Lanka',
      'St. Pierre and Miquelon',
      'Suazilândia',
      'Sudão',
      'Suécia',
      'Suíça',
      'Suriname',
      'Tadjiquistão',
      'Tailândia',
      'Taiwan',
      'Tanzânia',
      'Território Britânico do Oceano índico',
      'Territórios do Sul da França',
      'Territórios Palestinos Ocupados',
      'Timor Leste',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunísia',
      'Turcomenistão',
      'Turquia',
      'Tuvalu',
      'Ucrânia',
      'Uganda',
      'Uruguai',
      'Uzbequistão',
      'Vanuatu',
      'Vaticano',
      'Venezuela',
      'Vietnã',
      'Zâmbia',
      'Zimbábue',
    ]

    let inputList = []
    for ( let brInput of window.document.querySelectorAll( '.br-input' ) ) {
      inputList.push( new BRInput( 'br-input', brInput ) )
    }

    for ( let brInput of inputList ) {
      for ( let inputAutocomplete of brInput.component.querySelectorAll(
          'input.search-autocomplete'
        ) ) {
        brInput.setAutocompleteData( countries )
      }
    }
  }

  initInstanceNavigation() {
    let navigationList = []

    for ( let brNavigation of window.document.querySelectorAll(
        '.br-navigation'
      ) ) {
      navigationList.push( new BRNavigation( 'br-navigation', brNavigation ) )
    }
  }

  initInstanceSelect() {
    let selectList = []

    for ( let brSelect of window.document.querySelectorAll( '.br-select' ) ) {
      selectList.push( new BRSelect( 'br-select', brSelect ) )
    }
  }

  initInstanceTabs() {
    let abasList = []

    for ( let brTabs of window.document.querySelectorAll( '.br-tabs' ) ) {
      abasList.push( new BRTabs( 'br-tabs', brTabs ) )
    }
  }

  initInstanceUpload() {
    let uploadList = []

    for ( let brUpload of window.document.querySelectorAll( '.br-upload' ) ) {
      uploadList.push( new BRUpload( 'br-upload', brUpload ) )
    }
  }

  initInstanceDatepicker() {
    let datepickerList = []

    for ( let brDatepicker of window.document.querySelectorAll(
        '.br-datepicker'
      ) ) {
      datepickerList.push( new BRDatepicker( 'br-datepicker', brDatepicker ) )
    }
  }

  initInstanceTable() {
    let tableList = []
    for ( let [ index, brTable ] of window.document
      .querySelectorAll( '.br-table' )
      .entries() ) {
      tableList.push( new BRTable( 'br-table', brTable, index ) )
    }
  }

  initInstanceScrim() {
    let scrimList = []

    for ( let brScrim of window.document.querySelectorAll( '.br-scrim' ) ) {
      scrimList.push( new BRScrim( 'br-scrim', brScrim ) )
    }

    for ( let buttonBloco1 of window.document.querySelectorAll(
        '.bloco1 button'
      ) ) {
      buttonBloco1.addEventListener( 'click', () => {
        for ( let brScrim of scrimList ) {
          brScrim.showScrim()
        }
      } )
    }
  }

  initInstanceModal() {
    let modalList = []

    for ( let brModal of window.document.querySelectorAll( '.br-modal' ) ) {
      modalList.push( new BRModal( 'br-modal', brModal ) )
    }

    for ( let brScrim of window.document.querySelectorAll( '.br-scrim' ) ) {
      let scrim = new BRScrim( 'br-scrim', brScrim )
      for ( let button of window.document.querySelectorAll(
          '.br-scrim + button'
        ) ) {
        button.addEventListener( 'click', () => {
          scrim.showScrim()
        } )
      }
    }
  }

  initInstanceTooltip() {
    let tooltipList = []
    for ( let brTooltip of window.document.querySelectorAll( '.br-tooltip' ) ) {
      tooltipList.push( new BRTooltip( 'br-tooltip', brTooltip ) )
    }
  }

  initInstanceList() {
    let listList = []
    for (let brList of window.document.querySelectorAll( ".br-list[accordion]")) {
      listList.push(new BRList('br-list', brList ))
    } 
  }

  initInstanceTagInput() {
    let tagInputList = []

    for ( let brTag of window.document.querySelectorAll( '.br-tag-input' ) ) {
      tagInputList.push( new BRTagInput( 'br-tag-input', brTag ) )
    }
  }

  initInstanceTag() {
    let tagList = []

    for ( let brTag of window.document.querySelectorAll( '.br-tag' ) ) {
      tagList.push( new BRTag( 'br-tag', brTag ) )
    }

    let tagListChoice = []

    for ( let brTagChoice of window.document.querySelectorAll( '.br-tag-list' ) ) {
      tagListChoice.push( new BRTagChoice( 'br-tag-list', brTagChoice ) )
    }

    let tagListFilter = []

    for ( let brTagFilter of window.document.querySelectorAll(
        '.br-tag-filter'
      ) ) {
      tagListFilter.push( new BRTagFilter( 'br-tag-list', brTagFilter ) )
    }
  }
  initInstanceWizard() {
    let wizardList = []
    for ( let brWizard of window.document.querySelectorAll( '.br-wizard' ) ) {
      wizardList.push( new BRWizard( 'br-wizard', brWizard ) )
    }
  }

  initInstanceBreadcrumb() {
    let breadcrumbList = [];
    for ( let brBreadcrumb of window.document.querySelectorAll( ".br-breadcrumb" ) ) {
      breadcrumbList.push( new BRBreadcrumb( "br-breadcrumb", brBreadcrumb ) );
    }
  }
}

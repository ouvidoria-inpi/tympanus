// Instanciar Collapse
const collapseList = [];
for (const trigger of window.document.querySelectorAll(
  '[data-toggle="collapse"]'
)) {
  const target = document.querySelector(trigger.dataset.target);
  collapseList.push(new Behavior(trigger, target));
}

// Instanciar Dropdown
const dropdownList = [];
for (const trigger of window.document.querySelectorAll(
  '[data-toggle="dropdown"]'
)) {
  const target = document.querySelector(trigger.dataset.target);
  dropdownList.push(new Behavior(trigger, target));
}

// Instanciar Select
const selectList = [];
for (const brSelect of window.document.querySelectorAll(`.${prefix}select`)) {
  selectList.push(new Select("br-select", brSelect));
}

// Instanciar Menu
const menuList = [];
for (const brMenu of window.document.querySelectorAll(`.${prefix}menu`)) {
  menuList.push(new Menu("br-menu", brMenu));
}

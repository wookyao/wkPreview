import template from './template'

function renderDOM(options) {
  const {mount} = options
  const realDom = template(options)
  mount.appendChild(realDom);
}

export default renderDOM;
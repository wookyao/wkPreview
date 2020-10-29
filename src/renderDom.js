import template from './template'

export default function renderDom(options) {
  const templateNode = template(options);
  options.mount.appendChild(templateNode)
}
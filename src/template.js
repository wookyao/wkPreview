import {createElement as h, render} from './render'

export default function template() {
  let node = h('div', {
    id: "JS-Preview",
    className: 'preview-mask',
    style: "background: rgba(0,0,0,.65)"
  });


  return render(node)
}
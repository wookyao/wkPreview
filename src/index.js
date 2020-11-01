import store from './store'
import renderDom from './render/renderDom'
import event from './event/index'

export default function wkPreview(options = {}) {
  options.mount ??= document.body
  options.sourceList ??= [];
  options.currentIndex ??= 0;
  options.loop ??= false;
  options.zoom ??= 5;
  store.commit('set_preview_options', options)

  if (options.sourceList.length) {
    renderDom(options)
    event.call(this)
  } else {
    throw new Error('Media resources is required')
  }

  console.log(store)
}

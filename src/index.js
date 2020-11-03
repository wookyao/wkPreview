import store from './store'
import renderDom from './render/renderDom'
import event from './event/index'

export default function wkPreview(options = {}) {
  options.mount ??= document.body
  options.sourceList ??= [];
  options.currentIndex ??= 0;
  options.loop ??= false;
  options.zoom ??= 5;

  let limit = options.sourceList.length - 1;
  if(options.currentIndex > limit) {
    options.currentIndex = limit
  }
  if(options.currentIndex < 0) {
    options.currentIndex = 0
  }

  store.commit('set_preview_options', options)

  if (options.sourceList.length) {
    renderDom(options)
    event.call(this)
  } else {
    throw new Error('Media resources is required')
  }

  console.log(store)
}

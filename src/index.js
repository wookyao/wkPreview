import renderDom from './render/renderDom'
import event from './event/index'

export default function wkPreview(options = {}) {
  options.mount ??= document.body
  options.sourceList ??= [];
  options.currentIndex ??= 0;
  options.loop ??= false;

  if(options.sourceList.length) {
    renderDom(options)
    event.call(this,options)
  } else {
    throw new Error('Media resources is required')
  }
  
}

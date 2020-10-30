import renderDom from './render/renderDom'

export default function wkPreview(options = {}) {
  options.mount ??= document.body
  options.sourceList ??= [];
  options.currentIndex ??= 0;

  if(options.sourceList.length) {
    renderDom(options)
  } else {
    throw new Error('Media resources is required')
  }
  
}

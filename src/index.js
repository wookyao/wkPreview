import render from './render'

export default function wkPreview(options = {}) {
  options.mount ??= document.body
  options.sourceList ??= [];
  options.currentIndex ??= 0;

  if(options.sourceList.length) {
    render(options)
  } else {
    throw new Error('Media resources is required')
  }
  
}

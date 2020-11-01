import { on, off, isMobile } from '../utils'
import store from '../store'

export default function move() {
  const { $stage } = store.state

  let x, y, l, t, isMove = false;


  on($stage, 'mousedown', e => {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = $stage.offsetLeft;
    t = $stage.offsetTop;
    isMove = true

    on($stage, 'mousemove', e => {
      if (!isMove) return;
      let
        nx = e.clientX,
        ny = e.clientY;
      let disX = nx - (x - l)
      let disY = ny - (y - t)
      $stage.style.left = `${disX}px`
      $stage.style.top = `${disY}px`

      on($stage, 'mouseup', e => {
        isMove = false
        on($stage, 'mousedown', null)
        on($stage, 'mousemove', null)
      })
    })


  })

}
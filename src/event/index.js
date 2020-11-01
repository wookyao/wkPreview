import controlSwitch from './controlSwitch'
import zoom from './zoom'
import move from './move'

export default function event() {
  controlSwitch();
  zoom();
  move()
}
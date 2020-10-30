import {
  PREVIEW_BTN_PRE,
  PREVIEW_BTN_NEXT,
  PREVIEW_STAGE
} from '../config'
import controlSwitch from './controlSwitch'
import zoom from './zoom'

export default function event (options) {
  let 
    $Stage = document?.getElementById?.(PREVIEW_STAGE),
    $btnPre = document?.getElementById?.(PREVIEW_BTN_PRE),
    $btnNext = document?.getElementById?.(PREVIEW_BTN_NEXT);
  controlSwitch(options, $Stage, $btnPre, $btnNext);
  zoom($Stage)
}
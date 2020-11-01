import { isMobile } from '../utils'

const isM = isMobile()

const btnSize = isM ? 30 : 50;
const btnGutter = isM ? '5%' : '20px';
const iconSize = isM ? 10 : 18;


const previewMask = `
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0,0,0,.55);
`;

const btnStyle = `
  position: absolute;
  top: 50%;
  margin-top: ${btnSize / 2 * -1}px;
  width: ${btnSize}px;
  height: ${btnSize}px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.22);
  z-index: 999;
  cursor: pointer;
  overflow: hidden;
`

const btnPre = btnStyle + `
  left: ${btnGutter};
`
const preIcon = `
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 36%;
  margin-top: ${iconSize / 2 * -1}px;
  display: inline-block;
  width: ${iconSize}px;
  height: ${iconSize}px;
  border-top: 3px solid #ccc;
  border-left: 3px solid #ccc;
  transform: rotate(-45deg);
  border-radius: 2px;
`


const btnNext = btnStyle + `
  right: ${btnGutter};
`
const nextIcon = `
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  right: 36%;
  margin-top: ${iconSize / 2 * -1}px;
  display: inline-block;
  width: ${iconSize}px;
  height: ${iconSize}px;
  border-top: 3px solid #ccc;
  border-left: 3px solid #ccc;
  transform: rotate(135deg);
  border-radius: 2px;
`

const stage = `
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 96vh;
  max-width: 96%;
  border-radius: 4px;
  border: 2px solid #eee;
  overflow: hidden;
  cursor: pointer;
  object-fit: contain;
`

const btnClose = `
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: ${btnSize}px;
  height: ${btnSize}px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(0,0,0,.55);
  cursor: pointer;
  transform: rotate(45deg) scale(0.8);
`;

const closeIconBase = `
box-sizing: border-box;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: inline-block;
background: #fff;
border-radius: 2px;
`
const closeIcon1 = `
  ${closeIconBase}
  width: 2px;
  height: 50%;
`;
const closeIcon2 = `
  ${closeIconBase}
  width: 50%;
  height: 2px;
`;

export default {
  previewMask,
  btnPre,
  btnNext,
  preIcon,
  nextIcon,
  stage,
  btnClose,
  closeIcon1,
  closeIcon2
}
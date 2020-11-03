# wkPreview

- 原生的支持 PC 和移动端的图片预览

### 安装

```bash
  npm i -S wk-preview
  or
  yarn add wk-preview
```

### 使用

```js
import wkPreview from "wk-preview";

wkPreview({
  mount: document.body,
  sourceList: [(ImgUrl: String)],
  currentIndex: 0,
  loop: false,
  zoom: 5, // 放大倍数
});
```

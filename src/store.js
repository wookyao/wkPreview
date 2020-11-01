const store = {

  state: {
    scale: 1,
    $stage: null,
    $btnPre: null,
    $btnNext: null,
    $btnClose: null,
    $previewMask: null,
    previewOptions: {}
  },

  commit(fnName, value) {
    try {
      this.actions[fnName].call(this, value)
    } catch { }
  },
  actions: {
    set_scale(val) {
      store.state.scale = val;
    },
    set_preview_options(val) {
      store.state.previewOptions = val;
    },
    set_node_stage(node) {
      store.state.$stage = node;
    },
    set_node_btn_pre(node) {
      store.state.$btnPre = node
    },
    set_node_btn_next(node) {
      store.state.$btnNext = node
    },
    set_node_btn_close(node) {
      store.state.$btnClose = node
    },
    set_node_preview(node) {
      store.state.$previewMask = node
    },
    reset_state() {
      store.state = {
        scale: 1,
        $stage: null,
        $btnPre: null,
        $btnNext: null,
        $btnClose: null,
        $previewMask: null,
        previewOptions: {}
      }
    }
  }
}


export default store;
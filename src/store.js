const store = {

  state: {
    scale: 1,
  },

  commit(fnName, value) {
    this.actions[fnName].call(this, value)
  },
  actions: {
    set_scale(val) {
      store.state.scale = val;
    },
    get_scale() {
      return store.state.scale;
    }
  }
}


export default store;
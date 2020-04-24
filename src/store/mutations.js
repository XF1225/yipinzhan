export default {
  CollectId (state, val) {
    for (let i = 0; i < state.collectId.length; i++) {
      if (state.collectId[i] === val) {
        state.collectId.splice(i, 1) // 执行删除操作
        console.log('删除id后的数组：' + JSON.stringify(state.collectId))
        return
      }
    }
    state.collectId.push(val) // 执行添加操作
    console.log('添加id后的数组：' + JSON.stringify(state.collectId))
  },
  SYCollectId (state, val) {
    for (let i = 0; i < state.SYcollectId.length; i++) {
      if (state.SYcollectId[i] === val) {
        state.SYcollectId.splice(i, 1)
        return
      }
    }
    state.SYcollectId.push(val)
  }
}

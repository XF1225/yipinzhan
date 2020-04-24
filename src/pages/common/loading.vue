<template>
  <div class="loading">
    <div class="zhezhaoceng" @touchmove.prevent></div>
    <div class="loadingcontent">
      <img src="static/icon/loading.gif">
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
.loading
  width 100%
  .zhezhaoceng
    width 100%
    height 100%
    background #fbf5f5
    position absolute
    left 0
    top 0
    z-index 2
  .loadingcontent
    background #fff
    padding .5rem
    border-radius .3rem
    position fixed
    top 35%
    left 42%
    text-align center
    z-index 3
</style>

<template>
  <div class="shoucang">
    <div class="zhezhaoceng" @touchmove.prevent></div>
    <div class="shoucangcontent">
      <p>{{title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shoucang',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0)
    opacity 1
  }
  100% {
    transform: scale(1)
    opacity 0
  }
}
.shoucang
  width 100%
  .zhezhaoceng
    width 100%
    height 100%
    background #fff
    opacity 0
    position fixed
    top 0
    left 0
    z-index 4
  .shoucangcontent
    position fixed
    top 45%
    left 40%
    text-align center
    z-index 5
    animation bounce-in 1s ease-in-out
  .shoucangcontent p
    font-size .8rem
    padding .6rem
    color #fff
    border-radius .3rem
    background rgba(0,0,0,.6)
</style>

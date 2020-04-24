<template>
  <div class="wodeheader">
    <div class="wodeheader-up">
      <div class="fanhui"><img src="static/icon/zuojiantou.png" @click="prev"></div>
      <div class="title">亿品赞</div>
      <div class="pinyin">—<span>yipinzan.cn</span>—</div>
    </div>
    <bolang></bolang>
  </div>
</template>
<script>
import bolang from '../components/bolang'
export default {
  name: 'loginheader',
  components: {
    bolang
  },
  methods: {
    prev () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.wodeheader
  width 100%
  .wodeheader-up
    width 100%
    display flex
    flex-direction column
    background #ec1f3f
    z-index 2
    .fanhui
      width 100%
      padding .5rem 0 0 .5rem
    .fanhui img
      width :1.3rem
      height :1.3rem
    .title
      width 100%
      height 3rem
      line-height 3rem
      text-align center
      font-size 2rem
      color #fff
    .pinyin
      width 100%
      height 1rem
      line-height 1rem
      text-align center
      font-size .9rem
      color #fff
  .wodeheader-down
    width 100%
    height 3rem
    background #ec1f3f
    opacity .9
</style>

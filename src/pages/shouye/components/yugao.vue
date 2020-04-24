<template>
  <div class="yugao">
    <router-link tag="div" to="/shangxinyugao" class="sxyg">
      <h3>上新预告</h3>
      <p>天天有免单 日日中不停</p>
      <img src="static/images/goods_xg.png" alt="">
    </router-link>
    <div class="rightcontent">
      <div class="lyfq" @click="tochaojifan">
        <div class="lyfqdesc">
          <h3>0元疯抢</h3>
          <p>全场活动0-1元</p>
        </div>
        <img src="static/images/goods_1.png" alt="">
      </div>
      <div class="cgfx" @click="tochaojifan">
        <div class="cgfxdesc">
          <h3>超高返现</h3>
          <p>高额返现等你拿</p>
        </div>
        <img src="static/images/goods_2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yugao',
  methods: {
    tochaojifan () {
      this.$router.push('/chaojifan')
    }
  }
}
</script>
<style lang="stylus" scoped>
.yugao
  width 100%
  margin-top .5rem
  background #fff
  display flex
  flex-direction row
  .sxyg
    width 50%
    display flex
    flex-direction column
    border-right solid .1px #eee
  .sxyg h3
    padding .8rem .5rem .5rem .5rem
    font-size .9rem
    color #f09
  .sxyg p
    padding-left .5rem
    font-size .7rem
    color #666
  .sxyg img
    padding-top .5rem
    width 50%
    transform:translate(50%,0)
  .rightcontent
    width 50%
    display flex
    flex-direction column
    .lyfq
      border-bottom solid .1px #eee
    .lyfq,.cgfx
      width 100%
      display flex
      flex-direction row
      .lyfqdesc,.cgfxdesc
        width 60%
        display flex
        flex-direction column
      .lyfqdesc h3,.cgfxdesc h3
        padding .8rem .5rem .5rem .5rem
        font-size .9rem
        color red
      .cgfxdesc h3
        color blue
      .lyfqdesc p,.cgfxdesc p
        padding-left .5rem
        font-size .7rem
        color #666
    .lyfq img,.cgfx img
      width 40%
      height 21vw
      padding .5rem 0
</style>

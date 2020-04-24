<template>
  <div>
    <div class="shezhititle">
      <span class="iconfont jiantou" @click="fanhuiclick">&#xe669;</span>
      <h2 class="title">{{htitle}}</h2>
      <span class="iconfont icon-gengduo" @click="gengduoclick">&#xe62a;</span>
    </div>
    <div class="gengduocontent" v-show="showgengduo" @touchmove.prevent>
      <div class="zhezhaoceng" @click="closegengduo"></div>
      <div class="gengduodesc">
        <li @click="toxiaoxi"><img src="static/icon/zixun.png"><span>消息</span></li>
        <router-link tag="li" to="/"><img src="static/icon/shouye1.png"><span>首页</span></router-link>
        <li @click="tobangzhuzhongxin"><img src="static/icon/bangzhuzhongxin.png"><span>帮助</span></li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shezhititle',
  props: {
    htitle: String
  },
  data () {
    return {
      showgengduo: false
    }
  },
  methods: {
    fanhuiclick () {
      this.$router.go(-1)
    },
    gengduoclick () {
      this.showgengduo = !this.showgengduo
    },
    closegengduo () {
      this.showgengduo = false
    },
    toxiaoxi () {
      this.$router.push('/xiaoxizhongxin')
      this.showgengduo = false
    },
    tobangzhuzhongxin () {
      this.$router.push('/bangzhuzhongxin')
      this.showgengduo = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.shezhititle
  width 100%
  height 2.5rem
  background #fff
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-bottom solid .1rem #eee
  .iconfont
    font-size 1.2rem
  .jiantou
    padding-left .3rem
  .icon-gengduo
    font-size 1.5rem
    padding-right .3rem
  .title
    font-size 1rem
.gengduocontent
  width 100%
  .zhezhaoceng
    width 100%
    height 100%
    position fixed
    top 3rem
    left 0
    z-index 2
  .gengduodesc
    width 4.5rem
    position fixed
    right .15rem
    top 2.55rem
    background #fff
    z-index 3
    display flex
    flex-direction column
    border solid .5px #eee
    border-radius .2rem
  .gengduodesc li
    height 2rem
    line-height 2rem
    display flex
    flex-direction row
    justify-content center
    align-items center
  .gengduodesc img
    width 1.2rem
    height 1.2rem
  .gengduodesc span
    font-size .8rem
    padding-left .3rem
</style>

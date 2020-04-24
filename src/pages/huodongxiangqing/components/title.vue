<template>
  <div class="hdxqtitle">
    <div class="hdxqheader-1" v-show="showheader" :style="opacityStyle1">
      <div class="zuojiantou" @click="toup"><span class="iconfont jiantou">&#xe669;</span></div>
      <div class="youbian">
        <div class="fenxiangdao" @click="fenxiangdaoclick"><span class="iconfont fenxiang">&#xe6f0;</span></div>
        <div class="gengduo" @click="gegnduoclick"><span class="iconfont icon-gengduo">&#xe62a;</span></div>
      </div>
    </div>
    <div class="hdxqheader-2" v-show="!showheader" :style="opacityStyle2">
      <div class="fanhui" @click="toup"><span class="iconfont">&#xe669;</span></div>
      <h2 class="title">{{title}}</h2>
      <div class="youce">
        <div  @click="fenxiangdaoclick"><span class="iconfont">&#xe6f0;</span></div>
        <div class="gengduo2" @click="gegnduoclick"><span class="iconfont">&#xe62a;</span></div>
      </div>
    </div>
    <fenxiangdao v-show="showfenxiangdao" @change="quxiaofenxiang"></fenxiangdao>
    <div class="gengduocontent" v-show="showgengduo">
      <div class="zhezhaoceng" @click="quxiaogengduoclick"></div>
      <div class="gengduodesc">
        <li @click="toxiaoxi"><img src="static/icon/zixun.png"><span>消息</span></li>
        <router-link tag="li" to="/"><img src="static/icon/shouye1.png"><span>首页</span></router-link>
        <li @click="tobangzhuzhongxin"><img src="static/icon/bangzhuzhongxin.png"><span>帮助</span></li>
      </div>
    </div>
  </div>
</template>
<script>
import fenxiangdao from '../../common/fenxiangdao'
export default {
  name: 'hdxqtitle',
  components: {
    fenxiangdao
  },
  props: {
    title: String
  },
  data () {
    return {
      showheader: true,
      opacityStyle1: {
        opacity: 1
      },
      opacityStyle2: {
        opacity: 0
      },
      showfenxiangdao: false,
      showgengduo: false
    }
  },
  methods: {
    handleheader () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 0 && top <= 50) {
        let opacity = 1 - (top / 100)
        this.opacityStyle1 = {opacity}
        this.showheader = true
      } else if (top > 50) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle2 = {opacity}
        this.showheader = false
      }
    },
    toup () {
      this.$router.go(-1)
    },
    fenxiangdaoclick () {
      this.showfenxiangdao = true
    },
    quxiaofenxiang () {
      this.showfenxiangdao = false
    },
    gegnduoclick () {
      this.showgengduo = !this.showgengduo
    },
    quxiaogengduoclick () {
      this.showgengduo = false
    },
    toxiaoxi () {
      if (window.localStorage.getItem('userinfo') === null) {
        this.$router.push('/login')
      } else {
        this.showgengduo = false
        this.$router.push('/xiaoxizhongxin')
      }
    },
    tobangzhuzhongxin () {
      this.$router.push('/bangzhuzhongxin')
      this.showgengduo = false
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleheader)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleheader)
  }
}
</script>
<style lang="stylus" scoped>
.hdxqtitle
  width 100%
  .hdxqheader-2
    background rgba(255,255,255,1)
    border-bottom solid .1rem #eee
  .hdxqheader-1,.hdxqheader-2
    z-index 3
    width 100%
    height 3rem
    position fixed
    top 0
    left 0
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .title
      font-size .9rem
    .youbian,.youce
      display flex
      flex-direction row
      align-items center
    .fenxiangdao,.gengduo,.zuojiantou
      width 1.8rem
      height 1.8rem
      background rgba(0,0,0,.6)
      border-radius 50%
      display flex
      justify-content center
      align-items center
    .gengduo
      margin 0 .2rem
    .gengduo2
      margin 0 .5rem
      .iconfont
        font-size 1.3rem
    .jiantou,.fenxiang,.icon-gengduo
      color #fff
    .fanhui
      margin-left .5rem
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
      right .2rem
      top 3rem
      background #fff
      z-index 3
      display flex
      flex-direction column
      border solid .5px #eee
      border-radius .2rem
    .gengduodesc li
      height 2.2rem
      line-height 2.2rem
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

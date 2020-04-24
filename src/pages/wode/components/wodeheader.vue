<template>
  <div class="wodeheader">
    <div class="wodetitle">
      <img class="shezhi" src="static/icon/shezhi.png" @click="toshezhi">
      <h2>我的</h2>
      <img class="xiaoxi" src="static/icon/xiaoxi.png" @click="toxiaoxizhongxin">
    </div>
    <div class="wodeinput" v-if="hasuserinfo">
      <div v-show="showuserinfo">
        <input type="button" class="denglu" value="立即登录" @click="tologin">
        <router-link tag="input" to="/zhuce" type="button" class="zhuce" value="新人注册"></router-link>
      </div>
    </div>
    <div class="usercontent" v-else>
      <div class="userinfo" v-show="showuserinfo">
        <img class="userheader" src="static/images/chenshan.jpg" alt="">
        <div class="username">
          <h2>{{username}}</h2>
          <div>
            <span>{{usertitle}}></span>
            <span>成长等级{{chengzhangdengji}}></span>
          </div>
        </div>
        <div class="xinyufen">
          <div>
            <h3>{{xinyufennum}}</h3>
            <span>信誉分</span>
          </div>
        </div>
      </div>
      <div class="kong" v-show="!showuserinfo"></div>
      <div class="userdetail">
        <div class="detail">
          <span>￥<h3>{{totalprice}}</h3></span>
          <span>账户余额</span>
        </div>
        <div class="detail">
          <h3>{{jinbi}}</h3>
          <span>金币余额</span>
        </div>
        <div class="detail">
          <span>￥<h3>{{yaoqingshouyi}}</h3></span>
          <span>邀请收益</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wodeheader',
  data () {
    return {
      hasuserinfo: true,
      showuserinfo: true,
      username: '',
      usertitle: '',
      chengzhangdengji: '',
      xinyufennum: '',
      totalprice: '',
      jinbi: '',
      yaoqingshouyi: ''
    }
  },
  created () {
    let userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    if (!userinfo) {
      return
    } else {
      this.username = userinfo.username
      this.usertitle = userinfo.usertitle
      this.chengzhangdengji = userinfo.chengzhangdengji
      this.xinyufennum = userinfo.xinyufennum
      this.totalprice = userinfo.totalprice
      this.jinbi = userinfo.jinbi
      this.yaoqingshouyi = userinfo.yaoqingshouyi
    }
    if (window.localStorage.getItem('userinfo') !== '') {
      this.hasuserinfo = false
    }
  },
  methods: {
    tologin () {
      return this.$router.push('/login')
    },
    scrolluserinfo () {
      let Top = document.documentElement.scrollTop || document.body.scrollTop
      if (Top > 20) {
        this.showuserinfo = false
      } else if (Top < 20) {
        this.showuserinfo = true
      }
    },
    toshezhi () {
      if (window.localStorage.getItem('userinfo') === null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/shezhi')
      }
    },
    toxiaoxizhongxin () {
      if (window.localStorage.getItem('userinfo') === null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/xiaoxizhongxin')
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrolluserinfo)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrolluserinfo)
  }
}
</script>
<style lang="stylus" scoped>
.wodetitle
  width 100%
  height 3rem
  background #ee0e6b
  display flex
  flex-direction row
  justify-content space-between
  position fixed
  left 0
  top 0
  z-index 2
  align-items center
  .shezhi,.xiaoxi
    width 1.3rem
    height 1.3rem
    padding 0 .5rem
.wodetitle h2
  font-size .9rem
  color #fff
.wodeinput
  width 100%
  height 4rem
  padding-top 3rem
  background #ee0e6b
  display flex
  flex-direction row
  justify-content center
  align-items center
  .denglu,.zhuce
    padding .5rem .8rem
    font-size .7rem
    border-radius .2rem
    border 0
  .denglu
    margin-right 1rem
    background #fff
    color #ee0e6b
  .zhuce
    background #ee0e6b
    color #fff
    border solid .5px #fff
.usercontent
  width 100%
  padding-top 3rem
  display flex
  flex-direction column
  .kong
    width 100%
    height 4.5rem
    background #ee0e6b
  .userinfo
    height 4.5rem
    background #ee0e6b
    display flex
    flex-direction row
    align-items center
    position relative
    .userheader
      width 2.5rem
      height 2.5rem
      border-radius 50%
      margin 0 .5rem 0 .8rem
    .username
      display flex
      flex-direction column
    .username h2
      height 1.5rem
      line-height 1.5rem
      font-size .9rem
      color #fff
    .username div
      display flex
      flex-direction row
    .username span
      font-size .7rem
      color #fff
      border solid .5px #fff
      border-radius 2rem
      margin-right .3rem
      padding .2rem .3rem
    .xinyufen
      position absolute
      right .8rem
      width 3rem
      height 3rem
      border .15rem solid #fff
      border-bottom .15rem solid transparent
      border-radius 50%
      display flex
      justify-content center
      align-items center
    .xinyufen::before
      content ''
      position absolute
      right -.15rem
      top -.14rem
      width 3rem
      height 3rem
      border .15rem solid #fff
      border-radius 50%
      border-bottom .15rem solid transparent
      transform rotate(20deg)
    .xinyufen::after
      content ''
      position absolute
      right -.15rem
      top -.14rem
      width 3rem
      height 3rem
      border .15rem solid #fff
      border-radius 50%
      border-bottom .15rem solid transparent
      transform rotate(-20deg)
    .xinyufen div
      width 2.5rem
      height 2.5rem
      background #fff
      border-radius 50%
      display flex
      flex-direction column
      justify-content center
      align-items center
    .xinyufen h3,.xinyufen span
      font-size .7rem
      color #ee0e6b
      margin-bottom .2rem
    .xinyufen h3
      font-size .8rem
  .userdetail
    width 100%
    height 3.5rem
    background #fff
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    .detail
      display flex
      flex-direction column
      justify-content center
      align-items center
    .detail span
      height 1.2rem
      line-height 1.2rem
      font-size .7rem
      display flex
      flex-direction row
    .detail h3
      font-size .8rem
</style>

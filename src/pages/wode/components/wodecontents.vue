<template>
  <div class="wodecontents">
    <div class="contents">
      <div class="contents-item" @click="toorder">
        <img src="static/icon/dingdan2.png" alt="">
        <p>我的订单</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <div class="contents-item" @click="towodeshoucangclick">
        <img src="static/icon/shoucang.png" alt="">
        <p>我的收藏</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <div class="contents-item">
        <img src="static/icon/shensujilu.png" alt="">
        <p>申诉记录</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
    </div>
    <div class="contents">
      <div class="contents-item">
        <img src="static/icon/zhanghaobangding.png" alt="">
        <p>账号绑定</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <div class="contents-item">
        <img src="static/icon/shimingrenzheng.png" alt="">
        <p>实名认证</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
    </div>
    <div class="contents">
      <div class="contents-item">
        <img src="static/icon/tixian.png" alt="">
        <p>我要提现</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <div class="contents-item">
        <img src="static/icon/zijinmingxi.png" alt="">
        <p>资金明细</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <div class="contents-item">
        <img src="static/icon/yaoqing.png" alt="">
        <p>邀请有奖</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
    </div>
    <div class="contents">
      <div class="contents-item">
        <img src="static/icon/yijianfankui.png" alt="">
        <p>意见反馈</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </div>
      <router-link tag="div" to="/bangzhuzhongxin" class="contents-item">
        <img src="static/icon/bangzhuzhongxin.png" alt="">
        <p>帮助中心</p>
        <img class="youjiantou" src="static/icon/youjiantou.png" alt="">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wodecontents',
  methods: {
    toorder () {
      this.$router.push('/order')
    },
    towodeshoucangclick () {
      if (window.localStorage.getItem('userinfo') === null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/wodeshoucang')
      }
      location.reload()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wodecontents
  width 100%
  padding-bottom 4rem
  .contents div:not(:last-of-type)
    border-bottom solid .1rem #eee
  .contents
    width 100%
    display flex
    flex-direction column
    margin-top .5rem
    background #fff
    .contents-item
      height 2.2rem
      display flex
      flex-direction row
      align-items center
      position relative
    .contents-item img
      width 1.2rem
      height 1.2rem
      padding 0 .3rem 0 .5rem
    .contents-item p
      font-size .7rem
    .youjiantou
      position absolute
      right .2rem
</style>

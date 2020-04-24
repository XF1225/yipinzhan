<template>
  <div class="ordercontent" @touchmove.prevent>
    <div class="order-desc">
      <div class="order-img shiyongcolor"><img src="static/icon/zhifeiji.png"></div>
      <div class="order-detail">
        <h3>试用申请</h3>
        <p>申请越多中奖率越高</p>
      </div>
      <div class="order-to"><img src="static/icon/youjiantou.png"></div>
    </div>
    <div class="order-desc">
      <div class="order-img dingdancolor"><img src="static/icon/jilu.png"></div>
      <div class="order-detail">
        <h3>试用订单</h3>
        <p>中奖后，在此领取试用和管理订单</p>
      </div>
      <div class="order-to"><img src="static/icon/youjiantou.png"></div>
    </div>
    <router-link tag="div" to="/qianggoudingdan" class="order-desc">
      <div class="order-img chaofancolor"><img src="static/icon/meiyuan.png"></div>
      <div class="order-detail">
        <h3>超返订单</h3>
        <p>超级返订单管理</p>
      </div>
      <div class="order-to"><img src="static/icon/youjiantou.png"></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'ordercontent'
}
</script>
<style lang="stylus" scoped>
.ordercontent
  width 100%
  display flex
  flex-direction column
  .order-desc:last-of-type
    border 0
    margin-bottom 100%
  .order-desc
    width 100%
    height 4.2rem
    background #fff
    border-bottom solid .1rem #eee
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .shiyongcolor
      background linear-gradient(180deg,rgba(238,14,107,.6),rgba(238,14,107,1))
    .dingdancolor
      background linear-gradient(180deg,rgba(4,131,232,.6),rgba(4,131,232,1))
    .chaofancolor
      background linear-gradient(180deg,rgba(39,230,106,.6),rgba(39,230,106,1))
    .order-img
      flex 1
      display flex
      justify-content center
      align-items center
      border-radius .3rem
      margin 0 .3rem 0 .8rem
    .order-img img
      width 2rem
      height 2rem
      padding .5rem
    .order-detail
      flex 8
      display flex
      flex-direction column
      padding-left .5rem
    .order-detail h3,.order-detail p
      font-size .8rem
    .order-detail p
      color #666
      padding-top .5rem
    .order-to
      flex 1
      display flex
      justify-content flex-end
      align-items center
      margin-right .5rem
    .order-to img
      width 1rem
      height 1.3rem
</style>

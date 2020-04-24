<template>
  <div class="xiaoxicontent" @touchmove.prevent>
    <div class="detail">
      <div class="xiaoxiimg xitongtongzhi"><img src="static/icon/xitongtongzhi.png"></div>
      <div class="xiaoxidesc">
        <div><h3>系统通知</h3><span>2020-9-28 14:36:08</span></div>
        <p>您有一个订单被系统自动取消</p>
      </div>
    </div>
    <div class="detail">
      <div class="xiaoxiimg guanfanggonggao"><img src="static/icon/guanfanggonggao.png"></div>
      <div class="xiaoxidesc">
        <div><h3>官方公告</h3><span>2020-07-14 09:16:25</span></div>
        <p>亿品赞商家新功能上线啦</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xiaoxicontent'
}
</script>
<style lang="stylus" scoped>
.xiaoxicontent
  width 100%
  display flex
  flex-direction column
  .detail:last-of-type
    border 0
    margin-bottom 100%
  .detail
    width 100%
    height 4.2rem
    background #fff
    display flex
    flex-direction row
    align-items center
    border-bottom solid .1rem #eee
    .xitongtongzhi
      background linear-gradient(180deg,rgba(238,14,107,.6),rgba(238,14,107,1))
    .guanfanggonggao
      background linear-gradient(180deg,rgba(4,131,232,.6),rgba(4,131,232,1))
    .xiaoxiimg
      flex 1
      margin 0 .5rem
      display flex
      justify-content center
      align-items center
      border-radius .3rem
    .xiaoxiimg img
      width 1.5rem
      height 1.5rem
      padding .7rem
    .xiaoxidesc
      flex 8
      height 3rem
      display flex
      flex-direction column
      padding-left .3rem
    .xiaoxidesc div
      width 97%
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      font-size .8rem
      padding-top .3rem
    .xiaoxidesc p
      font-size .8rem
      color #666
      padding-top .8rem
    .xiaoxidesc span
      color #666
</style>

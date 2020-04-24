<template>
  <div class="huodongdetail">
    <div v-for="item of list" :key="item.id">
      <div class="huodong-title">
      <img :src="item.icon" alt="">
      <p>{{item.title}}</p>
    </div>
    <div class="shengyufenshu">
      <p class="price">￥{{item.jiage}}</p>
      <div class="fenshu">
        <span>剩余份数:{{item.shengyufenshu}}</span>/<span>{{item.zongfenshu}}份</span>
      </div>
    </div>
    <div class="jine">
      <p>下单金额:<span>￥{{item.yuanjia}}</span></p>
      <p>返还金额:<span>￥{{item.fanhuan}}</span></p>
    </div>
    <div class="danbaojin">
      <div class="dbj">
        <span>担保金</span>
        <p>商家已存入担保金{{item.yuanjia*item.zongfenshu}}元！</p>
      </div>
      <div class="sysj">
        <span>剩余时间</span>
        <p><timeing :endTime='endTime'></timeing></p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import timeing from '@/pages/common/timeing'
export default {
  name: 'huodongdetail',
  components: {
    timeing
  },
  data () {
    return {
      endTime: '2021-03-03 9:51:00'
    }
  },
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .huodongdetail
    width 100%
    background #fff
    .huodong-title
      width 95%
      margin 0 auto
      height 2.2rem
      display flex
      flex-direction row
      align-items center
    .huodong-title img
      width 1.1rem
      height 1.1rem
    .huodong-title p
      font-size .9rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .shengyufenshu
      width 96%
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .price
        font-size 1rem
        color #ec1f3f
      .fenshu
        font-size .7rem
        color #666
    .jine
      width 96%
      height 1.5rem
      line-height 1.5rem
      margin .3rem auto
      background #f4dee2
      display flex
      flex-direction row
      justify-content space-around
      align-items center
    .jine p
      width 50%
      height .9rem
      line-height .9rem
      text-align center
      font-size .8rem
      color red
    .jine p:first-of-type
      border-right solid .1rem #c2bebe
    .danbaojin
      width 96%
      margin 0 auto
      padding-bottom .3rem
      display flex
      flex-direction column
      .dbj,.sysj
        height 1.5rem
        display flex
        flex-direction row
        justify-content start
        align-items center
        font-size .8rem
      .dbj span,.sysj span
        flex 1
        color #666
      .dbj p,.sysj p
        flex 5
</style>

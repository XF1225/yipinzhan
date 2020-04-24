<template>
  <div class="shiyongdetail">
    <div v-for="item of list" :key="item.id">
      <div class="detailtitle">
        <img :src="item.icon">
        <p>{{item.title}}</p>
      </div>
      <div class="fenshu">
        <p>限量份数:<span>{{item.xianliang}}</span>份</p>
        <p>已申请:<span>{{item.shenqingnum}}</span>人</p>
        <p>剩余金币兑换:<span>{{item.shengyujinbiduihuan}}</span>份</p>
      </div>
      <div class="guige">
        <p>拍下规格:好评晒图送好礼 多色随机</p>
        <p>用户限拍:<span>1</span>件</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shiyongdetail',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.shiyongdetail
  width 100%
  background #fff
  display flex
  flex-direction column
  .detailtitle
    width 95%
    height 2.5rem
    margin 0 auto
    padding-top .2rem
    display flex
    flex-direction row
    align-items center
  .detailtitle img
    width .9rem
    height .9rem
    padding-right .2rem
  .detailtitle p
    width 100%
    font-size .9rem
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
  .guige
    padding .5rem 0 1rem 0
  .fenshu,.guige
    width 95%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
  .fenshu p,.guige p
    font-size .8rem
    color #666
  .fenshu span,.guige span
    color red
</style>

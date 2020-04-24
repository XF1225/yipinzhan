<template>
  <div class="wrapper swiper-no-swiping">
    <swiper>
      <swiper-slide v-for="item of list" :key="item.id" class="swiper-img">
        <img :src="item.mianfeiimg" />
      </swiper-slide>
    </swiper>
    <div class="notice" v-for="item of list" :key="item.id">
      <div class="baoyoushiyong">
        <span>￥<h2>{{item.jiazhi}}</h2>包邮试用</span>
      </div>
      <div class="jieshushijian">
        <p class="jieshutitle">距活动结束还剩</p>
        <jieshutime class="jieshucontent" :endTime="endTime"></jieshutime>
      </div>
    </div>
  </div>
</template>
<script>
import jieshutime from '../components/jieshutime'
export default {
  name: 'swipercontent',
  components: {
    jieshutime
  },
  props: {
    list: Array
  },
  data () {
    return {
      endTime: '2022-08-15 10:00:00'
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:red
.wrapper
  width 100%
  background #fff
  position relative
  .swiper-img
    width 100%
    height 75vw
  .swiper-img img
    width 100%
    background-size cover
  .notice
    width 100%
    height 2.5rem
    position absolute
    left 0
    bottom 0
    z-index 2
    display flex
    flex-direction row
    align-items center
    .baoyoushiyong
      flex 6
      height 2.5rem
      padding-left .5rem
      background rgba(226,7,81,.8)
      color #fff
      display flex
      align-items center
    .baoyoushiyong span
      font-size .7rem
      display flex
      flex-direction row
      align-items baseline
    .baoyoushiyong h2
      font-size 1.1rem
      padding 0 .15rem
    .jieshushijian:before
      position absolute
      left -1rem
      content ''
      display block
      width 0
      height 0
      border-top 1.25rem solid transparent
      border-right 1rem solid yellow
      border-bottom 1.25rem solid transparent
    .jieshushijian
      flex 4
      height 2.5rem
      background yellow
      display flex
      flex-direction column
      justify-content center
      align-items center
      position relative
      .jieshutitle
        font-size .8rem
        padding-bottom .3rem
        color rgb(226,7,81)
      .jieshucontent
        font-size .8rem
</style>

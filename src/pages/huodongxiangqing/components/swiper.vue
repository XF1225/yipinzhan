<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id" class="swiper-img">
        <img :src="item.chaojifanimg" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swipercontent',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
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
  z-index 1
  .swiper-img
    width 100%
    height 75vw
  .swiper-img img
    width 100%
    height 100%
    background-size cover
</style>

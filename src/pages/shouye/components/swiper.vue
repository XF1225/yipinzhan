<template>
  <div class="wrapper" v-if="reRender">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'swipercontent',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      reRender: false,
      swiperList: [
        {
          id: '0001',
          imgUrl: './static/images/a.jpg'
        },
        {
          id: '0002',
          imgUrl: './static/images/b.jpg'
        }
      ]
    }
  },
  // 解决路由跳转回来后自动轮播失效问题：
  activated () {
    this.reRender = false
    setTimeout(() => {
      this.reRender = true
    }, 100)
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background #fff
  opacity .8
.wrapper >>> .swiper-pagination-bullet-active
  background #dd0808
  outline none
.wrapper
  width 100%
  padding-top 2.5rem
  background #fff
  .swiper-img
    width 100%
    height 45vw
    background-size cover
</style>

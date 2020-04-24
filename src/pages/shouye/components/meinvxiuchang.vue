<template>
  <div class="meinvxiuchang">
    <div class="mnxc-name">美女秀场</div>
    <div class="wrapper swiper-no-swiping" v-if="reRender">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of meinvxiuchang" :key="item.index">
          <div class="mnxc-desc">
            <div class="mnxc-touxiang"><img :src="item.touxiang"></div>
            <div class="mnxc-content">
              <h4>{{item.name}}</h4>
              <p>{{item.detail}}</p>
            </div>
            <div class="mnxc-main"><img :src="item.main"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meinvxiuchang',
  data () {
    return {
      swiperOption: {
        loop: true,
        speed: 200,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        direction: 'vertical'
      },
      reRender: false,
      meinvxiuchang: [
        {
          touxiang: './static/images/006.jpg',
          name: 'ypz_1261_1209',
          detail: '好美的果盘，谢谢商家给的试用品',
          main: './static/images/001.jpg'
        },
        {
          touxiang: './static/images/002.jpg',
          name: 'ypz_1261',
          detail: '好美的果盘，谢谢商家给的试用品',
          main: './static/images/002.jpg'
          // https://www.cnblogs.com/benmumu/p/9285197.html
        }
      ]
    }
  },
  activated () {
    this.reRender = false
    setTimeout(() => {
      this.reRender = true
    }, 100)
  }
}
</script>
<style lang="stylus" scoped>
.meinvxiuchang
  width 100%
  height 4rem
  margin-top .5rem
  background #fff
  display flex
  flex-direction row
  .mnxc-name
    flex 1
    font-size 1rem
    font-weight bold
    color red
    display flex
    justify-content center
    align-items center
    padding 0 .5rem 0 .8rem
  .wrapper
    flex 8
    overflow hidden
    .mnxc-desc
      width 100%
      height 4rem
      display flex
      flex-direction row
      align-items center
      .mnxc-touxiang
        height 3rem
        display flex
        justify-content center
        align-items center
      .mnxc-touxiang img
        width 2rem
        height 2rem
        border-radius 50%
      .mnxc-content
        width 62%
        padding 0 .5rem
      .mnxc-content h4,.mnxc-content p
        width 100%
        font-size .8rem
        height 1.5rem
        line-height 1.5rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .mnxc-main img
        width 2.8rem
        border-radius 15%
</style>

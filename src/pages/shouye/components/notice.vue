<template>
  <router-link tag="div" to="/xiaoxizhongxin" class="notice">
    <div class="notice-name">今日头条</div>
    <div class="wrapper swiper-no-swiping" v-if="rerender">
      <swiper :options="swiperOption">
      <swiper-slide v-for="item of noticeList" :key="item.id">
        <div class="notice-desc">
          <div class="desc1">
            <span>公告</span>
            <p>{{item.desc1title}}</p>
          </div>
          <div class="desc2">
            <span>公告</span>
            <p>{{item.desc2title}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'notice',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        direction: 'vertical'
      },
      noticeList: [
        {
          id: '0001',
          desc1title: '亿品赞预售单发货通知',
          desc2title: '亿品赞春节放假通知'
        },
        {
          id: '0002',
          desc1title: '亿品赞疫情期间发货通知',
          desc2title: '亿品赞APP首次更新公告'
        }
      ],
      rerender: false
    }
  },
  activated () {
    this.rerender = false
    setTimeout(() => {
      this.rerender = true
    }, 100)
  }
}
</script>
<style lang="stylus" scoped>
.notice
  width 100%
  height 3rem
  background #fff
  display flex
  flex-direction row
  justify-content start
  align-items center
  .notice-name
    flex 1
    font-size 1rem
    font-weight bold
    color red
    padding .8rem
  .wrapper
    flex 8
    height 3rem
    overflow hidden
    .notice-desc
      display flex
      flex-direction column
      padding-top .3rem
      .desc1,.desc2
        height 1.2rem
        display flex
        flex-direction row
        justify-content start
        align-items center
      .desc1 span,.desc2 span
        font-size .6rem
        padding .1rem .2rem
        color red
        border solid .1rem red
        border-radius .2rem
      .desc1 p,.desc2 p
        font-size .8rem
        padding-left .5rem
</style>

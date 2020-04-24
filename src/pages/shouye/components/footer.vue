<template>
  <div class="tab">
    <ul v-for="item in tabData" :key="item.name" class="tabItem">
      <li class="tabTo" @click="tabClick(item.path)">
        <img class="tabImg" :src="item.path==$route.path?item.activeImg:item.img">
        <div :class="{'active':item.path==$route.path}"  class="tabText">{{item.name}}</div>
      </li>
    </ul>
    </div>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      activeIndex: 0,
      tabData: [
        {
          path: '/',
          img: 'static/icon/shouye1.png',
          activeImg: 'static/icon/shouye2.png',
          name: '首页'
        },
        {
          path: '/mianfei',
          img: 'static/icon/mianfei1.png',
          activeImg: 'static/icon/mianfei2.png',
          name: '免费试用'
        },
        {
          path: '/chaojifan',
          img: 'static/icon/chaojifan1.png',
          activeImg: 'static/icon/chaojifan2.png',
          name: '超级返'
        },
        {
          path: '/order',
          img: 'static/icon/dingdan1.png',
          activeImg: 'static/icon/dingdan2.png',
          name: '我的订单'
        },
        {
          path: '/wode',
          img: 'static/icon/wode1.png',
          activeImg: 'static/icon/wode2.png',
          name: '我的'
        }
      ]
    }
  },
  methods: {
    tabClick: function (path) {
      this.$router.push({path: '.' + path})
    }
  }
}
</script>
<style lang="stylus" scoped>
.active
  color red
.tab
  width 100%
  height 3rem
  padding .2rem 0
  position fixed
  left 0
  bottom 0
  background #fff
  z-index 2
  display flex
  flex-direction row
  justify-content space-around
  border-top solid .1rem #eee
  .tabTo
    display flex
    flex-direction column
    justify-content center
    align-items center
    .tabImg
      width 1.8rem
      height 1.8rem
    .tabText
      font-size .8rem
      margin-top .2rem
</style>

<template>
  <div class="fenxiangdao">
    <div class="zhezhaoceng" @touchmove.prevent @click="closefenxiang"></div>
    <div class="fenxiangdetail">
      <div class="fenxiangdesc" v-for="(item,index) of fenxiangList" :key="index">
        <img :src="item.fenxiangicon">
        <p>{{item.fenxiangtitle}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fenxiangdao',
  data () {
    return {
      showfenxiangdao: 0,
      fenxiangList: [
        {
          fenxiangicon: 'static/icon/weixinhaoyou.png',
          fenxiangtitle: '微信好友'
        },
        {
          fenxiangicon: 'static/icon/pengyouquan.png',
          fenxiangtitle: '微信朋友圈'
        },
        {
          fenxiangicon: 'static/icon/QQ2.png',
          fenxiangtitle: 'QQ'
        },
        {
          fenxiangicon: 'static/icon/QQkongjian.png',
          fenxiangtitle: 'QQ空间'
        },
        {
          fenxiangicon: 'static/icon/xinxi.png',
          fenxiangtitle: '信息'
        },
        {
          fenxiangicon: 'static/icon/lianjie.png',
          fenxiangtitle: '复制链接'
        }
      ]
    }
  },
  methods: {
    closefenxiang () {
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.fenxiangdao
  width 100%
  background #fff
  .zhezhaoceng
    width 100%
    height 200%
    background #000
    opacity .2
    position absolute
    left 0
    top 0
    z-index 3
  .fenxiangdetail
    width 100%
    background #fff
    z-index 4
    position fixed
    left 0
    bottom 0
    display flex
    flex-direction row
    flex-wrap wrap
    .fenxiangdesc
      width 25%
      display flex
      flex-direction column
      justify-content center
      align-items center
    .fenxiangdesc img
      width 2.2rem
      height 2.2rem
      padding .8rem 0
    .fenxiangdesc p
      font-size .8rem
      padding-bottom .5rem
</style>

<template>
  <div class="dialogs">
    <div class="zhezhaoceng" @touchmove.prevent></div>
    <div class="dialogs-content" v-show="showdialogs===0">
      <h2>提示</h2>
      <p>请输入搜索关键字</p>
      <span @click="closedialogs">我知道了</span>
    </div>
    <div class="dialogs-content" v-show="showdialogs===1">
      <h2>系统提示</h2>
      <p>确认退出登录？</p>
      <div><span @click="tologinout">确认</span><span @click="closedialogs">取消</span></div>
    </div>
    <div class="dialogs-content" v-show="showdialogs===2" @touchmove.prevent>
      <p>是否将所有消息标记为已读？</p>
      <div><span @click="toyidu">确认</span><span @click="closedialogs">取消</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialogs',
  data () {
    return {
      showdialogs: 0
    }
  },
  methods: {
    closedialogs () {
      this.$emit('change')
    },
    tologinout () {
      this.$emit('lgt')
    },
    toyidu () {
      this.$emit('yd')
    }
  },
  mounted () {
    if (this.$route.path.includes('/search')) {
      this.showdialogs = 0
    } else if (this.$route.path.includes('/shezhi')) {
      this.showdialogs = 1
    } else {
      this.showdialogs = 2
    }
  }
}
</script>
<style lang="stylus" scoped>
.dialogs
  width 100%
  background #fff
  .zhezhaoceng
    width 100%
    height 100%
    background #000
    opacity .2
    position absolute
    left 0
    top 0
    z-index 1
  .dialogs-content
    width 80%
    z-index 2
    background #fff
    position fixed
    top 35%
    left 10%
    display flex
    flex-direction column
    align-items center
    border-radius .3rem
  .dialogs-content h2,.dialogs-content p,.dialogs-content span
    width 100%
    height 2.5rem
    line-height 2.5rem
    text-align center
    font-size .9rem
  .dialogs-content div
    width 100%
    display flex
    flex-direction row
    justify-content space-around
    align-items center
  .dialogs-content span
    color blue
    border-top solid .1rem #eee
  .dialogs-content span:first-of-type
    border-right solid .1rem #eee
</style>

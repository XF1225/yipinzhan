<template>
  <div class="xiaoxititle">
    <div class="title">
      <span class="iconfont jiantou" @click="fanhuiclick">&#xe669;</span>
      <h2 class="name">消息中心</h2>
      <img class="icon-yidu" src="static/icon/quanxuan.png" @click="xiaoxiclick">
    </div>
    <xiaodialog v-show="showdialg" @change="closedialog" @yd="clearxiaoxi"></xiaodialog>
  </div>
</template>
<script>
import xiaodialog from '@/pages/common/dialog'
export default {
  name: 'xiaoxititle',
  data () {
    return {
      showdialg: false
    }
  },
  components: {
    xiaodialog
  },
  methods: {
    fanhuiclick () {
      this.$router.go(-1)
    },
    xiaoxiclick () {
      this.showdialg = true
    },
    closedialog () {
      this.showdialg = false
    },
    clearxiaoxi () {
      this.showdialg = false
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.xiaoxititle
  width 100%
  .title
    width 100%
    height 2.8rem
    background #fff
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom solid .1rem #eee
    .iconfont
        font-size 1.2rem
    .jiantou
        padding-left .3rem
    .icon-yidu
      width 1.3rem
      height 1.3rem
      padding-right .5rem
    .name
      font-size 1rem
</style>

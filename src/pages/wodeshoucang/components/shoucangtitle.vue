<template>
  <div class="shoucangtitle">
    <img src="static/icon/zuojiantouh.png" @click="toup">
    <h2>我的收藏</h2>
    <span v-show="showguanli" @click="guanliclick">管理</span>
    <span v-show="!showguanli" @click="wanchengclick">完成</span>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
export default {
  name: 'shoucangtitle',
  data () {
    return {
      showguanli: true
    }
  },
  methods: {
    toup () {
      this.$router.go(-1)
    },
    guanliclick () {
      this.showguanli = false
      EventBus.$emit('changebolean', true)
    },
    wanchengclick () {
      this.showguanli = true
      EventBus.$emit('changebolean', false)
    }
  }
}
</script>
<style lang="stylus" scoped>
.shoucangtitle
  width 100%
  height 2.5rem
  background #fff
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-bottom solid .1rem #eee
.shoucangtitle img
  width 1.2rem
  height 1.2rem
  padding .5rem
.shoucangtitle h2
  font-size .9rem
.shoucangtitle span
  font-size .75rem
  padding .5rem
</style>

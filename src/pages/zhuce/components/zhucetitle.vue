<template>
  <div class="zhucetitle">
    <img src="static/icon/zuojiantouh.png" @click="toup">
    <h2>注册</h2>
    <router-link tag="span" to="/login">登录</router-link>
  </div>
</template>
<script>
export default {
  name: 'zhucetitle',
  methods: {
    toup () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.zhucetitle
  width 100%
  height 2.5rem
  background #fff
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  border-bottom solid .1rem #eee
.zhucetitle img
  width 1.2rem
  height 1.2rem
  padding .5rem
.zhucetitle h2
  font-size .9rem
.zhucetitle span
  font-size .75rem
  padding .5rem
</style>

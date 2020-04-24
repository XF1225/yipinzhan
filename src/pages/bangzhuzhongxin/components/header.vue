<template>
  <div class="bangzhuheader">
    <router-link to><img src="static/icon/zuojiantouh.png" @click="$router.back(-1)"></router-link>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
  name: 'bangzhuheader',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
.bangzhuheader
  width 100%
  height 2.5rem
  line-height 2.5rem
  background #fff
  display flex
  flex-direction row
  align-items center
  border-bottom solid .1rem #eee
.bangzhuheader img
  width 1.3rem
  height 1.3rem
.bangzhuheader h2
  width 100%
  font-size .9rem
  text-align center
</style>

<template>
  <div class="mianfeiheader">
    <img class="saoyisao" src="static/icon/saoyisao.png">
    <h2 class="mianfeititle">{{title}}</h2>
    <img class="search" src="static/icon/sousuoxiangguan.png" @click="tosearch">
  </div>
</template>
<script>
export default {
  name: 'mianfeiheader',
  props: {
    title: String
  },
  methods: {
    tosearch () {
      this.$router.push('/search')
    }
  }
}
</script>
<style lang="stylus" scoped>
.mianfeiheader
  width 100%
  height :2.5rem
  background #fff
  border-bottom solid .1rem #eee
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  .saoyisao
    width :1.3rem
    height :1.3rem
    margin-left .5rem
  .search
    width :1.3rem
    height :1.3rem
    margin-right .5rem
  .mianfeititle
    font-size .9rem
</style>

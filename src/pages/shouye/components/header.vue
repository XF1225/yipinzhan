<template>
  <div class="header-search">
    <div class="saoyisao"><img src="static/icon/saoyisao.png"></div>
    <div class="search">
      <img src="static/icon/sousuo.png">
      <div class="logo"><img src="static/icon/logo.png"></div>
      <input type="text" placeholder="最火的单品都在这里" @focus="tosearch">
    </div>
    <div class="zixun" @click="toxiaoxi"><img src="static/icon/zixun.png"></div>
  </div>
</template>
<script>
export default {
  name: 'headersearch',
  methods: {
    tosearch () {
      this.$router.push('/search')
    },
    toxiaoxi () {
      if (window.localStorage.getItem('userinfo') === null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/xiaoxizhongxin')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.header-search
  width :100%
  height :2.5rem
  background #fff
  position fixed
  z-index 2
  display :flex
  flex-direction :row
  justify-content :space-around
  align-items:center
  box-shadow : 0 .1rem .2rem rgba(0,0,0,.2)
  .saoyisao,.zixun
    flex :1
    display :flex
    justify-content :center
    align-items:center
  .saoyisao img,.zixun img,.search img
    width :1.3rem
    height :1.3rem
  .search img
    padding-left :.2rem
  .search
    height :1.5rem
    flex :8
    display :flex
    flex-direction :row
    background :#fbf5f5
    justify-content :start
    align-items:center
    border-radius:.2rem
  .search input
    padding-left :.5rem
    background :#fbf5f5
    outline :none
    border :0
    font-size :.8rem
  .logo
    width :3rem
    height :1.3rem
    display :flex
    flex-direction :row
    justify-content :center
    align-items:center
  .logo img
    width :2.5rem
    height :1rem
</style>

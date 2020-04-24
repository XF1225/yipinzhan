<template>
  <div class="scrolltop" v-show="isshow" @click="scrollTop">
    <img src="static/icon/huidaodingbu.png">
  </div>
</template>
<script>
export default {
  name: 'scrolltop',
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    listenscroll () {
      let Top = document.documentElement.scrollTop || document.body.scrollTop
      if (Top >= 300 && !this.isshow) {
        this.isshow = true
      } else if (Top < 300 && this.isshow) {
        this.isshow = false
      }
    },
    scrollTop () {
      window.scrollTo(0, 0)
    }
  },
  activated () {
    window.addEventListener('scroll', this.listenscroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.listenscroll)
  }
}
</script>
<style lang="stylus" scoped>
.scrolltop
  position fixed
  right .5rem
  bottom 5rem
  z-index 2
  width 2rem
  height 2rem
  border-radius 50%
  border solid .1rem #fff
  background rgba(0,0,0,.5)
  display flex
  justify-content center
  align-items center
.scrolltop img
  width 70%
</style>

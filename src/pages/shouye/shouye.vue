<template>
  <div>
    <headersearch></headersearch>
    <swipercontent></swipercontent>
    <indexnav></indexnav>
    <notice></notice>
    <yugao></yugao>
    <meinvxiuchang></meinvxiuchang>
    <tuijian></tuijian>
    <scrolltop></scrolltop>
    <tabbar></tabbar>
  </div>
</template>
<script>
import headersearch from './components/header'
import swipercontent from './components/swiper'
import indexnav from './components/indexnav'
import notice from './components/notice'
import yugao from './components/yugao'
import meinvxiuchang from './components/meinvxiuchang'
import tuijian from './components/tuijian'
import scrolltop from './components/scrolltop'
import tabbar from './components/footer'
export default {
  name: 'shouye',
  components: {
    headersearch,
    swipercontent,
    indexnav,
    notice,
    yugao,
    meinvxiuchang,
    tuijian,
    scrolltop,
    tabbar
  }
}
</script>
<style lang="stylus" scoped>

</style>

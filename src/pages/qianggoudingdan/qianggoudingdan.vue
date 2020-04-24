<template>
  <div>
    <shezhititle :htitle="htitle"></shezhititle>
    <scrollnav></scrollnav>
    <qianggoucontent></qianggoucontent>
    <scrolltop></scrolltop>
  </div>
</template>
<script>
import shezhititle from '../shezhi/components/shezhititle'
import scrollnav from './components/scrollnav'
import qianggoucontent from './components/qianggoucontent'
import scrolltop from '../shouye/components/scrolltop'
export default {
  name: 'qianggoudingdan',
  components: {
    shezhititle,
    scrollnav,
    qianggoucontent,
    scrolltop
  },
  data () {
    return {
      htitle: '抢购订单'
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

<template>
  <div>
    <wodeheader></wodeheader>
    <wodecontents></wodecontents>
    <tabbar></tabbar>
  </div>
</template>
<script>
import wodeheader from './components/wodeheader'
import wodecontents from './components/wodecontents'
import tabbar from '@/pages/shouye/components/footer'
export default {
  name: 'wode',
  components: {
    wodeheader,
    wodecontents,
    tabbar
  }
}
</script>
<style lang="stylus" scoped>

</style>

<template>
  <div>
    <ordertitle></ordertitle>
    <ordercontent></ordercontent>
    <tabbar></tabbar>
  </div>
</template>
<script>
import ordertitle from './components/ordertitle'
import ordercontent from './components/ordercontent'
import tabbar from '@/pages/shouye/components/footer'
export default {
  name: 'order',
  components: {
    ordertitle,
    ordercontent,
    tabbar
  }
}
</script>
<style lang="stylus" scoped>

</style>

<template>
  <div>
    <bangzhuheader :title="title"></bangzhuheader>
    <bangzhucontent></bangzhucontent>
  </div>
</template>
<script>
import bangzhuheader from './components/header'
import bangzhucontent from './components/content'
export default {
  name: 'bangzhuzhongxin',
  components: {
    bangzhuheader,
    bangzhucontent
  },
  data () {
    return {
      title: '帮助中心'
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

<template>
  <div>
    <bangzhuheader :title='title'></bangzhuheader>
    <shangxincontent></shangxincontent>
  </div>
</template>
<script>
import bangzhuheader from '../bangzhuzhongxin/components/header'
import shangxincontent from './components/shangxincontent'
export default {
  name: 'shangxinyugao',
  components: {
    bangzhuheader,
    shangxincontent
  },
  data () {
    return {
      title: '上新预告'
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

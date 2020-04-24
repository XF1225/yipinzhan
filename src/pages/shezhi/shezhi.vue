<template>
  <div>
    <shezhititle :htitle="htitle"></shezhititle>
    <shezhicontent></shezhicontent>
  </div>
</template>
<script>
import shezhititle from './components/shezhititle'
import shezhicontent from './components/shezhicontent'
export default {
  name: 'shezhi',
  components: {
    shezhititle,
    shezhicontent
  },
  data () {
    return {
      htitle: '设置'
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

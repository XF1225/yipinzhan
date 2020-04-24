<template>
  <div class="wodeshoucang">
    <shoucangtitle></shoucangtitle>
    <shoucangcontent></shoucangcontent>
  </div>
</template>
<script>
import shoucangtitle from './components/shoucangtitle'
import shoucangcontent from './components/shoucangcontent'
export default {
  name: 'wodeshoucang',
  components: {
    shoucangtitle,
    shoucangcontent
  }
}
</script>
<style lang="stylus" scoped>

</style>

<template>
  <div>
    <mianfeiheader :title="chaojifantitle"></mianfeiheader>
    <mianfeinav></mianfeinav>
    <chaojifancontents></chaojifancontents>
    <scrolltop></scrolltop>
    <tabbar></tabbar>
  </div>
</template>
<script>
import axios from 'axios'
import mianfeiheader from '@/pages/mianfei/components/mianfeiheader'
import mianfeinav from '@/pages/mianfei/components/mianfeinav'
import chaojifancontents from './components/chaojifancontents'
import scrolltop from '@/pages/shouye/components/scrolltop'
import tabbar from '@/pages/shouye/components/footer'
export default {
  name: 'chaojifan',
  components: {
    mianfeiheader,
    mianfeinav,
    chaojifancontents,
    scrolltop,
    tabbar
  },
  data () {
    return {
      chaojifantitle: ''
    }
  },
  methods: {
    getchaojifantitle () {
      axios.get('/api/data1.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getchaojifantitleSucc)
    },
    getchaojifantitleSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.chaojifantitle = data.chaojifantitle
      }
    }
  },
  mounted () {
    this.getchaojifantitle()
  }
}
</script>
<style lang="stylus" scoped>

</style>

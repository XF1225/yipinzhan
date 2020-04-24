<template>
  <div>
    <mianfeiheader :title="mianfeititle"></mianfeiheader>
    <mianfeinav :sxtjList="sxtjList"></mianfeinav>
    <mianfeicontents></mianfeicontents>
    <scrolltop></scrolltop>
    <tabbar></tabbar>
  </div>
</template>
<script>
import axios from 'axios'
import mianfeiheader from './components/mianfeiheader'
import mianfeinav from './components/mianfeinav'
import mianfeicontents from './components/mianfeicontents'
import scrolltop from '@/pages/shouye/components/scrolltop'
import tabbar from '@/pages/shouye/components/footer'
export default {
  name: 'mianfei',
  components: {
    mianfeiheader,
    mianfeinav,
    mianfeicontents,
    scrolltop,
    tabbar
  },
  data () {
    return {
      mianfeititle: '',
      sxtjList: []
    }
  },
  methods: {
    getmianfeititle () {
      axios.get('/api/data1.json').then(this.getmianfeititleSucc)
    },
    getmianfeititleSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.mianfeititle = data.mianfeititle
        this.sxtjList = data.sxtjList
      }
    }
  },
  mounted () {
    this.getmianfeititle()
  }
}
</script>
<style lang="stylus" scoped>

</style>

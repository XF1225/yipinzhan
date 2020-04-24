<template>
  <div>
    <shiyongtitle :title="shiyongtitle"></shiyongtitle>
    <swipercontent :list="mianfeiList"></swipercontent>
    <shiyongdetail :list="mianfeiList"></shiyongdetail>
    <shiyongxuzhi></shiyongxuzhi>
    <shiyongfooter :list="mianfeiList"></shiyongfooter>
  </div>
</template>
<script>
import axios from 'axios'
import shiyongtitle from '@/pages/huodongxiangqing/components/title'
import swipercontent from './components/swiper'
import shiyongdetail from './components/shiyongdetail'
import shiyongxuzhi from './components/shiyongxuzhi'
import shiyongfooter from './components/shiyongfooter'
export default {
  name: 'shiyongxiangqing',
  data () {
    return {
      mianfeiList: [],
      shiyongtitle: ''
    }
  },
  components: {
    shiyongtitle,
    swipercontent,
    shiyongdetail,
    shiyongxuzhi,
    shiyongfooter
  },
  methods: {
    getmianfeiList () {
      axios.get('/api/list.json').then(this.getmianfeiListSucc)
    },
    getmianfeiListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.mianfeiList = data.mianfeiList.filter(item => item.id === this.$route.params.id)
        this.shiyongtitle = data.shiyongtitle
      }
    }
  },
  activated () {
    this.getmianfeiList()
  }
}
</script>
<style lang="stylus" scoped>

</style>

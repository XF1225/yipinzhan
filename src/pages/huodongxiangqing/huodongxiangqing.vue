<template>
  <div>
    <hdxqtitle :title="huodongtitle"></hdxqtitle>
    <swipercontent :list="chaojifanList"></swipercontent>
    <huodongdetail :list="chaojifanList"></huodongdetail>
    <qianggouxuzhi :list="chaojifanList"></qianggouxuzhi>
    <footerbar></footerbar>
  </div>
</template>
<script>
import axios from 'axios'
import hdxqtitle from './components/title'
import swipercontent from './components/swiper'
import huodongdetail from './components/huodongdetail'
import qianggouxuzhi from './components/qianggouxuzhi'
import footerbar from './components/footerbar'
export default {
  name: 'huodongxiangqing',
  data () {
    return {
      chaojifanList: [],
      huodongtitle: ''
    }
  },
  components: {
    hdxqtitle,
    swipercontent,
    huodongdetail,
    qianggouxuzhi,
    footerbar
  },
  methods: {
    getchaojifanList () {
      axios.get('/api/list.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getchaojifanListSucc)
    },
    getchaojifanListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.chaojifanList = data.chaojifanList.filter(item => item.id === this.$route.params.id)
        this.huodongtitle = data.huodongtitle
        /* sessionStorage.setItem('hdxqdetail', JSON.stringify(this.chaojifanList))
        let aa = sessionStorage.getItem('hdxqdetail')
        aa = JSON.parse(aa)
        console.log(aa) */
      }
    }
  },
  // 用activated代替mounted函数可以轻松解决路由跳转不刷新的问题
  activated () {
    this.getchaojifanList()
  }
}
</script>
<style lang="stylus" scoped>

</style>

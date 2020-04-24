<template>
  <div class='mianfeinav' @touchmove.prevent>
    <div class='nav-up'>
      <li v-for="(item,index) of navupList" :key="item.id" :class="index===num?'active':''" @click="navupclick(index)">{{item.name}}</li>
    </div>
    <div class='nav-down'>
      <div class="down-moren">
        <li v-for="(item,index) of downmorenList" :key="item.id" :class="index===morennum?'actived':''" @click="morenclick(index)">{{item.name}}</li>
      </div>
      <div class="down-jiage" v-show="changeimg"><li :class="true===jiageactived?'actived':''" @click="downpriceclick"><span>价格</span><img src='static/icon/jiantoushang.png' v-if="jiageimg"></li></div>
      <div class="down-jiage" v-show="!changeimg"><li :class="true===jiageactived?'actived':''" @click="uppriceclick"><span>价格</span><img src='static/icon/jiantouxia.png' v-if="jiageimg"></li></div>
      <div class="down-shaixuan" @click='showzhezhaoceng'><li>筛选</li><img src='static/icon/filter.png'></div>
    </div>
    <div class='shaixuan' v-show='zhezhaoceng'>
      <div class='zhezhaoceng' @touchmove.prevent @click="closeshaixuan"></div>
      <div class='contents'>
        <h2 class='header-title'>筛选</h2>
        <div v-show='showleixing'>
          <xuanxiangka :List='hdztList'></xuanxiangka>
          <xuanxiangka :List='spflList'></xuanxiangka>
          <xuanxiangka :shaixuantiaojian='sxtjList'></xuanxiangka>
        </div>
        <div v-show='!showleixing'>
          <xuanxiangka :List='mleixingList'></xuanxiangka>
          <xuanxiangka :List='mspflList'></xuanxiangka>
          <xuanxiangka :shaixuantiaojian='msxtjList'></xuanxiangka>
        </div>
        <div class='jiagequjian'>
          <h3>价格区间(元)</h3>
          <div class='qujian'>
            <input type='text' class='zuidijia' placeholder='最低价'>-
            <input type='text' class='zuigaojia' placeholder='最高价'>
          </div>
        </div>
        <div class='bottoms'>
          <li class='chongzhi' @click='handlechongzhi'>重置</li>
          <li class='wancheng' @click='handlewancheng'>完成</li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import xuanxiangka from '@/pages/common/xuanxiangka'
import { EventBus } from '@/assets/js/bus.js'
export default {
  name: 'mianfeinav',
  components: {
    xuanxiangka
  },
  data () {
    return {
      zhezhaoceng: false,
      showleixing: false,
      activing: 0,
      hdztList: [],
      spflList: [],
      sxtjList: [],
      mleixingList: [],
      mspflList: [],
      msxtjList: [],
      navupList: [
        {
          id: '01001',
          name: '全部'
        },
        {
          id: '01002',
          name: '淘宝'
        },
        {
          id: '01003',
          name: '天猫'
        },
        {
          id: '01004',
          name: '京东'
        }
      ],
      downmorenList: [
        {
          id: '02001',
          name: '默认'
        },
        {
          id: '02002',
          name: '最新'
        },
        {
          id: '02003',
          name: '人气'
        }
      ],
      num: 0,
      morennum: 0,
      changeimg: false,
      jiageimg: false,
      jiageactived: false
    }
  },
  methods: {
    getxuanxiangkainfo () {
      Axios.get('/api/data1.json').then(this.getxuanxiangkainfoSucc)
    },
    getxuanxiangkainfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hdztList = data.hdztList
        this.spflList = data.spflList
        this.sxtjList = data.sxtjList
        this.mleixingList = data.mleixingList
        this.mspflList = data.mspflList
        this.msxtjList = data.msxtjList
      }
    },
    // 根据路由参数显示不同内容
    showzhezhaoceng () {
      this.zhezhaoceng = true
      if (this.$route.path === '/chaojifan') {
        this.showleixing = true
      } else {
        this.showleixing = false
      }
    },
    closeshaixuan () {
      this.zhezhaoceng = false
    },
    handlechongzhi () {
      // Object.assign(this.$data, this.$options.data())
      if (this.$route.path === '/chaojifan') {
        this.hdztList = []
        this.spflList = []
        this.sxtjList = []
        setTimeout(() => {
          Axios.get('/api/data1.json').then((res) => {
            res = res.data
            const data = res.data
            this.hdztList = data.hdztList
            this.spflList = data.spflList
            this.sxtjList = data.sxtjList
            EventBus.$emit('isactiving', 0)
          })
        }, 50)
      } else {
        this.mleixingList = []
        this.mspflList = []
        this.msxtjList = []
        setTimeout(() => {
          Axios.get('/api/data1.json').then((res) => {
            res = res.data
            const data = res.data
            this.mleixingList = data.mleixingList
            this.mspflList = data.mspflList
            this.msxtjList = data.msxtjList
            EventBus.$emit('isactiving', 0)
          })
        }, 50)
      }
    },
    handlewancheng () {
      this.zhezhaoceng = false
      this.handlechongzhi()
      EventBus.$emit('wancheng', true)
    },
    navupclick (index) {
      this.num = index
      this.morennum = 0
      this.jiageimg = false
      this.jiageactived = false
      if (index === 0) {
        EventBus.$emit('mfquanbu', true)
        EventBus.$emit('cjfquanbu', true)
      }
      if (index === 1) {
        EventBus.$emit('mftaobao', true)
        EventBus.$emit('cjftaobao', true)
      }
      if (index === 2) {
        EventBus.$emit('mftianmao', true)
        EventBus.$emit('cjftianmao', true)
      }
      if (index === 3) {
        EventBus.$emit('mfjingdong', true)
        EventBus.$emit('cjfjingdong', true)
      }
    },
    morenclick (index) {
      this.morennum = index
      this.jiageimg = false
      this.jiageactived = false
      if (index === 0 && this.num === 0) {
        EventBus.$emit('mfquanbu', true)
        EventBus.$emit('cjfquanbu', true)
        location.reload()
      } else if (index === 0 && this.num === 1) {
        EventBus.$emit('mftaobao', true)
        EventBus.$emit('cjftaobao', true)
      } else if (index === 0 && this.num === 2) {
        EventBus.$emit('mftianmao', true)
        EventBus.$emit('cjftianmao', true)
      } else if (index === 0 && this.num === 3) {
        EventBus.$emit('mfjingdong', true)
        EventBus.$emit('cjfjingdong', true)
      }
    },
    uppriceclick () {
      this.morennum = 3
      this.changeimg = !this.changeimg
      this.jiageimg = true
      this.jiageactived = true
      if (this.num === 3 || this.num === 2 || this.num === 1 || this.num === 0) {
        EventBus.$emit('upprice', true)
      }
    },
    downpriceclick () {
      this.morennum = 3
      this.changeimg = !this.changeimg
      this.jiageimg = true
      this.jiageactived = true
      if (this.num === 3 || this.num === 2 || this.num === 1 || this.num === 0) {
        EventBus.$emit('downprice', true)
      }
    }
  },
  mounted () {
    this.getxuanxiangkainfo()
  }
}
</script>
<style lang='stylus' scoped>
.active
  color red
  border-bottom solid .12rem red
.actived
  color red
.mianfeinav
  width 100%
  background #fff
  display flex
  flex-direction column
  .nav-up,.nav-down
    width 100%
    height 2.4rem
    color #666
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    border-bottom solid .1rem #eee
  .nav-up li
    height 2.4rem
    line-height 2.4rem
    display inline-block
    font-size .8rem
  .nav-down
    height 2.2rem
    display flex
    flex-direction row
    align-items center
    .down-moren
      flex 3
      color #666
      display flex
      flex-direction row
      justify-content space-around
      align-items center
    .down-moren li,.down-shaixuan li,.down-jiage li
      height 2.2rem
      line-height 2.2rem
      display flex
      align-items center
      font-size .8rem
    .down-jiage img,.down-shaixuan img
      width 1.1rem
      height 1.1rem
    .down-shaixuan,.down-jiage
      height 2.2rem
      flex 1
      color #666
      display flex
      justify-content center
      align-items center
    .down-shaixuan
      border-left solid .5px #eee
  .shaixuan
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 3
    .zhezhaoceng
      position absolute
      width 100%
      height 100%
      background rgba(0,0,0,.4)
      z-index 1
    .contents
      z-index 2
      overflow auto  //@touchmove.prevent遮罩层禁止滑动，遮罩层上面可以滑动
      position fixed
      right 0
      top 0
      width 78%
      height 100%
      background #fff
      display flex
      flex-direction column
      .header-title
        width 100%
        background #eee
        color #666
        font-size .8rem
        margin-top 1rem
        padding .5rem
      .fenlei
        width 100%
        display flex
        flex-direction column
        border-top solid .5px #eee
      .fenlei h3
        font-size .8rem
        padding .5rem 0 .3rem .5rem
      .fenlei-desc
        width 95%
        margin .2rem auto
        text-align center
        display flex
        flex-direction row
        justify-content start
        flex-wrap wrap
        .desc-li
          width 30%
          margin .3rem .2rem
          padding .3rem 0
          background #eee
          display inline-block
          font-size .8rem
          border-radius .3rem
        .activing
          color red
          background #f3b6ca
      .jiagequjian
        width 100%
        margin-bottom 4rem
        display flex
        flex-flow column
        border-top solid .5px #eee
      .jiagequjian h3
        font-size .8rem
        padding .5rem
      .qujian
        width 95%
        margin 0 auto
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .zuidijia,.zuigaojia
          width 40%
          padding .3rem .5rem
          border solid .5px #c1bdbd
          border-radius .2rem
          display flex
          justify-content center
          align-items center
          text-align center
          outline none
        .zuidijia::placeholder,.zuigaojia::placeholder
          color #ccc6c6
          font-size .7rem
          text-align center
      .bottoms
        width 78%
        height 2.5rem
        position fixed
        right 0
        bottom 0
        display flex
        flex-direction row
        justify-content center
        align-items center
        .chongzhi,.wancheng
          width 50%
          height 2.5rem
          display flex
          justify-content center
          align-items center
          font-size .8rem
          color #fff
          background #ff8d00
        .wancheng
          background red
</style>

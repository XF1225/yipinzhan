<template>
  <div class="chaojifan-contents">
    <div class="chaojifan-desc" v-for="item of cjfList" :key="item.id" @click="handlecjfdetail(item.id)">
      <img class="chaojifan-img" v-lazy="item.chaojifanimg" alt="">
      <div class="chaojifan-title">
        <p><img :src="item.icon" alt="">{{item.title}}</p>
      </div>
      <div class="chaojifan-mine">
        <div class="left">￥<span>{{item.jiage}}</span></div>
        <div class="right">份数:
        <span>{{item.shengyufenshu}}</span>/<span>{{item.zongfenshu}}</span>
        </div>
      </div>
      <div class="chaojifan-bottom">
        <span class="price">￥{{item.yuanjia}}</span>
        <span class="fan">返{{item.fanhuan}}</span>
      </div>
    </div>
    <loading v-show="showloading"></loading>
    <div class="zwsp" v-show="showzwsp"><img src="static/icon/zwsp.png"></div>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
import loading from '../../common/loading'
export default {
  name: 'chaojifancontents',
  components: {loading},
  data () {
    return {
      chaojifanList: [
        {
          id: '030001',
          chaojifanimg: 'static/images/erji.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】四核双动圈入耳式有线耳机一副',
          jiage: '11.60',
          shengyufenshu: '1',
          zongfenshu: '14',
          yuanjia: '58.00',
          fanhuan: '46.4'
        },
        {
          id: '030002',
          chaojifanimg: 'static/images/dadikujr.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】320g加绒加厚防污打底裤1条',
          jiage: '24.60',
          shengyufenshu: '25',
          zongfenshu: '50',
          yuanjia: '49.30',
          fanhuan: '24.7'
        },
        {
          id: '030003',
          chaojifanimg: 'static/images/li.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】脆甜新鲜雪梨皇冠酥梨5斤带箱',
          jiage: '17.90',
          shengyufenshu: '7',
          zongfenshu: '15',
          yuanjia: '35.80',
          fanhuan: '17.9'
        },
        {
          id: '030004',
          chaojifanimg: 'static/images/madingxue.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】真皮马丁靴女新款英伦百搭1双',
          jiage: '19.90',
          shengyufenshu: '3',
          zongfenshu: '10',
          yuanjia: '49.90',
          fanhuan: '30'
        },
        {
          id: '030005',
          chaojifanimg: 'static/images/xifalu.jpg',
          icon: 'static/icon/tianmao.png',
          title: '【限时优惠】网红款香氛洗发水500ML',
          jiage: '5.00',
          shengyufenshu: '13',
          zongfenshu: '20',
          yuanjia: '29.90',
          fanhuan: '14.9'
        },
        {
          id: '030006',
          chaojifanimg: 'static/images/sanjiaku.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】6条女士抗菌三角裤',
          jiage: '25.00',
          shengyufenshu: '10',
          zongfenshu: '15',
          yuanjia: '65.80',
          fanhuan: '40.8'
        },
        {
          id: '030007',
          chaojifanimg: 'static/images/lianyiqun.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】2020新款chic连衣裙女春',
          jiage: '19.00',
          shengyufenshu: '21',
          zongfenshu: '30',
          yuanjia: '39.00',
          fanhuan: '20'
        },
        {
          id: '030008',
          chaojifanimg: 'static/images/erji.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】四核双动圈入耳式有线耳机一副',
          jiage: '11.60',
          shengyufenshu: '1',
          zongfenshu: '14',
          yuanjia: '58.00',
          fanhuan: '46.4'
        },
        {
          id: '030009',
          chaojifanimg: 'static/images/dadikujr.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】320g加绒加厚防污打底裤1条',
          jiage: '24.60',
          shengyufenshu: '25',
          zongfenshu: '50',
          yuanjia: '49.30',
          fanhuan: '24.7'
        },
        {
          id: '030010',
          chaojifanimg: 'static/images/li.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】脆甜新鲜雪梨皇冠酥梨5斤带箱',
          jiage: '17.90',
          shengyufenshu: '7',
          zongfenshu: '15',
          yuanjia: '35.80',
          fanhuan: '17.9'
        },
        {
          id: '030011',
          chaojifanimg: 'static/images/madingxue.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】真皮马丁靴女新款英伦百搭1双',
          jiage: '19.90',
          shengyufenshu: '3',
          zongfenshu: '10',
          yuanjia: '49.90',
          fanhuan: '30'
        },
        {
          id: '030012',
          chaojifanimg: 'static/images/xifalu.jpg',
          icon: 'static/icon/tianmao.png',
          title: '【限时优惠】网红款香氛洗发水500ML',
          jiage: '5.00',
          shengyufenshu: '13',
          zongfenshu: '20',
          yuanjia: '29.90',
          fanhuan: '14.9'
        },
        {
          id: '030013',
          chaojifanimg: 'static/images/sanjiaku.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】6条女士抗菌三角裤',
          jiage: '25.00',
          shengyufenshu: '10',
          zongfenshu: '15',
          yuanjia: '65.80',
          fanhuan: '40.8'
        },
        {
          id: '030014',
          chaojifanimg: 'static/images/lianyiqun.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】2020新款chic连衣裙女春',
          jiage: '19.00',
          shengyufenshu: '21',
          zongfenshu: '30',
          yuanjia: '39.00',
          fanhuan: '20'
        }
      ],
      cjfList: [],
      showloading: false,
      showzwsp: false
    }
  },
  methods: {
    handlecjfdetail (id) {
      this.$router.push({path: `/huodongxiangqing/${id}`})
      /* sessionStorage.setItem('hdxqdetail', JSON.stringify(this.chaojifanList))
      var hdxqdetail = sessionStorage.getItem('hdxqdetail')
      hdxqdetail = JSON.parse(hdxqdetail)
      console.log(hdxqdetail) */
    }
  },
  mounted () {
    this.showloading = true
    setTimeout(() => {
      this.showloading = false
      this.cjfList = this.chaojifanList
    }, 1500)
    EventBus.$on('cjfquanbu', () => {
      this.showzwsp = false
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList = this.chaojifanList
      }, 1500)
    })
    EventBus.$on('cjftaobao', () => {
      this.showzwsp = false
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList = this.chaojifanList.filter(item => item.icon.includes('taobao'))
        if (this.cjfList.length === 0) { this.showzwsp = true }
      }, 1500)
    })
    EventBus.$on('cjftianmao', () => {
      this.showzwsp = false
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList = this.chaojifanList.filter(item => item.icon.includes('tianmao'))
        if (this.cjfList.length === 0) { this.showzwsp = true }
      }, 1500)
    })
    EventBus.$on('cjfjingdong', () => {
      this.showzwsp = false
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList = this.chaojifanList.filter(item => item.icon.includes('jingdong'))
        if (this.cjfList.length === 0) { this.showzwsp = true }
      }, 1500)
    })
    EventBus.$on('upprice', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList.sort((a, b) =>
          a.jiage - b.jiage
        )
      }, 1500)
    })
    EventBus.$on('downprice', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList.sort((a, b) =>
          b.jiage - a.jiage
        )
      }, 1500)
    })
    EventBus.$on('wancheng', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
      }, 1000)
    })
  }
}
</script>
<style lang="stylus" scoped>
.chaojifan-contents
  display flex
  flex-direction row
  justify-content space-between
  flex-wrap wrap
  padding-bottom 3.5rem
  position relative
  .chaojifan-desc
    width 49.3%
    margin-top .3rem
    padding-bottom .8rem
    background #fff
    display flex
    flex-direction column
    .chaojifan-img
      width 100%
      height 164.33px
      margin-bottom .2rem
    .chaojifan-title
      width 94%
      margin 0 auto
    .chaojifan-title img
      width .9rem
      height .9rem
      margin-bottom -.15rem
    .chaojifan-title p
      line-height 1.2rem
      padding .2rem 0
      font-size .8rem
      word-break break-all //防止换行出现空格
      display -webkit-box
      overflow hidden
      -webkit-box-orient vertical
      -webkit-line-clamp 2
    .chaojifan-mine,.chaojifan-bottom
      width 95%
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .left,.right
        font-size .7rem
        padding .3rem 0 .5rem 0
      .left
        color red
      .left span
        font-weight bolder
      .right
        color #666
    .chaojifan-bottom span
      font-size .7rem
    .price
      color #666
      text-decoration line-through
    .fan
      padding .1rem .5rem
      color #f19951
      border solid .1px #f19951
      position relative
      z-index 0
    .fan::before
      content ""
      width .1rem
      height .3rem
      position absolute
      border 0.05rem solid #f19951
      border-radius 0 .3rem .3rem 0
      border-left .1rem solid #fff
      left -0.03rem
      top .25rem
    .fan::after
      content ""
      width .1rem
      height .3rem
      position absolute
      border 0.05rem solid #f19951
      border-radius .3rem 0 0 .3rem
      border-right .1rem solid #fff
      right -0.02rem
      top .25rem
  .zwsp
    width 70%
    height 45vh
    margin 0 auto
    display flex
    justify-content center
    align-items center
  .zwsp img
    width 100%
</style>

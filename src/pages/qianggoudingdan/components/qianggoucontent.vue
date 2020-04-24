<template>
  <div class="qianggoucontent">
    <div class="content-desc" v-for="item of qianggouList" :key="item.id" @click="todetail(item.id)">
      <div class="icon-title">
        <div><img :src="item.icon">{{item.iconname}}</div>
        <p>{{item.zhuangtai}}</p>
      </div>
      <div class="detail">
        <img v-lazy="item.qianggouimg">
        <div>
          <h3>{{item.title}}</h3>
          <p>抢购价格:<span>￥{{item.qianggoujiage}}</span></p>
          <p>下单价格:<span>￥{{item.xiadanjiage}}</span></p>
          <p>返还金额:<span>￥{{item.fanhuan}}</span></p>
        </div>
      </div>
      <div class="jilu">
        <span>抢购记录</span>
      </div>
    </div>
    <loading v-show="showloading"></loading>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
import loading from '../../common/loading'
export default {
  name: 'qianggoucontent',
  components: {loading},
  data () {
    return {
      qianggouList: [
        {
          id: '030001',
          icon: 'static/icon/taobao.png',
          iconname: '淘宝',
          zhuangtai: '已完成',
          qianggouimg: 'static/images/erji.jpg',
          title: '入耳式有线耳机一副',
          qianggoujiage: '11.60',
          xiadanjiage: '58.00',
          fanhuan: '46.4'
        },
        {
          id: '030002',
          icon: 'static/icon/taobao.png',
          iconname: '淘宝',
          zhuangtai: '已完成',
          qianggouimg: 'static/images/dadikujr.jpg',
          title: '打底裤1条',
          qianggoujiage: '24.60',
          xiadanjiage: '49.30',
          fanhuan: '24.7'
        },
        {
          id: '030003',
          icon: 'static/icon/taobao.png',
          iconname: '淘宝',
          zhuangtai: '已完成',
          qianggouimg: 'static/images/li.jpg',
          title: '皇冠酥梨5斤带箱',
          qianggoujiage: '17.90',
          xiadanjiage: '35.80',
          fanhuan: '17.9'
        },
        {
          id: '030004',
          icon: 'static/icon/taobao.png',
          iconname: '淘宝',
          zhuangtai: '已完成',
          qianggouimg: 'static/images/madingxue.jpg',
          title: '马丁靴女新款英伦百搭1双',
          qianggoujiage: '19.90',
          xiadanjiage: '49.90',
          fanhuan: '30'
        },
        {
          id: '030005',
          icon: 'static/icon/tianmao.png',
          iconname: '天猫',
          zhuangtai: '已完成',
          qianggouimg: 'static/images/xifalu.jpg',
          title: '洗发水500ML',
          qianggoujiage: '5.00',
          xiadanjiage: '29.90',
          fanhuan: '14.9'
        }
      ],
      showloading: false
    }
  },
  methods: {
    todetail (id) {
      this.$router.push(`/huodongxiangqing/${id}`)
    }
  },
  mounted () {
    this.showloading = true
    setTimeout(() => {
      this.showloading = false
      this.cjfList = this.chaojifanList
    }, 1500)
    EventBus.$on('loadingnav', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.cjfList = this.chaojifanList
      }, 1500)
    })
  }
}
</script>
<style lang="stylus" scoped>
.qianggoucontent
  width 100%
  display flex
  flex-direction column
  position relative
  .content-desc
    width 100%
    background #fff
    display flex
    flex-direction column
    margin-top .5rem
    .icon-title
      height 2rem
      font-size .8rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .icon-title div
      padding-left .5rem
      display flex
      flex-direction row
      justify-content center
      align-items center
    .icon-title img
      width .9rem
      height .9rem
      padding-right .3rem
    .icon-title p
      padding-right .5rem
    .detail
      width 100%
      display flex
      flex-direction row
      align-items center
    .detail img
      width 5rem
      height 5rem
      padding .5rem
    .detail div
      display flex
      flex-direction column
    .detail h3
      font-size .8rem
      padding-bottom .3rem
    .detail p
      font-size .7rem
      line-height 1.2rem
      color #666
    .detail span
      color red
    .jilu
      width 96%
      margin 0 auto
      border-top solid .1px #eee
    .jilu span
      font-size .7rem
      float right
      padding .3rem
      margin .5rem 0
      border solid .06rem #666
      border-radius .2rem
</style>

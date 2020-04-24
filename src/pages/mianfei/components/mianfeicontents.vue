<template>
  <div class="mianfei-contents">
    <div class="mianfei-desc" v-for="item of mfList" :key="item.id" @click="shiyongxiangqingclick(item.id)">
      <img class="mianfei-img" v-lazy="item.mianfeiimg" alt="">
      <div class="mianfei-title">
        <p><img :src="item.icon" alt="">{{item.title}}</p>
      </div>
      <div class="mianfei-mine">
        <div class="jiazhi">价值<span>{{item.jiazhi}}</span></div>
        <div class="xianliang">限量<span>{{item.xianliang}}</span>份
        </div>
      </div>
      <div class="mianfei-bottom">
        <span class="shenqingnum">{{item.shenqingnum}}人申请</span>
        <span class="mfsq">免费申请</span>
      </div>
    </div>
    <loading v-show="showloading"></loading>
  </div>
</template>
<script>
import { EventBus } from '@/assets/js/bus.js'
import loading from '../../common/loading'
export default {
  name: 'mianfeicontents',
  components: {loading},
  data () {
    return {
      mianfeiList: [
        {
          id: '020001',
          mianfeiimg: 'static/images/erhuan.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】【预售】几何菱形显瘦耳环新款1对',
          jiazhi: '29.60',
          xianliang: '39',
          shenqingnum: '26'
        },
        {
          id: '020002',
          mianfeiimg: 'static/images/shouchuan.jpg',
          icon: 'static/icon/tianmao.png',
          title: '【限时免单】白玉菩提手串1串',
          jiazhi: '48.00',
          xianliang: '10',
          shenqingnum: '30'
        },
        {
          id: '020003',
          mianfeiimg: 'static/images/dxrchenshan.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】灯芯绒衬衫女宽松长袖一件',
          jiazhi: '29.90',
          xianliang: '12',
          shenqingnum: '22'
        },
        {
          id: '020004',
          mianfeiimg: 'static/images/jydzhiwu.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】静夜多肉植物1颗+种子千粒',
          jiazhi: '9.00',
          xianliang: '14',
          shenqingnum: '209'
        },
        {
          id: '020005',
          mianfeiimg: 'static/images/xgshuiyi.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】粉色透明性感睡衣一件',
          jiazhi: '29.90',
          xianliang: '10',
          shenqingnum: '172'
        },
        {
          id: '020006',
          mianfeiimg: 'static/images/wanlianp.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】2份碗莲种子2份盆泥液',
          jiazhi: '9.90',
          xianliang: '10',
          shenqingnum: '15'
        },
        {
          id: '020007',
          mianfeiimg: 'static/images/kouhong.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】芭比粉口红1支',
          jiazhi: '13.80',
          xianliang: '10',
          shenqingnum: '9'
        },
        {
          id: '020008',
          mianfeiimg: 'static/images/hongkuaizi.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【限时免单】精品红木筷子一双',
          jiazhi: '68.00',
          xianliang: '30',
          shenqingnum: '263'
        },
        {
          id: '020009',
          mianfeiimg: 'static/images/qidian.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【限时免单】温度光感水润气垫BB霜15g',
          jiazhi: '59.00',
          xianliang: '18',
          shenqingnum: '207'
        },
        {
          id: '020010',
          mianfeiimg: 'static/images/dadiku.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】女士打底裤一件',
          jiazhi: '9.90',
          xianliang: '40',
          shenqingnum: '152'
        },
        {
          id: '020011',
          mianfeiimg: 'static/images/wanlianh.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时免单】2份碗莲种子2份盆泥液',
          jiazhi: '9.90',
          xianliang: '10',
          shenqingnum: '5'
        }
      ],
      mfList: [],
      showloading: true
    }
  },
  methods: {
    shiyongxiangqingclick (id) {
      this.$router.push({path: `/shiyongxiangqing/${id}`})
    }
  },
  mounted () {
    this.showloading = true
    setTimeout(() => {
      this.showloading = false
      this.mfList = this.mianfeiList
    }, 1500)
    EventBus.$on('mfquanbu', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList = this.mianfeiList
      }, 1500)
    })
    EventBus.$on('mftaobao', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList = this.mianfeiList.filter(item => item.icon.includes('taobao'))
      }, 1500)
    })
    EventBus.$on('mftianmao', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList = this.mianfeiList.filter(item => item.icon.includes('tianmao'))
      }, 1500)
    })
    EventBus.$on('mfjingdong', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList = this.mianfeiList.filter(item => item.icon.includes('jingdong'))
      }, 1500)
    })
    EventBus.$on('upprice', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList.sort((a, b) =>
          a.jiazhi - b.jiazhi
        )
      }, 1500)
    })
    EventBus.$on('downprice', () => {
      this.showloading = true
      setTimeout(() => {
        this.showloading = false
        this.mfList.sort((a, b) =>
          b.jiazhi - a.jiazhi
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
.mianfei-contents
  display flex
  flex-direction row
  justify-content space-between
  flex-wrap wrap
  padding-bottom 3.5rem
  position relative
  .mianfei-desc
    width 49.3%
    margin-top .3rem
    padding-bottom .8rem
    background #fff
    display flex
    flex-direction column
    .mianfei-img
      width 100%
      height 164.33px
      margin-bottom .2rem
    .mianfei-title
      width 94%
      margin 0 auto
    .mianfei-title img
      width .9rem
      height .9rem
      margin-bottom -.15rem
    .mianfei-title p
      line-height 1.2rem
      padding .2rem 0
      font-size .8rem
      word-break break-all //防止换行出现空格
      display -webkit-box
      overflow hidden
      -webkit-box-orient vertical
      -webkit-line-clamp 2
    .mianfei-mine,.mianfei-bottom
      width 95%
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .jiazhi,.xianliang
        font-size .7rem
        padding .3rem 0 .5rem 0
        color #666
      .jiazhi span
        color red
        font-weight bolder
        padding-left .2rem
    .mianfei-bottom span
      font-size .7rem
    .shenqingnum
      color #666
    .mfsq
      padding .2rem .3rem
      color #fff
      background #62d670
</style>

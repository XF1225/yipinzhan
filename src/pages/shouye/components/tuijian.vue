<template>
  <div class="tuijian">
    <div class="tuijian-header">热门试用推荐</div>
    <div class="tuijian-contents" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="tuijian-desc" v-for="(item,index) of tuijianList" :key="index" @click="tohuodongxiangqing(item.id)">
        <img class="tuijian-img" :src="item.tuijianimg" alt="">
        <div class="tuijian-title">
          <p><img :src="item.icon" alt="">{{item.title}}</p>
        </div>
        <div class="tuijian-mine">
          <div class="left">￥<span>{{item.jiage}}</span></div>
          <div class="right">份数:
            <span>{{item.shengyufenshu}}</span>/<span>{{item.zongfenshu}}</span>
          </div>
        </div>
        <div class="tuijian-bottom">
          <span class="price">￥{{item.yuanjia}}</span>
          <span class="fan">返{{item.fanhuan}}</span>
        </div>
      </div>
    </div>
    <div class="loadingmore" v-show="loadingmore">加载中.....</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'tuijian',
  data () {
    return {
      /* tuijianList: [
        {
          id: '010001',
          tuijianimg: 'static/images/dadikuwc.jpg',
          icon: 'static/icon/tianmao.png',
          title: '【限时优惠】高腰收腹提臀打底裤外穿1条',
          jiage: '29.00',
          shengyufenshu: '4',
          zongfenshu: '30',
          yuanjia: '96.00',
          fanhuan: '67'
        },
        {
          id: '010002',
          tuijianimg: 'static/images/xishouye.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】现乙醇酒精消毒液75洗手液100ml',
          jiage: '9.90',
          shengyufenshu: '84',
          zongfenshu: '100',
          yuanjia: '20.00',
          fanhuan: '10.1'
        },
        {
          id: '010003',
          tuijianimg: 'static/images/004.jpg',
          icon: 'static/icon/taobao.png',
          title: '【现时优惠】女装韩版夏季小清新上衣一件',
          jiage: '24.90',
          shengyufenshu: '8',
          zongfenshu: '10',
          yuanjia: '49.80',
          fanhuan: '24.9'
        },
        {
          id: '010004',
          tuijianimg: 'static/images/005.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【现时优惠】彩色无痕双面胶防水胶带贴一卷',
          jiage: '1.08',
          shengyufenshu: '4',
          zongfenshu: '10',
          yuanjia: '9.00',
          fanhuan: '7.2'
        },
        {
          id: '010005',
          tuijianimg: 'static/images/006.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【现时免单】云南古法黑糖老红糖块1盒',
          jiage: '3.90',
          shengyufenshu: '6',
          zongfenshu: '10',
          yuanjia: '19.80',
          fanhuan: '15.9'
        },
        {
          id: '010006',
          tuijianimg: 'static/images/fengmi.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【限时优惠】蜂蜜天然纯野生深山百花蜜50g',
          jiage: '3.18',
          shengyufenshu: '9',
          zongfenshu: '10',
          yuanjia: '15.90',
          fanhuan: '12.72'
        },
        {
          id: '010007',
          tuijianimg: 'static/images/danhuangshu.jpg',
          icon: 'static/icon/tianmao.png',
          title: '【限时免单】享津津乳酸菌蛋黄酥流心麻薯6枚',
          jiage: '0.00',
          shengyufenshu: '0',
          zongfenshu: '10',
          yuanjia: '23.90',
          fanhuan: '23.90'
        },
        {
          id: '010008',
          tuijianimg: 'static/images/chenshan.jpg',
          icon: 'static/icon/jingdong.png',
          title: '【限时优惠】2020春秋新款V领收腰薄款衬衫女装显瘦',
          jiage: '29.90',
          shengyufenshu: '9',
          zongfenshu: '10',
          yuanjia: '59.80',
          fanhuan: '29.90'
        },
        {
          id: '010009',
          tuijianimg: 'static/images/wazi.jpg',
          icon: 'static/icon/taobao.png',
          title: '【限时优惠】袜子女夏季超值3双装',
          jiage: '4.90',
          shengyufenshu: '13',
          zongfenshu: '20',
          yuanjia: '9.80',
          fanhuan: '4.90'
        }
      ], */
      tuijianList: [],
      loading: false,
      loadingmore: false,
      limit: 4,
      page: 1
    }
  },
  methods: {
    tohuodongxiangqing (id) {
      this.$router.push(`/huodongxiangqing/${id}`)
    },
    loadMore () {
      setTimeout(() => {
        this.gettuijianList()
        this.loadingmore = true
      }, 1000)
    },
    gettuijianList () {
      axios.get('/api/list.json', {
        params: {
          limit: this.limit,
          page: this.page
        }
      }).then(this.gettuijianListSucc)
    },
    gettuijianListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.tuijianList = data.tuijianList.concat(this.tuijianList)
        this.loading = false
        this.page++
      }
    }
  },
  deactivated () {
    this.loading = true
  }
}
</script>
<style lang="stylus" scoped>
.tuijian
  width 100%
  margin .5rem 0 3.3rem 0
  .tuijian-header
    width 100%
    background #fff
    height 3rem
    line-height 3rem
    text-align center
    font-size .9rem
  .tuijian-contents
    display flex
    flex-direction row
    justify-content space-between
    flex-wrap wrap
    .tuijian-desc
      width 49.3%
      margin-top .3rem
      padding-bottom .8rem
      background #fff
      display flex
      flex-direction column
      .tuijian-img
        width 100%
        height 164.33px
        margin-bottom .2rem
      .tuijian-title
        width 94%
        margin 0 auto
      .tuijian-title img
        width .9rem
        height .9rem
        margin-bottom -.15rem
      .tuijian-title p
        line-height 1.2rem
        padding .2rem 0
        font-size .8rem
        word-break break-all //防止换行出现空格
        display -webkit-box
        overflow hidden
        -webkit-box-orient vertical
        -webkit-line-clamp 2
      .tuijian-mine,.tuijian-bottom
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
      .tuijian-bottom span
        font-size .7rem
      .price
        color #666
        text-decoration line-through
      .fan
        padding .1rem .3rem
        color #f19951
        border solid .1px #f19951
        position relative
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
  .loadingmore
    width 100%
    height 2.5rem
    line-height 2.4rem
    text-align center
    font-size .8rem
    color blue
</style>

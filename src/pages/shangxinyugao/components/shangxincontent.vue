<template>
  <div class="shangxincontent">
    <div class="shangxinnav">
      <li :class="{active:active===0}" @click="changenav(0)">试用上新</li>
      <li :class="{active:active===1}" @click="changenav(1)">超级返上新</li>
    </div>
    <div class="shangxindesc" v-for="(item,index) of shangxinList" :key="index" v-show="showtime">
      <div class="headertime">
        <div class="left">
          <img src="static/icon/naozhong.png">
          <span>{{item.endTime.substr(11, 5)}}</span>
        </div>
        <div class="right">
          <p>开抢倒计时:</p>
          <span><daojishi :endTime='item.endTime' @timeend='timeclose'></daojishi></span>
        </div>
      </div>
      <div class="shangxindetail" v-for="items of item.detail" :key="items.id">
        <div class="tail">
          <img class="tailimg" :src="items.tailimg">
          <div class="taildiv">
            <h3 class="title"><img :src="items.icon">{{items.title}}</h3>
            <p class="jiage">￥<span>{{items.jiage}}</span></p>
            <span class="yuanjia">￥{{items.yuanjia}}</span>
            <div class="fenshu">
              <span class="fan">返{{items.fanxian}}</span>
              <p class="fs">份数:<span>{{items.shengyu}}</span>/<span>{{items.zongfenshu}}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import daojishi from '../components/daojishi'
export default {
  inject: ['reload'],
  name: 'shangxincontent',
  components: { daojishi },
  data () {
    return {
      active: 0,
      showtime: true,
      shangxinList: [
        {
          endTime: '2020-04-23 21:15:00',
          detail: [
            {
              id: '010001',
              tailimg: 'static/images/dadikuwc.jpg',
              icon: 'static/icon/tianmao.png',
              title: '收腹提臀打底裤外穿1条',
              jiage: '0.00',
              yuanjia: '42.00',
              fanxian: '42.00',
              shengyu: '1',
              zongfenshu: '6'
            }
          ]
        },
        {
          endTime: '2020-04-25 20:30:00',
          detail: [
            {
              id: '010002',
              tailimg: 'static/images/xishouye.jpg',
              icon: 'static/icon/taobao.png',
              title: '洗手液100ml',
              jiage: '9.90',
              yuanjia: '20.00',
              fanxian: '10.1',
              shengyu: '84',
              zongfenshu: '100'
            },
            {
              id: '010003',
              tailimg: 'static/images/004.jpg',
              icon: 'static/icon/taobao.png',
              title: '夏季小清新上衣一件',
              jiage: '24.90',
              yuanjia: '49.80',
              fanxian: '24.9',
              shengyu: '8',
              zongfenshu: '10'
            }
          ]
        },
        {
          endTime: '2020-04-27 00:30:00',
          detail: [
            {
              id: '010005',
              tailimg: 'static/images/006.jpg',
              icon: 'static/icon/jingdong.png',
              title: '云南古法黑糖老红糖块',
              jiage: '3.90',
              yuanjia: '19.80',
              fanxian: '15.9',
              shengyu: '6',
              zongfenshu: '10'
            },
            {
              id: '010006',
              tailimg: 'static/images/fengmi.jpg',
              icon: 'static/icon/jingdong.png',
              title: '天然纯野生深山百花蜜50g',
              jiage: '3.18',
              yuanjia: '15.90',
              fanxian: '12.72',
              shengyu: '9',
              zongfenshu: '10'
            },
            {
              id: '010008',
              tailimg: 'static/images/chenshan.jpg',
              icon: 'static/icon/jingdong.png',
              title: 'V领收腰薄款衬衫女',
              jiage: '29.90',
              yuanjia: '59.80',
              fanxian: '29.90',
              shengyu: '9',
              zongfenshu: '10'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changenav (n) {
      this.active = n
    },
    timeclose () {
      console.log('活动已经停止')
    }
  },
  mounted () {
    for (var i = 0; i < this.shangxinList.length; i++) {
      const endTime = new Date(this.shangxinList[i].endTime)
      let aa = new Date().getTime()
      let bb = endTime.getTime()
      if (bb - aa <= 0) {
        this.shangxinList.splice(i, 1)
        console.log(this.shangxinList)
        this.reload()
        return false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.shangxincontent
  width 100%
  display flex
  flex-direction column
  .shangxinnav
    width 100%
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    color #666
    border-bottom solid .1rem #eee
    background #fff
  .shangxinnav li
    height 2.2rem
    line-height 2.2rem
    display block
    font-size .8rem
  .active
    color red
    border-bottom solid .1rem red
  .shangxindesc
    width 100%
    display flex
    flex-direction column
    .headertime
      width 100%
      height 2.2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .left,.right
        display flex
        flex-direction row
        align-items center
        font-size .8rem
      .left img
        width .8rem
        height .8rem
        padding-left .5rem
      .left span
        padding-left .3rem
      .right span
        padding 0 .5rem 0 .2rem
    .shangxindetail
      width 100%
      background #fff
      .tail
        width 100%
        display flex
        flex-direction row
        justify-content center
        align-items center
        .tailimg
          flex 1
          overflow hidden
          width 100%
          height 32vw
          padding .5rem
        .taildiv
          flex 2
          display flex
          flex-direction column
          justify-content space-around
          margin-left .3rem
          height 32vw
          border-bottom solid .05rem #eee
          .title
            width 100%
            display flex
            flex-direction row
            align-items center
            font-size .8rem
          .title img
            width .8rem
            height .8rem
            padding-right .3rem
          .jiage
            width 100%
            font-size .7rem
            color red
          .jiage span
            font-size .8rem
            font-weight bold
          .yuanjia
            width 100%
            font-size .7rem
            color #666
            text-decoration line-through
          .fenshu
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            font-size .7rem
            padding-bottom .5rem
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
            .fs
              color #666
              padding-right .3rem
</style>

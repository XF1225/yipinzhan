<template>
  <div class="shoucangcontent">
    <div class="shoucangnav">
      <li :class="{active:active===1}" @click="shoucangnavclick(1)">免费试用</li>
      <li :class="{active:active===2}" @click="shoucangnavclick(2)">超级返</li>
    </div>
    <div class="shoucangdesc">
      <div class="mianfeishiyong" v-show="showshoucangdesc===1">
        <router-link tag="img" to="/mianfei" src="static/images/mai.jpg" class="mai" v-show="showimg"></router-link>
        <div class="mianfei-desc" v-for="(item,index) of mianfeiList" :key="index" @click="toshiyongdetail(item.id)">
          <label class="checkbox" v-show="showcheckbox=changebolean"><input type="checkbox" class="checkinput" :value="index" ref="check" v-model="checkindex1"></label>
          <img class="mianfei-img" :src="item.mianfeiimg">
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
        <div class="shoucangfooter" v-show="showcheckbox">
          <div class="footer-left">
            <label class="labquanxuan"><input type="checkbox" v-model="isAllchecked" class="quanxuaninput">全选</label>
          </div>
          <div class="footer-right" @click="removesyshoucang">删除</div>
        </div>
      </div>
      <div class="chaojifan" v-show="showshoucangdesc===2">
        <router-link tag="img" to="/chaojifan" src="static/images/mai.jpg" class="mai" v-show="showimg"></router-link>
        <div class="chaojifan-desc" v-for="(item,index) of chaojifanList" :key="index" @click="tochaojifandetail(item.id)">
          <label class="checkbox" v-show="showcheckbox=changebolean"><input type="checkbox" class="checkinput" :value="index" ref="checks" v-model="checkindex"></label>
          <img class="chaojifan-img" :src="item.chaojifanimg">
          <div class="chaojifan-title">
            <p><img :src="item.icon">{{item.title}}</p>
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
        <div class="shoucangfooter" v-show="showcheckbox">
          <div class="footer-left">
            <label class="labquanxuan"><input type="checkbox" v-model="isAllchecked" @click="changeAllchecked" class="quanxuaninput">全选</label>
          </div>
          <div class="footer-right" @click="removecjfshoucang">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { EventBus } from '@/assets/js/bus.js'
export default {
  // inject: ['reload'],
  name: 'shoucangcontent',
  data () {
    return {
      active: 1,
      showshoucangdesc: 1,
      chaojifanList: [],
      mianfeiList: [],
      showimg: false,
      showcheckbox: true,
      changebolean: false,
      isAllchecked: false,
      checkindex: [],
      checkindex1: []
    }
  },
  methods: {
    shoucangnavclick (n) {
      this.active = this.showshoucangdesc = n
    },
    getshoucangList () {
      axios.get('/api/list.json').then(this.getshoucangListSucc)
    },
    getshoucangListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
        let collectId = shoucangsession['collectId']
        let SYcollectId = shoucangsession['SYcollectId']
        if (collectId.length === 0 && SYcollectId.length === 0) {
          this.showimg = true
          this.showcheckbox = false
          return false
        } else {
          this.showimg = false
          for (var i = 0; i < collectId.length; i++) {
            this.chaojifanList = data.chaojifanList.filter(item => item.id === collectId[i]).concat(this.chaojifanList)
          }
          for (var j = 0; j < SYcollectId.length; j++) {
            this.mianfeiList = data.mianfeiList.filter(item => item.id === SYcollectId[j]).concat(this.mianfeiList)
          }
        }
      }
    },
    toshiyongdetail (id) {
      if (this.showcheckbox === true) {
        return false
      }
      this.$router.push(`/shiyongxiangqing/${id}`)
    },
    tochaojifandetail (id) {
      if (this.showcheckbox === true) {
        return false
      } else {
        this.$router.push(`/huodongxiangqing/${id}`)
      }
    },
    removecjfshoucang () {
      let chaojifancheckList = this.$refs.checks
      let cjfcheckedId = []
      chaojifancheckList.forEach(e => {
        var values = e.value
        var chaojifancheck = chaojifancheckList[values].checked
        if (chaojifancheck === true) {
          cjfcheckedId.push(this.chaojifanList[values].id)
        }
      })
      let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
      let collectId = shoucangsession['collectId']
      let SYcollectId = shoucangsession['SYcollectId']
      // 取两个数组的减集，即未选中的
      let cjfUncheckedId = collectId.concat(cjfcheckedId).filter(v => collectId.includes(v) && !cjfcheckedId.includes(v))
      if (cjfUncheckedId.length === collectId.length) {
        alert('你还没选中商品')
        return false
      }
      console.log(collectId, cjfUncheckedId)
      // 拼凑和sessionStorage一样的object对象来替换缓存
      let aa = {}
      aa['collectId'] = cjfUncheckedId
      aa['SYcollectId'] = SYcollectId
      console.log(aa)
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('collectId SYcollectId', JSON.stringify(aa))
      })
      location.reload()
    },
    removesyshoucang () {
      let shiyongcheckList = this.$refs.check
      let sycheckedId = []
      shiyongcheckList.forEach(e => {
        var values = e.value
        var shiyongcheck = shiyongcheckList[values].checked
        if (shiyongcheck === true) {
          sycheckedId.push(this.mianfeiList[values].id)
        }
      })
      let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
      let collectId = shoucangsession['collectId']
      let SYcollectId = shoucangsession['SYcollectId']
      let syUncheckedId = SYcollectId.concat(sycheckedId).filter(v => SYcollectId.includes(v) && !sycheckedId.includes(v))
      if (syUncheckedId.length === SYcollectId.length) {
        alert('你还没选中商品')
        return false
      }
      // 拼凑和sessionStorage一样的object对象来替换缓存
      let aa = {}
      aa['collectId'] = collectId
      aa['SYcollectId'] = syUncheckedId
      console.log(aa)
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('collectId SYcollectId', JSON.stringify(aa))
      })
      location.reload()
    },
    changeAllchecked () {
      let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
      let collectId = shoucangsession['collectId']
      this.checkindex = []
      if (!this.isAllchecked) {
        for (var i in collectId) {
          this.checkindex.push(collectId[i])
        }
      }
      console.log(this.checkindex, collectId)
    }
  },
  mounted () {
    EventBus.$on('changebolean', (changebolean) => {
      this.changebolean = changebolean
    })
  },
  activated () {
    this.getshoucangList()
  },
  watch: {
    checkindex () {
      let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
      let collectId = shoucangsession['collectId']
      if (this.checkindex.length === collectId.length) {
        this.isAllchecked = true
      } else {
        this.isAllchecked = false
      }
    },
    checkindex1 () {
      let shoucangsession = JSON.parse(sessionStorage.getItem('collectId SYcollectId'))
      let SYcollectId = shoucangsession['SYcollectId']
      if (this.checkindex1.length === SYcollectId.length) {
        this.isAllchecked = true
      } else {
        this.isAllchecked = false
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.shoucangcontent
  width 100%
  display flex
  flex-direction column
  .shoucangnav
    width 100%
    height 2.2rem
    background #fff
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    font-size .8rem
    color #666
    border-bottom solid .1rem #eee
  .active
    color #e50606
    border-bottom solid .12rem #e50606
  .shoucangnav li
    height 2.2rem
    line-height 2.2rem
    display inline-block
  .shoucangdesc
    width 100%
    .mianfeishiyong,.chaojifan
      display flex
      flex-direction row
      justify-content space-between
      flex-wrap wrap
      padding-bottom 3rem
      .mai
        width 100%
        height 100%
      .mianfei-desc,.chaojifan-desc
        width 49.3%
        margin-top .3rem
        padding-bottom .8rem
        background #fff
        display flex
        flex-direction column
        position relative
        .checkbox
          width 1rem
          height 1rem
          position absolute
          top .5rem
          right .5rem
          background #fff
          border solid .1rem red
          border-radius 50%
          line-height 2rem
          display block
          .checkinput
            opacity 0
          .checkinput:checked
            opacity 1
            width .8rem
            height .8rem
            position absolute
            top -.05rem
            right -.09rem
            display block
            outline none
            -webkit-appearance none // 没有这个是不会显示出来的
            background url('/static/icon/checked.png')
            background-size cover
        .mianfei-img,.chaojifan-img
          width 100%
          height 164.33px
          margin-bottom .2rem
        .mianfei-title,.chaojifan-title
          width 94%
          margin 0 auto
        .mianfei-title img,.chaojifan-title img
          width .9rem
          height .9rem
          margin-bottom -.15rem
        .mianfei-title p,.chaojifan-title p
          line-height 1.2rem
          padding .2rem 0
          font-size .8rem
          word-break break-all //防止换行出现空格
          display -webkit-box
          overflow hidden
          -webkit-box-orient vertical
          -webkit-line-clamp 2
        .mianfei-mine,.mianfei-bottom,.chaojifan-mine,.chaojifan-bottom
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
          .left,.right
            font-size .7rem
            padding .3rem 0 .5rem 0
          .left
            color red
          .left span
            font-weight bolder
          .right
            color #666
        .mianfei-bottom span,.chaojifan-bottom span
          font-size .7rem
        .shenqingnum
          color #666
        .mfsq
          padding .2rem .3rem
          color #fff
          background #62d670
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
      .shoucangfooter
        width 100%
        height 2.2rem
        display flex
        flex-direction row
        position fixed
        left 0
        bottom 0
        border-top solid .5px #eee
        font-size .8rem
        .footer-left
          flex 6
          display flex
          justify-content start
          align-items center
          background #fff
          .labquanxuan
            display flex
            flex-direction row
            align-items center
          .labquanxuan::before
            content ''
            outline none
            width 1rem
            height 1rem
            margin .5rem
            background #fff
            border solid .1rem red
            border-radius 50%
            line-height 2rem
          .quanxuaninput
            opacity 0
            position absolute
            left .5rem
            top .55rem
          .quanxuaninput:checked
            opacity 1
            width .8rem
            height .8rem
            position absolute
            left .45rem
            top .55rem
            outline none
            -webkit-appearance none
            background url('/static/icon/checked.png')
            background-size cover
        .footer-right
          flex 4
          display flex
          justify-content center
          align-items center
          background #e11708
          color #fff
</style>

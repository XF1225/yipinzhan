<template>
  <div>
    <div class="shiyongfooter" v-for="item of list" :key="item.id">
      <div class="left-footer">
        <div class="shouye" @click="toshouye">
          <span class="iconfont icon-shouye">&#xe61a;</span>
          <p>首页</p>
        </div>
        <div class="kefu">
          <span class="iconfont icon-kefu">&#xe637;</span>
          <p>客服</p>
        </div>
        <div class="shoucang" v-if="iscollect" @click="shoucangclick">
          <span class="iconfont">&#xe639;</span>
          <p>收藏</p>
        </div>
        <div class="shoucang" v-else @click="shoucangclick">
          <span class="iconfont icon-shc">&#xe604;</span>
          <p>已收藏</p>
        </div>
      </div>
      <div class="jinbiduihuan" v-if="item.shengyujinbiduihuan === '0' ? false : true">金币兑换</div>
      <div class="jinbiduihuan yiduiwan" v-else>已兑完</div>
      <div class="mianfeishenqing" @click="mianfeiclick">免费申请</div>
    </div>
    <shoucang v-show="showshoucang" :title='shoucangtitle(mes)'></shoucang>
  </div>
</template>
<script>
import shoucang from '@/pages/common/shoucang'
import { mapMutations } from 'vuex'
export default {
  name: 'shiyongfooter',
  props: {
    list: Array
  },
  components: {
    shoucang
  },
  data () {
    return {
      showshoucang: false,
      mes: ''
    }
  },
  methods: {
    toshouye () {
      this.$router.push('/')
    },
    shoucangclick () {
      if (JSON.parse(localStorage.getItem('userinfo')) === null) {
        this.$router.push('/login')
        return false
      } else {
        let SYcollectId = this.$route.params.id
        this.SYCollectId(SYcollectId)
        this.showshoucang = true
        setTimeout(() => { this.showshoucang = false }, 3000)
      }
    },
    ...mapMutations(['SYCollectId']),
    mianfeiclick () {
      if (JSON.parse(localStorage.getItem('userinfo')) === null) {
        this.$router.push('/login')
        return false
      } else {
        this.$router.push('/qianggoudingdan')
      }
    }
  },
  computed: {
    iscollect () {
      let id = this.$route.params.id
      if (this.$store.state.SYcollectId.indexOf(id) === -1) {
        return true
      } else {
        return false
      }
    },
    shoucangtitle () {
      return function (mes) {
        if (this.iscollect === true) {
          return '已取消'
        } else {
          return '收藏成功'
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.shiyongfooter
  width 100%
  height 2.5rem
  background #fff
  position fixed
  bottom 0
  left 0
  display flex
  flex-direction row
  border-top solid .1px #eee
  .left-footer
    width 100%
    flex 4
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    .shouye,.kefu,.shoucang
      width 33.33%
      height 2.5rem
      display flex
      flex-direction column
      justify-content center
      align-items center
      .iconfont
        font-size 1rem
      .icon-kefu
        font-size 1.1rem
      .icon-shouye
        font-size 1.2rem
      .icon-shc
        font-size 1.2rem
        color #ff7600
    .shouye p,.kefu p,.shoucang p
      font-size .7rem
      padding-top .2rem
  .mianfeishenqing,.jinbiduihuan
    flex 3
    color #fff
    background #e6072a
    font-size .9rem
    display flex
    justify-content center
    align-items center
  .jinbiduihuan
    background #eeab17
  .yiduiwan
    background #c5c0c0
</style>

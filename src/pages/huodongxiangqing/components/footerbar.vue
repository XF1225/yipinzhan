<template>
  <div>
    <div class="footerbar">
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
      <div class="xiadan" @click="xiadanclick">我要下单</div>
    </div>
    <shoucang v-show="showshoucang" :title='shoucangtitle(mes)'></shoucang>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

import shoucang from '@/pages/common/shoucang'
export default {
  name: 'footerbar',
  components: {
    shoucang
  },
  data () {
    return {
      // iscollect: true,
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
        let collectId = this.$route.params.id
        this.CollectId(collectId)
        this.showshoucang = true
        setTimeout(() => { this.showshoucang = false }, 3000)
      }
    },
    ...mapMutations(['CollectId']),
    xiadanclick () {
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
      if (this.$store.state.collectId.indexOf(id) === -1) {
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
.footerbar
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
    flex 4
    width 100%
    display flex
    flex-direction row
    justify-content space-around
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
  .xiadan
    flex 6
    color #fff
    background #e6072a
    font-size .9rem
    display flex
    justify-content center
    align-items center
</style>

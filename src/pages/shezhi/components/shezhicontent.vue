<template>
  <div class="shezhicontent" @touchmove.prevent>
    <div class="shezhidetail">
      <div class="desc">
        <p>个人资料</p>
        <span><img src="static/icon/youjiantou.png"></span>
      </div>
      <div class="desc">
        <p>账号安全</p>
        <span>密码管理<img src="static/icon/youjiantou.png"></span>
      </div>
    </div>
    <div class="shezhidetail xiaoxitixing">
      <div class="desc">
        <p>消息提醒</p>
        <input type="checkbox" class="switch" v-model="checked">
      </div>
      <div class="desc">
        <p>关于我们</p>
        <span><img src="static/icon/youjiantou.png"></span>
      </div>
      <div class="desc">
        <p>隐私政策</p>
        <span><img src="static/icon/youjiantou.png"></span>
      </div>
      <div class="desc">
        <p>用户协议</p>
        <span><img src="static/icon/youjiantou.png"></span>
      </div>
    </div>
    <div class="shezhidetail">
      <div class="desc">
        <p>清除缓存</p>
        <span>2.2MB<img src="static/icon/youjiantou.png"></span>
      </div>
      <div class="desc">
        <p>版本更新</p>
        <span>3.1.10<img src="static/icon/youjiantou.png"></span>
      </div>
    </div>
    <div class="shezhibtn">
      <input type="button" class="outlogin" value="退出登录" @click="tologin">
    </div>
    <logindialog v-show="showdialog" @change="closedialog" @lgt="loginout"></logindialog>
  </div>
</template>
<script>
import logindialog from '@/pages/common/dialog'
export default {
  name: 'shezhicontent',
  components: {
    logindialog
  },
  data () {
    return {
      showdialog: false,
      checked: 1
    }
  },
  methods: {
    tologin () {
      this.showdialog = true
    },
    closedialog () {
      this.showdialog = false
    },
    loginout () {
      localStorage.removeItem('userinfo')
      localStorage.removeItem('list')
      sessionStorage.removeItem('collectId SYcollectId')
      this.showdialog = false
      this.$router.push('/wode')
      this.$router.go(0)
    }
  }
}
</script>
<style lang="stylus" scoped>
.shezhicontent
  width 100%
  display flex
  flex-direction column
  .xiaoxitixing
    margin .5rem 0
  .shezhidetail
    width 100%
    background #fff
    display flex
    flex-direction column
    .desc:last-of-type
      border 0
    .desc
      width 96%
      margin 0 auto
      height 2.5rem
      font-size .8rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-bottom solid .1rem #eee
    .desc p
      padding-left .2rem
    .desc span
      color #666
      display flex
      align-items center
    .desc img
      width .9rem
      height .9rem
      padding 0 .2rem 0 .4rem
    .switch
      position relative
      width 2.5rem
      height 1.5rem
      background #dadada
      border-radius 1.5rem
      border none
      outline none
      -webkit-appearance none
      transition all .2s ease
    .switch::after
      content ''
      position absolute
      top 0
      left .05rem
      width 1.5rem
      height 1.5rem
      background #fff
      border-radius 50%
      transition all .2s ease
    .switch:checked
      background #05db50
    .switch:checked::after
      left 38%
  .shezhibtn
    width 100%
    display flex
    justify-content center
    align-items center
    .outlogin
      width 80%
      margin 1.5rem 0 100% 0
      height 2.5rem
      font-size .9rem
      border-radius .3rem
      border 0
      outline none
      color #fff
      background #e50606
</style>

<template>
  <div class="logincontents">
    <div class="login-title">
      <li class="zhanghao" :class="{active:active==1}" @click="changecontent(1)">账号登录</li>
      <li class="kuaijie" :class="{active:active==2}" @click="changecontent(2)">手机快捷登录</li>
    </div>
    <div class="login-content">
      <div class="zhdl" v-if="showcontent == 1">
        <form action="">
          <div class="zh">
            <img src="static/icon/zhanghao.png" alt="">
            <p>账号</p>
            <input type="text" placeholder="手机号/用户名/邮箱" v-model="inptval" @keyup="inputvalue">
            <img class="righticn" src="static/icon/shanchu.png" v-show="showicon" @click="clearinput">
          </div>
          <div class="mima">
            <img src="static/icon/password.png" alt="">
            <p>密码</p>
            <input :type="biyan===true?'password':'text'" placeholder="输入密码" v-model="inputyzm" @keyup="inputvalue">
            <img class="righticn" src="static/icon/biyan.png" v-show="biyan" @click="handlebiyan">
            <img class="righticn" src="static/icon/yanjing.png" v-show="!biyan" @click="handlebiyan">
          </div>
          <input v-if="changedenglu" class="dengluo" type="submit" value="登录">
          <input v-else class="denglut" type="submit" value="登录" @click="login">
        </form>
        <div class="zcomm">
          <router-link tag="li" to="zhuce">买家注册</router-link>
          <li>忘记密码</li>
        </div>
        <div class="disanfangdl">
          <li>第三方登录</li>
          <div class="disanfangimg">
            <img src="static/icon/weixin.png" alt="">
            <img src="static/icon/qq.png" alt="">
          </div>
        </div>
      </div>
      <div class="zhdl" v-else>
        <form action="">
          <div class="zh">
            <img src="static/icon/shouji.png" alt="">
            <p>手机号</p>
            <input type="text" placeholder="请输入手机号" v-model="inptval" @mouseout="inputshoujivalue">
            <img class="righticn" src="static/icon/shanchu.png" v-show="showicon" @click="clearinput">
          </div>
          <div class="mima">
            <img src="static/icon/yanzhengma.png" alt="">
            <p>验证码</p>
            <input type="text" placeholder="验证码" v-model="inputyzm" @keyup="inputvalue">
            <span class="yanzhengma" v-show="disable" @click="yzmclick">获取验证码</span>
            <span class="daojishi" v-show="!disable">{{daojishititle}}</span>
          </div>
          <input v-if="changedenglu" class="dengluo" type="submit" value="登录">
          <input v-else class="denglut" type="submit" value="登录">
        </form>
        <div class="disanfangdl">
          <li>第三方登录</li>
          <div class="disanfangimg">
            <img src="static/icon/weixin.png" alt="">
            <img src="static/icon/qq.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'logincontents',
  data () {
    return {
      showcontent: 1,
      active: 1,
      inptval: '',
      inputyzm: '',
      biyan: true,
      showicon: false,
      changedenglu: true,
      disable: true,
      daojishititle: ''
    }
  },
  methods: {
    // 选项卡
    changecontent (n) {
      this.showcontent = this.active = n
    },
    // 获取input输入框内容
    inputvalue () {
      if (this.inptval !== '' && this.inputyzm !== '') {
        this.changedenglu = false
      }
      if (this.inptval === '') {
        this.showicon = false
      } else {
        this.showicon = true
      }
    },
    inputshoujivalue () {
      if (this.inptval === '') {
        this.showicon = false
        alert('手机号不能为空')
        return false
      } else if (!/^1[3456789]\d{9}$/.test(this.inptval)) {
        alert('请输入正确手机号')
        this.inptval = ''
        return false
      } else {
        return true
      }
    },
    // 手机登录验证
    yzmclick () {
      if (this.inputshoujivalue()) {
        this.timeclick()
        axios.post('http://v.juhe.cn/sms/send', {
          tpl_id: '',
          key: '',
          inptval: this.inptval

        }).then(res => {
          console.log(res)
        })
      }
    },
    timeclick () {
      let time = 59
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.disable = true
        } else {
          this.daojishititle = time + 'S后重新获取'
          this.disable = false
          time--
        }
      }, 1000)
    },
    // 点击切换图片
    handlebiyan () {
      this.biyan = !this.biyan
    },
    // 清除输入框的值
    clearinput () {
      this.inptval = ''
      this.inputyzm = ''
      this.showicon = false
      this.changedenglu = true
    },
    login () {
      axios.get('/api/userinfo.json').then(this.loginSucc)
    },
    loginSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        const usernameArr = []
        const passwordArr = []
        this.userinfo = data.userinfo
        for (var i = 0; i < this.userinfo.length; i++) {
          usernameArr.push(this.userinfo[i].username)
          passwordArr.push(this.userinfo[i].password)
        }
        if (usernameArr.indexOf(this.inptval) === -1) {
          alert('账号不存在')
          this.inptval = ''
          this.inputyzm = ''
          this.showicon = false
        } else {
          let index = usernameArr.indexOf(this.inptval)
          if (passwordArr[index] !== this.inputyzm) {
            alert('密码错误')
            this.inputyzm = ''
          } else {
            window.localStorage.setItem('userinfo', JSON.stringify(this.userinfo[index]))
            alert('登录成功')
            this.$router.push('/wode')
            this.$router.go(0)
          }
        }
      }
    }/* ,
    loginout () {
      localStorage.removeItem('userinfo')
      alert('退出成功')
      this.$router.push('/login')
    } */
  }
}
</script>
<style lang="stylus" scoped>
.active
  color #ec1f3f
  border-bottom solid .1rem #ec1f3f
.logincontents
  width 100%
  background #fff
.login-title
  width 90%
  margin 0 auto
  height 3rem
  line-height 3rem
  color #666
  border-bottom solid .1rem #eee
  display flex
  flex-direction row
  justify-content space-around
  align-items center
.login-title li
  display inline-block
  font-size .9rem
.login-content
  width 100%
  background #fff
.zhdl
  width 80%
  margin 0 auto
.zhdl form
  display flex
  flex-direction column
  .zh,.mima
    width 100%
    height 3rem
    line-height 3rem
    display flex
    flex-direction row
    align-items center
    border-bottom solid .1rem #eee
    position relative
  .zh img,.mima img
    width 1.3rem
    height 1.3rem
  .righticn
    position absolute
    right .5rem
  .yanzhengma
    position absolute
    right .5rem
    font-size .8rem
    color #ec1f3f
  .daojishi
    position absolute
    right .5rem
    font-size .7rem
  .zh p,.mima p
    font-size .9rem
    font-weight bold
    padding 0 .5rem
  .zh input,.mima input
    outline none
    border 0
  .zh input::-webkit-input-placeholder,.mima input::-webkit-input-placeholder
    color #b5b3b3 //修改placeholder的字体颜色
  .dengluo,.denglut
    width 100%
    height 2.2rem
    margin-top 1.5rem
    color #fff
    font-size 1rem
    background #ec1f3f
    opacity .5
    border-radius .3rem
    border 0
  .denglut
    opacity 1
.zcomm
  width 100%
  margin-top 1.5rem
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  color #ec1f3f
.zcomm li
  display inline-block
  font-size .9rem
.disanfangdl
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 2rem
  border-top solid .5px #eee
  position relative
.disanfangdl li
  padding 0 .5rem
  display inline-block
  background #fff
  color #666
  font-size .7rem
  margin-top -.4rem
.disanfangimg
  width 60%
  height 3rem
  margin 1.2rem 0
  display flex
  flex-direction row
  justify-content space-around
  align-items center
.disanfangimg img
  width 3rem
  height 3rem
</style>

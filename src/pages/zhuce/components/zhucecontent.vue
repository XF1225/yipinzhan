<template>
  <div class="zhucecontent">
    <form :action="actionname===true?'post':''" class="zhuceform">
      <div class="formdetail">
        <img class="form-icon" src="static/icon/shouji.png">
        <p class="from-title">手机</p>
        <input type="text" class="shoujiipt" placeholder="输入手机号" v-model="sjinput">
      </div>
      <div class="formdetail">
        <img class="form-icon yanzhengma" src="static/icon/yanzhengma.png">
        <p class="from-title">验证码</p>
        <input type="text" class="yanzhengmaipt" placeholder="输入验证码" v-model="yzminput">
        <span class="yzm" v-show="yzm" @click="yzmclick">获取验证码</span>
        <span class="timer" v-show="!yzm">{{daojishi}}</span>
      </div>
      <div class="formdetail">
        <img class="form-icon" src="static/icon/password.png">
        <p class="from-title">密码</p>
        <input :type="showmima===true?'password':'text'" class="yanzhengmaipt" placeholder="输入密码" v-model="mima" @mouseout="mimainput">
        <img class="mimaimg" src="static/icon/biyan.png" v-show="showmima" @click="changeclick">
        <img class="mimaimg" src="static/icon/yanjing.png" v-show="!showmima" @click="changeclick">
      </div>
      <div class="formdetail">
        <img class="form-icon" src="static/icon/shimingrenzheng.png">
        <p class="from-title">ID</p>
        <input type="text" class="shoujiipt" placeholder="推广员ID(非必填项)">
      </div>
      <input :class="changezhucebtn===true?'zhuceo':'zhucet'" :type="changezhucebtn===true?'button':'submit'" value="注册" @click="submitclick">
      <div class="yonghuxieyi">
        <input type="checkbox" v-model="param">
        <span>我已阅读并同意</span>
        <i>《亿品赞用户协议》</i>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'zhucecontent',
  data () {
    return {
      showmima: true,
      param: 1,
      sjinput: '',
      yzm: true,
      daojishi: '',
      yzminput: '',
      mima: '',
      actionname: false
    }
  },
  methods: {
    changeclick () {
      this.showmima = !this.showmima
    },
    // 手机号验证
    sjinputclick () {
      if (this.sjinput === '') {
        alert('请先输入正确手机号')
        return false
      } else if (!/^1[3456789]\d{9}$/.test(this.sjinput)) {
        alert('手机号格式有误')
        this.sjinput = ''
        return false
      } else {
        return true
      }
    },
    // 验证码倒计时
    timing () {
      let time = 59
      let timer = setInterval(() => {
        if (time === 0) {
          this.yzm = true
          clearInterval(timer)
        } else {
          this.daojishi = time + 'S后重新获取'
          this.yzm = false
          time--
        }
      }, 1000)
    },
    yzmclick () {
      if (this.sjinputclick()) {
        this.timing()
        axios.post('http://v.juhe.cn/sms/send', {
          tpl_id: '',
          key: ''
        }).then(res => {
          console.log(res)
        })
      }
    },
    mimainput () {
      if (this.sjinputclick()) {
        if (this.mima === '') {
          alert('密码不能为空')
          return false
        } else if (/^\d+$/.test(this.mima)) {
          alert('密码不能全为数字')
          return false
        } else if (/^[a-z]+$/.test(this.mima) || /^[A-Z]+$/.test(this.mima) || /^[A-Za-z]+$/.test(this.mima)) {
          alert('密码不能全是字母')
          return false
        } else if (this.mima.length < 6 || this.mima.length > 16) {
          alert('只能输入6到16个字符')
          return false
        } else {
          return true
        }
      }
    },
    submitclick () {
      if (this.mimainput() && this.yzminput.length === 4) {
        this.actionname = true
        console.log('0')
      } else {
        return false
      }
    }
  },
  computed: {
    changezhucebtn () {
      if (this.yzminput !== '' && this.yzminput !== '' && this.mima !== '' && this.param > 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.zhucecontent
  width 100%
  background #fff
  .zhuceform
    width 85%
    margin 0 auto
    display flex
    flex-direction column
    .formdetail
      width 100%
      height 3.5rem
      display flex
      flex-direction row
      align-items center
      position relative
      border-bottom solid .1rem #eee
      .form-icon
        width 1.3rem
        height 1.3rem
        padding 0 .2rem
      .yanzhengma
        width 1.5rem
        height 1.5rem
      .from-title
        width 2.8rem
        line-height 3.5rem
        font-size .8rem
        font-weight bold
      .shoujiipt::placeholder,.yanzhengmaipt::placeholder
        color #dfdddd
      .shoujiipt,.yanzhengmaipt
        width 70%
        height 1.5rem
        padding-left .3rem
        font-size .8rem
        outline none
        border 0
      .yanzhengmaipt
        width 50%
      .yzm,.mimaimg,.timer
        font-size .8rem
        color #666
        position absolute
        right 0
      .mimaimg
        width 1.3rem
        height 1.3rem
      .timer
        font-size .7rem
    .zhuceo,.zhucet
      width 100%
      height 2.2rem
      margin-top .5rem
      text-align center
      color #fff
      font-size .9rem
      background #ec1f3f
      opacity .5
      border-radius .3rem
      border 0
      outline none
    .zhucet
      opacity 1
    .yonghuxieyi
      height 2.5rem
      display flex
      flex-direction row
      justify-content center
      align-items center
      font-size .8rem
    .yonghuxieyi span
      color #666
    .yonghuxieyi i
      color #ec1f3f
</style>

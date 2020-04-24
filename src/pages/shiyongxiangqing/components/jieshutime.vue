<template>
  <div class="Timedetail"><p class="time">{{timed}}</p>天<p class="time">{{timeh}}</p>时<p class="time">{{timem}}</p>分</div>
</template>
<script>
export default {
  name: 'jieshutime',
  data () {
    return {
      timed: '',
      timeh: '',
      timem: '',
      flag: false
    }
  },
  mounted () {
    let time = setInterval(() => {
      if (this.flag === true) {
        clearInterval(time)
      }
      this.timeDown()
    }, 500)
  },
  props: {
    endTime: {
      type: String
    }
  },
  methods: {
    timeDown () {
      const endTime = new Date(this.endTime)
      const nowTime = new Date()
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
      let d = parseInt(leftTime / (24 * 60 * 60))
      let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
      let m = this.formate(parseInt(leftTime / 60 % 60))
      if (leftTime <= 0) {
        this.flag = true
        this.$emit('time-end')
      }
      this.timed = `${d}`
      this.timeh = `${h}`
      this.timem = `${m}`
    },
    formate (time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.Timedetail
  display flex
  flex-direction row
  align-items center
  .time
    background #000
    color #fff
    padding .15rem
    margin 0 .15rem
    border-radius .5rem
    font-size .7rem
</style>

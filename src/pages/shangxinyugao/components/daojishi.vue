<template>
  <p>{{time}}</p>
</template>
<script>
export default {
  name: 'daojishi',
  data () {
    return {
      time: '',
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
    endTime: String
  },
  methods: {
    timeDown () {
      const endTime = new Date(this.endTime)
      const nowTime = new Date()
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
      let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
      let m = this.formate(parseInt(leftTime / 60 % 60))
      let s = this.formate(parseInt(leftTime % 60))
      if (leftTime <= 0) {
        this.flag = true
        this.$emit('timeend')
      }
      this.time = `${h}:${m}:${s}`
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

</style>

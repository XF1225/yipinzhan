<template>
  <div class="qianggouxuzhi">
    <div>
      <div class="qgxz-nav">
      <li :class="{active:active==0}" @click="handleclick(0)">活动详情</li>
      <li :class="{active:active==1}" @click="handleclick(1)">抢购须知</li>
      <li :class="{active:active==2}" @click="handleclick(2)">抢购流程</li>
    </div>
    <div class="qgxz-content">
      <div class="hdxq" v-if="hdxqcontent==0">
        <div class="guige">
          <p>拍下规格：</p>
          <p>每单拍一件</p>
          <p>付款方式：<span>不支持信用卡  不支持花呗  不支持淘金币</span></p>
        </div>
        <div class="wenxintishi">
          <h3 class="wxts-title">温馨提示：</h3>
          <p>拍下须知:<span>按照下单，需晒图评价</span></p>
          <p>请不要催促商家返款</p>
          <p>请进入淘宝收藏活动商品</p>
          <p>默认快递: <span>天天 不到请勿下单</span></p>
        </div>
        <div class="shangpinjieshao">
          <h3 class="wxts-title">商品介绍：</h3>
        </div>
      </div>
      <div class="qgxz" v-else-if="hdxqcontent==1">
        <p>第一条   为促进亿品赞商业服务的发展，保障用户合法权益，维护亿品赞正常运营秩序，制定本规则</p>
        <p>第二条   违规行为的认定与处理，应基于亿品赞认定的事实并严格依规执行。亿品赞用户在适用规则上一律平等</p>
        <p>第三条   亿品赞仅为买家会员提供商品购买渠道及信息交流平台，产品的使用效果因产品本身及用户的个体差异而有所不同。若会员在产品使用过程中有任何不适，请立即停用并直接与产品提供商联系。</p>
        <p>第四条   买家会员在活动过程中应遵守亿品赞规则。亿品赞不认可买家私下通过旺旺、QQ等方式私下与商家达成的所有约定，如出现用户纠纷，亿品赞以《亿品赞规则》为依据处理，买家承担所有因私下承诺造成的所有后果。</p>
        <p>第五条   亿品赞有权随时变更本规则并在网站上予以公告。若用户不同意相关变更，应立即停止使用亿品赞的相关服务或产品。亿品赞有权对用户行为及应适用的规则进行单方认定，并据此处理。</p>
      </div>
      <div class="qglc" v-else>
        <div class="liucheng">
          <i></i>
          <h3>提交申请</h3>
          <p>挑选心仪商品提交申请</p>
        </div>
        <div class="liucheng">
          <i></i>
          <h3>等待审核</h3>
          <p>等候抽取试用资格</p>
        </div>
        <div class="liucheng">
          <i></i>
          <h3>下单付款</h3>
          <p>下单购买并填写单号到平台</p>
        </div>
        <div class="liucheng">
          <i></i>
          <h3>收货并好评</h3>
          <p>亿品赞提交好评审核通过后复制提交至淘宝</p>
        </div>
        <div class="liucheng last">
          <i></i>
          <h3>平台返款本金</h3>
          <p>等候垫付资金返还亿品赞账号</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shiyongxuzhi',
  data () {
    return {
      active: 0,
      hdxqcontent: 0
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleclick (n) {
      this.active = this.hdxqcontent = n
    }
  }
}
</script>
<style lang="stylus" scoped>
.active
  color #ec1f3f
  border-bottom solid .2rem #ec1f3f
.qianggouxuzhi
  width 100%
  margin .5rem 0 3rem 0
  background #fff
  .qgxz-nav
    width 100%
    height 2.5rem
    color #666
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    border-bottom solid .1rem #eee
  .qgxz-nav li
    height 2.5rem
    line-height 2.5rem
    padding 0 .2rem
    display inline-block
    font-size .8rem
  .qgxz-content
    width 96%
    margin 1.2rem auto
    position relative
    .hdxq
      width 100%
      .guige p,.wenxintishi p,.wxts-title
        line-height 1.5rem
        font-size .8rem
      .wxts-title,.wxts-title
        color #ec1f3f
      .shangpinjieshao
        padding-bottom 1rem
    .qgxz
      width 100%
    .qgxz p
      line-height 1rem
      font-size .8rem
      padding-bottom .5rem
    .qglc
      width 100%
      display flex
      flex-direction column
      .liucheng
        width 96%
        height 3.5rem
        margin 0 auto
        display flex
        flex-direction column
        position relative
        border-left solid .1rem #eee
      .liucheng h3
        font-size .9rem
        padding-left 1rem
      .liucheng p
        font-size .8rem
        padding-left 1rem
        color #666
        margin-top .5rem
      .liucheng i
        width .8rem
        height .8rem
        background #666
        border-radius 50%
        position absolute
        left -.45rem
        top .1rem
      .liucheng span
        color #ec1f3f
      .last
        border 0
</style>

<template>
  <div id="home">
    <div class="photo-show-parent">
      <div class="photo-show">
        <a href="#">
          <img src="../../static/images/glory.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/o2o.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/sao.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/zero.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/luna1.jpg"/>
        </a>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="little-title">
      <span>猜你·喜欢</span>
    </div>
    <div class="content-div">neirong</div>
    <div class="little-title">
      <span>火力·全开</span>
    </div>
    <div class="content-div">neirong</div>
    <div class="little-title">
      <span>推荐·热门</span>
    </div>
    <div class="content-div">neirong</div>
    <div class="little-title">
      <span>人气·新奇</span>
    </div>
    <div class="content-div">neirong</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'home',
    data() {
      return {
        interval: '',
        photoIndex: 0
      }
    },
    mounted() {
      this.photoLine()
    },
    beforeDestroy() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      photoLine() {
        let _this = this
        $(".photo-show-parent ul li").eq(_this.photoIndex).css({
          "background": "lavenderblush"
        })

        _this.interval = setInterval(_this.photoShow, 5000)

        $(".photo-show-parent ul li").hover(function() {
          clearInterval(_this.interval)
          $(this).css({
            "background": "lavenderblush"
          }).siblings().css({
            "background": "#999"
          })
          _this.photoIndex = $(this).index();
          $(".photo-show a").eq(_this.photoIndex).fadeIn(1000).siblings().fadeOut(1000)
          _this.interval = setInterval(_this.photoShow, 5000)
        })
      },
      photoShow() {
        let _this = this
        this.photoIndex++;
        if (this.photoIndex > 4) {
          this.photoIndex = 0
        }
        $(".photo-show-parent ul li").eq(_this.photoIndex).css({
          "background": "lavenderblush"
        }).siblings().css({
          "background": "#999"
        })
        $(".photo-show a").eq(_this.photoIndex).fadeIn(1000).siblings().fadeOut(1000)
      }
    }
  }
</script>

<style>
  @import url("../css/home.css")
</style>

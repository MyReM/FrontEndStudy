<template>
  <div id="home">
    <div class="photo-show-parent">
      <div class="photo-show">
        <a href="#">
          <img src="../../static/images/lb1.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/lb2.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/lb3.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/lb4.jpg" />
        </a>
        <a href="#">
          <img src="../../static/images/lb5.jpg"/>
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
    <div v-for="(val,index) in contentmsg" :key="index"> 
      <div class="little-title">
        <span>{{val.title}}</span>
      </div>
      <div class="content-div">
        <div class="photomsg-content" v-for="photomsg in val.photomsgs" :key="photomsg.photoName">
          <a href="#">
            <img :src="photomsg.photoName"/>
            <div class="bgsize"></div>
          </a>
          <div class="usr-oper">
            <ul>
              <li @click="test()">
                <i class="icon iconfont icon-icon-test"></i>
                <span>{{photomsg.pageviews > 999 ? '999+' : photomsg.pageviews}}</span>
              <li>
                <i class="icon iconfont icon-icon-test1"></i>
                <span>{{photomsg.comment > 999 ? '999+' : photomsg.comment}}</span>
              <li>
                <i class="icon iconfont icon-xihuan"></i>
                <span>{{photomsg.likes > 999 ? '999+' : photomsg.likes}}</span>
              <li>
                <i class="icon iconfont icon-icon-test2"></i>
                <span>{{photomsg.share > 999 ? '999+' : photomsg.share}}</span>
              </li>
            </ul>
          </div>
          <div class="msg">
            <span>来自:</span>
            <span>{{photomsg.from}}</span>
            <a :href="photomsg.url" target="_blank">
              {{photomsg.url}}
            </a>
          </div>
        </div>
      </div>
    </div>
   </div> 
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'home',
    data() {
      return {
        interval: '',
        photoIndex: 0,
        contentmsg: ''
      }
    },
    mounted() {
      this.photoLine()
    },
    created() {
      let _this = this
    	$.ajax({
        url: 'static/js/photomsgs.json',
        dataType:'json',//服务器返回json格式数据
        type:'get',//HTTP请求类型
        timeout:10000,//超时时间设置为10秒；
        success:function(data){
        	_this.contentmsg = data
        },
        error:function(xhr,type,errorThrown){
        	
        }
      })
    },
    beforeDestroy() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      // 图片轮播一开始就执行的方法
      photoLine() {
        let _this = this
        $(".photo-show-parent ul li").eq(_this.photoIndex).css({
          "background": "lavenderblush"
        })

        _this.interval = setInterval(_this.photoShow, 5000)
        // 鼠标悬停在圆点时清除定时器并替换到对应的图片
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
        // 鼠标悬停在图片时清除定时器离开时设置定时器
        $(".photo-show-parent .photo-show a img").hover(function() {
          clearInterval(_this.interval)
        }, function() {
          _this.interval = setInterval(_this.photoShow, 5000)
        })
      },
      // 图片轮播定时器要执行的方法
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
      },
      test() {alert('s')}
    }
  }
</script>

<style>
  @import url("../css/home.css")
</style>

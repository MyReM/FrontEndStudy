<template>
	<div id="page">
	  <nav class="navbar">
	    <div class="heade_menu">
	      <ul class="nav-ul">
	        <li v-for="(val,index) in routerLinks" :key = "val.englishName">
						<router-link :to="val.to" :class="{'nav-ul-li-a-visited':val.showClass}" @click.native="addVisitedCss(index,routerLinks)">
							{{val.menuName}}
						</router-link>
					</li>
	      </ul>
	    </div>
	  </nav>
	  <div class="containerp">
	     <router-view></router-view>
	  </div>
    <footer>
      <div>
        <ul>
          <li>作者: 妖颖诗呀</li>
          <li>联系电话: 17688170821</li>
          <li>微信: ReMReM520</li>
          <li>QQ: 327503312</li>
          <li>源码地址:
            <a href="https://github.com/MyReM/FrontEndStudy" target="_blank">
              https://github.com/MyReM/FrontEndStudy
            </a>
          </li>
          <li>特别鸣谢: 
            <a href="https://cn.vuejs.org/" target="_blank">VUE语法</a>
             丶
            <a href="http://jquery.com/" target="_blank">Jquery</a>
             丶
            <a href="http://www.w3school.com.cn/js/index.asp" target="_blank">JavaScript</a>
             丶
            <a href="http://www.w3school.com.cn/css/index.asp" target="_blank">CSS</a>
          </li>
        </ul>
      </div>
      <div class="authormsg">
        <span>作者：妖颖诗呀</span>
        |
        <a href="">公网安备：3859864874515号（例子不是真的）</a>
        |
        <a href="">备案信息：粤C2-20190525021（例子不是真的）</a>
        |
        <span>分享丶素材</span>
      </div>
    </footer>
	</div>
</template>

<script src="../js/page.js"/>
<style>
	@import url("../css/page.css");
</style>

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
      
    </footer>
	</div>
</template>

<script src="../js/page.js"/>
<style>
	@import url("../css/page.css");
</style>

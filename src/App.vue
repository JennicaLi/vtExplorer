<template>
  <div id="app">
    <div id="main" >
      <div class="center">
        <router-view
          class="view"
          keep-alive
          transition
          transition-mode="out-in">
        </router-view>

      </div>
    </div>
    <div class="left-sidebar" >
      <ul id="menu">
      <li v-for="(router,index) in routers" class='aside-link'><router-link  active-class='li-selected' class='aside-link' v-bind:to="router.to" >{{router.text}}</router-link></li>
        </ul>

    </div>

    <div class="right-sidebar">
      <intruction></intruction>
    </div>
    <footer>
      <div>网站保留所有权，未经许可不得复制、镜像</div>
      <div>2016-2017</div>
    </footer>
  </div>

</template>

<script type="text/ecmascript-6">
import intruction from './components/introduction.vue'

export default {
  name: 'app',
  components: {intruction},
  data(){
    return {
      routers:[
        {to:'/',text:'登陆'},
        {to:'/register',text:'注册'},
        {to:'/sources',text:'数据源'},
        {to:'/tilesets',text:'瓦片集'}
      ]
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, simhei, Arial, sans-serif;
    word-wrap: break-word;
  }
  #app{
    width:100%;
    position:relative;
    height:100%;
  }
#main{
  width:100%;
  float:left;
  height:100%;

}
.center{
  margin:2% 20% 0 120px;

}
  /*左边*/
  .left-sidebar{
    width:120px;
    background-color: #0678a9;
    color:white;
    padding:50px 0;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
  }

  /*中间*/
  #center-view{
    /*border:red 1px solid;*/
    margin:20px auto;
  }
  .right-sidebar{
    width:20%;
    vertical-align:middle;
    margin-top:8%;

    float: left;
    margin-left: -20%;
    height:100%;
    padding:4px;
    font-family: 'Open Sans Bold',sans-serif;
  }
  #app::after{
    clear: both;
    content:'';
    display:block;
    height: 0;
  }
  .aside-link{
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 20px;
    overflow: hidden;
    color:white;
    vertical-align:middle;
margin: 0;
  }
  #menu li:hover{
     background-color: #0175be;
   }
   #menu:nth-last-child(2){

   background-color:red;

   }
   .li-selected{
    background-color: #313131;
   }
   #menu li{
   padding:3px;
   width:100%;
    line-height:45px;
    height:45px;
    display:block;
   text-align: center;
   }
   footer{
     width:100%;
     position:fixed;
     bottom:20px;
     text-align: center;
     font-size:12px;
   }

</style>

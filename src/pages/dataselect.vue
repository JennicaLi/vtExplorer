<template>
  <div id="data_source">
    <h2>xuanze</h2>

    <ul id="datalist">
      <li v-for="source in sources" >
        <input type="checkbox" v-bind:value="source.source_id" v-model="selectItem"/>
        <label>{{source.source_id}}-{{source.name}}</label>
      </li>
    </ul>
   <div>{{selectItem}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import  Cookies from 'js-cookie';
  import $ from 'jquery'

  var source_url=SERVER_API.datasources;
  var username='public';
  // var selected=[];
  if(Cookies.get('username')){
    username=Cookies.get('username');
  }
  //  var username=Cookies.username||'public';
  //  var access_token=Cookie.access_token;
  export default {
    name: 'sources',
    data (){
      return {
        sources:[],
        selectItem:[]
      }
    },
    mounted:function () {
      var url=source_url+'\/'+username;
//      var vm=this;
//      $.ajax({
//        type:"GET",
//        url:url,
//        success:function (res) {
//          vm.sources=res.data;
//        },
//        error:function (err) {
//          console.error(err);
//        }
//      });
      this.$http.get(url).then(function (res) {
        this.sources=res.data;
      },function (err) {
        console.error(err)
      })
    },
    methods:{
      addSelect:function (el) {
        var name=el.target.value;
      },
      move:function (e) {
        console.log(e.currentTarget.style.left);
//        var divLeft=e.currentTarget.style.left;
//        var divTop=e.currentTarget.style.top;
//        if(divLeft.indexOf('%')!=-1)
//          divLeft=document.body.clientWidth*divLeft.substring(0,divLeft.indexOf('%'))/100;
//        else
//          divLeft=parseInt(divLeft);
//        if(divTop.indexOf('%')!=-1)
//          divTop=document.body.clientHeight*divTop.substring(0,divTop.indexOf('%'))/100;
//        else
//          divTop=parseInt(divTop);
//        var posX = e.clientX - parseInt(divLeft);
//        var posY = e.clientY - parseInt(divTop);
//        e.currentTarget.style.left = (ev.clientX - posX) + "px";
//        e.currentTarget.style.top = ev.clientY - posY + "px";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<template>
  <div id="data_source" class="pane" style="">
  <h2>数据源</h2>

    <table class="fill80">
      <tr><button style="height:35px;padding:4% auto;font-size: 1em;" class="button-item" v-on:click="addData">添加数据</button></tr>
      <tr v-for="source in sources">
        <td>{{source.source_id}}</td>
        <td>{{source.name}}</td>
        <td><a v-bind:href="getUrl(source.source_id)">详情</a></td>
      </tr>
      </table>
  <datadialog v-bind:class="{'dialog-active': show}" v-on:closeDialog="close"></datadialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import  Cookies from 'js-cookie';
  // import $ from 'jquery'
  import datadialog from '../components/datadialog.vue'

  var source_url=SERVER_API.datasources;
  var username='public';
  if(Cookies.get('username')){
    username=Cookies.get('username');
  }
//  var username=Cookies.username||'public';
//  var access_token=Cookie.access_token;
  export default {
    name: 'sources',
    props: ['show'],
    components: {datadialog},
    data (){
      return {
        sources:[]
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
      getUrl:function (id) {
        return '#/sources/'+id+'/detail';
      },
      addData:function (e) {
        this.show=true;
        console.error(Cookies.get('username'));
      },
      close:function () {
        this.show=false;
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


#datalist{
margin:10px 20px;
}
  .list-item{
    display: block;
    margin: 10px auto;
    position:relative;
    padding:6px;
    border-bottom:1px solid #e6e0e0;
  }
  .list-item:last-child{
    border-bottom:none;
  }

  .list-item >a{
    position:absolute;
    right:15px;
    text-decoration:none;
  }

  a {
    color: #42b983;
  }
</style>

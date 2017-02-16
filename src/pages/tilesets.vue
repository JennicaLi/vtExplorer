<template>
  <div id="tileset" class="pane">
    <h2>瓦片集</h2>

    <table class="fill80">
      <tr><button style="height:35px;padding:4% auto;font-size: 1em;" v-on:click="newTileset" class="button-item">新建瓦片集</button></tr>
      <tr v-for="tileset in tilesets">
        <td>{{tileset.tileset_id}}</td>
        <td>{{tileset.name}}</td>
        <td>{{tileset.description}}</td>
        <td><a v-bind:href="getUrl(tileset.tileset_id)">详情</a></td>
        <td><a v-bind:href="getUrl2(tileset.tileset_id)">瓦片生成</a></td>
      </tr>
    </table>
    <tilesetDialog v-bind:class="{'dialog-active': show}" v-on:closeDialog="close"></tilesetDialog>
  </div>
</template>


<script>
  import Cookie from 'js-cookie'
  import tilesetDialog from '../components/tilesetdialog.vue'

  var tileset_url=SERVER_API.tilesets;
  var username=Cookie.username||'public';
export default{
    name:'tileset',
  props:['show'],
  components:{tilesetDialog},
  data(){
        return {
            tilesets:[]
        }
  },
  mounted:function () {
    var url=tileset_url+'\/'+username;
    this.$http.get(url).then(function (res) {
      if(res.data){
        this.tilesets=res.data;
      }
    },function (err) {
      console.error(err)
    })
  },
  methods:{
   getUrl:function (id) {
        return '#/tilesets/'+id+'/detail';//'/sources'//tileset_url+'/'+username+'/'+name;
      },
      getUrl2:function(id){
      return '#/tilesets/'+id+'/generate'
      },
    newTileset:function () {
      this.show=true;
    },
    close:function () {
      this.show=false;
    }
  }
}
</script>
<style>
  #new{
  width:200px;
    height:40px;
    font-size: 1em;
    color: #f1f5ef;
    background-color: #f37d2a;
    margin: 15px;
    border-radius:5px;
    display:block;
    border:1px solid #f4a66f;
  }
</style>

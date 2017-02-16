<template>
  <div class="pane wrap" >
    <h3>{{tilesetinfo.name}}</h3>
    <div>
      <span>{{tilesetinfo.updatedAt}}</span>
      <span>{{tilesetinfo.createdAt}}</span>
    </div>
   <p>{{tilesetinfo.tilejson}}</p>
  </div>
</template>

<script>
  import  Cookies from 'js-cookie';
  var tileset_url=SERVER_API.tilesets;
  var username='public';
  if(Cookies.get('username')){
    username=Cookies.get('username');
  }
    export default{
    name:'tilesetDetail',
        data(){
            return{
                tilesetinfo:{}
            }
        },
        mounted:function(){
          var url=tileset_url+'/'+username+'/'+this.$route.params.tilesetid;
          this.$http.get(url).then(function(res){
            this.tilesetinfo=res.data[0];
          },function(err){
            console.error(err);
          })
        }
    }
</script>
<style>

  </style>

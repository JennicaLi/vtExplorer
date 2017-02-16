<template>
  <div id="tilesetdialog" class="dialog">
    <button id="close" v-on:click="closeDialog">关闭</button>
    <h3>新建瓦片集</h3>
    <div id="tilesetform">
      <div class="form-item">
        <span>瓦片集ID：</span><input type="text" id="tileset_id" placeholder="字母和数字"/>
      </div>
      <div class="form-item">
        <span>瓦片集名字：</span><input type="text" id="tileset_name"/>
      </div>
      <div class="form-item">
        <span>最小级别：</span><input type="text" id="minzoom" placeholder="0-18的数字"/>
      </div>
      <div class="form-item">
        <span>最大级别：</span><input type="text" id="maxzoom" placeholder="0-18的数字"/>
      </div>
      <div class="form-item ">
        <span>描述信息：</span><textarea rows='3' id="description"></textarea>
      </div>
      <div class="form-item">
        <button  v-on:click="newTileset" class="button-item">创建</button>
        <input type="reset" value="清除" class="button-item"/>
      </div>
    </div>
    <div>{{message}}</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Cookies from 'js-cookie'
  export default{
      name:'tilesetdialog',
    props:['show'],
    data(){
          return{
              show:false,
            message:""
          };
    },
    methods:{
      closeDialog:function () {
        this.show=false;
        this.$emit('closeDialog');
      },
      newTileset:function (el) {
        var tileset_id=this.$el.querySelector('#tileset_id').value;
        var tileset_name=this.$el.querySelector('#tileset_name').value||'';
        var minzoom=parseInt(this.$el.querySelector('#minzoom').value)||0;
        var maxzoom=parseInt(this.$el.querySelector('#maxzoom').value)||18;
        var description=this.$el.querySelector('#description').value||'';
        var createbutton = el.target.parentElement;
        createbutton.disabled = true;

        var url=SERVER_API.tilesets;
        var username=Cookies.username||'public';

        var options={
          name:tileset_name,
          belongto:username,
          minzoom:minzoom,
          maxzoom:maxzoom,
          description:description
        }
        if(tileset_id){
          options.tileset_id=tileset_id;
        }

        var vm=this;
        $.ajax({
          type:'POST',
          url:url+'/'+username,
          data:options,
          dataType:'json',
          success:function(res){
            vm.message=res.message;
            createbutton.disabled = false;
            vm.$emit('closeDialog');
          },
          error:function (err) {
            console.error(err);
            vm.message=err.responseJSON.error;
            createbutton.disabled = false;
          }
        })


      }
    }
  }
</script>

<style>
  .form-item{
    display: block;
    text-align: center;
    margin:10px 0;

  }

  .form-item span{
    display: inline-block;
    width:100px;
    text-align: center;
    vertical-align:middle;

  }


</style>

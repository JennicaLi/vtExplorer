<template>
  <div id="datadialog" class="dialog">
    <button id="close" v-on:click="closeDialog">关闭</button>
    <h3>添加数据</h3>
    <div class="wrap">
      <div id="uploader">
        <table class="fill80">
          <thead>
          <tr>
            <th>文件名</th>
            <th>大小</th>
            <th>进度</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='file in files'>
            <td v-text='file.name'></td>
            <td v-text='filesize(file.size)'></td>
            <td v-text='file.progress'></td>
            <td v-text='onStatus(file)'></td>
            <td>
              <input type='button' value='上传' @click="uploadItem(file)"/>
              <input type='button' value='删除' @click="deleteItem(file)"/>
            </td>
          </tr>
          </tbody>
        </table>
        <fileuploader v-bind:url="url"
                      icon="url(../assets/img/add.png)"
                      ref="fileupload"
                      v-bind:events = 'cbEvents'
                      v-bind:filters = "filters"
                      v-bind:request-options = "reqopts"
                      v-on:onAdd = "onAddItem">
        </fileuploader>
        <button class='button-item' @click="uploadAll">上传所有文件</button>
        <button class='button-item' @click="pauseAll">停止上传</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import fileuploader from 'vue-file-upload';
  import Cookies from 'js-cookie';

  var username=Cookies.get('username')||'public';
  var url=SERVER_API.datasources+'/'+username;

  export default{
    components:{fileuploader},
    name:'datadialog',
    props:['show'],
    data(){
      return{
        url:url,
        files:[],
        filters:[{
          name:'imageFilter',
          fn(file){
            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|zip|csv|geojson|'.indexOf(type) !== -1;
          }
        }],
        cbEvents:{
          onCompleteUpload:(file,response,status,header)=>{
            console.log(file);
            console.log("finish upload;")
          },
          onAddFileSuccess:(file)=>{
            console.log(file);
            console.log("success add to queue");
          }
        },
        reqopts:{
          formData:{
            tokens:'tttttttttttttt'
          },
          responseType:'json',
          withCredentials:false
        }
      }
    },
    methods:{
      filesize:function (bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024;
        var sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
      onmove:function (e) {
//        var divLeft=this.$el.style.left;
//        var divTop=this.$el.style.top;
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
      },
      move:function (e) {
          console.log(e.currentTarget);
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
      },
      closeDialog:function () {
        this.show=false;
        this.$emit('closeDialog');
      },
//file-uploader
      onStatus(file){
        if(file.isSuccess){
          return "上传成功";
        }else if(file.isError){
          return "上传失败";
        }else if(file.isUploading){
          return "正在上传";
        }else{
          return "待上传";
        }
      },
      onAddItem(files){
        console.log(files);
        this.files = files;
      },
      uploadItem(file){
        file.upload();
      },
      deleteItem(file){
        file.remove();
      },
      uploadAll(){
        this.$refs.fileupload.uploadAll();
      },
      pauseAll(){
        this.$refs.fileupload.active=false;
      }
    }
  }
</script>

<style>
  #close{
    float: right;
  }
  .dialog h3{
   background-color: #0678a9;
   text-align: center;
   padding: 5px;
 }
.dialog{
  border-radius:4px;
  min-width: 280px;
  min-height: 200px;
  border:1px solid #0175be;
  position: absolute;
  left: 40%;
  top: 25%;
  visibility: hidden;
  backface-visibility: hidden;
  perspective: 1300px;
  z-index: 2000;
  background-color: #f1f5ef;
}
.dialog-active {
  visibility: visible;
}
.wrap{
    text-align:center;
    margin:0 20px;
}
    #uploader{
        margin:10px auto;
        display:inline-block;
        *display:inline;
        text-align:left;
    }
    table th,td,tr{
    padding:3px 10px;
    white-space: nowrap;
    text-align:center;
    }
    .button-item{
    padding:2px 5px;
    height:30px;
    font-size: 13px;
    color: #f1f5ef;
    background-color: #f37d2a;
    margin: 5px 10px 5px 2px ;
    border-radius:5px;
    border:1px solid #f4a66f;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    }
    fileuploader{
      margin:20px;
    }
    .fill80{
    min-width:80%;
    }
</style>

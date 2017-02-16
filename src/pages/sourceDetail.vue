<template>
    <div class="pane wrap" >
      <h3>{{sourceinfo.name}}</h3>
      <div>
        <span>{{sourceinfo.updatedAt}}</span>
        <span>{{sourceinfo.createdAt}}</span>
      </div>

      <table>
        <thead>
        <th>name</th>
        <th>description</th>
        </thead>
        <tbody>
        <tr v-for="(value,key) in sourceinfo.keys">
          <td class="text-left">{{key}}</td>
          <td class="text-left">{{value}}</td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
  import  Cookies from 'js-cookie';
  var source_url=SERVER_API.datasources;
  var username='public';
  if(Cookies.get('username')){
    username=Cookies.get('username');
  }
    export default{
    name:'dourceDetail',
        data(){
            return{
                sourceinfo:{}
            }
        },
        mounted:function(){
          var url=source_url+'/'+username+'/'+this.$route.params.sourceid;
          this.$http.get(url).then(function(res){
            this.sourceinfo=res.data[0];
          },function(err){
            console.error(err);
          })
        }
    }
</script>
<style>
  .pane{
    min-width:300px;
    margin:20px 30px;
    padding:5px 10px;
    text-align:center;
    font-size:14px;
  }
  .pane h2,h3{
    vertical-align:middle;
    font-size:20px;
    padding:10px auto;
  }
  .pane h2{font-size:24px;}

  .pane div,.pane table{
  margin:10px auto;

  }
  .pane ul{
    display:inline-block;
    margin:0 auto;
  }
.pane ul>li{
    display:block;
  }
  .text-left{
  text-align:left;
  }
  </style>

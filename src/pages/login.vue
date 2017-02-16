<template>
  <div id="login">
    <h2>登录</h2>
    <div class="container"><p>{{message}}</p></div>
        <input type="text" id="username" class="inputbox" placeholder="用户名" />
        <input type="password" id="password" class="inputbox" placeholder="密码" />
        <button class='ok_button' v-on:click="login">登录</button>
    <a href="/#/register">没有账号？请注册</a>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Cookies from 'js-cookie'
  export default{
    data(){return{message:''}},
    methods:{
      login:function () {
        var url=SERVER_API.users;
        var username=this.$el.querySelector('#username').value;
        var pwd=this.$el.querySelector('#password').value;
        var vm=this;
        if(!username||!pwd){
          this.message='登陆信息不完整';
          return;
        }
        var options={
          username:username,
          password:pwd
        }
        $.ajax({
          type:'POST',
          url:url+'/'+username,
          data:options,
          dataType:'json',
          success:function (res) {
//            if(!res.is_verified){
//              vm.message='请先到邮箱认证'
//              return;
//            }
//            else{
              Cookies.set('access_token',res.access_token);
              Cookies.set('username',res.username);
              Cookies.set('email',res.email);
              window.location.href = '#/sources';
//            }
//            vm.message=res.body;
          },
          error:function (err) {
            vm.message=err.responseJSON.error
          }
        })
      }
    }

  }
</script>
<style>
  #login h2{
   color: #f1f5ef;
   font-weight:bold;
  }

  .container{
    color:red;
  }
  #login{
    text-align:center;
    margin: 40px auto;
    padding:20px 20px;
    max-width: 640px;
    background-color:#0175BE;
    width:440px;
    height:330px;
    border-radius:15px;
  }

  .inputbox{
    width:270px;
    height:40px;
    padding:0 10px;
    border-radius:5px;
    margin: 15px;
    padding:0 15px;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  /*.container>p:before{
      content:url(../assets/img/attention.png);
  }
  */

 #login a{
    font-size: 10px;
    text-decoration: none;
    color: #f1f5ef;
  }

  .ok_button{
    width:270px;
    height:40px;
    font-size: 1em;
    color: #f1f5ef;
    background-color: #f37d2a;
    margin: 15px auto;
    border-radius:5px;
    display:block;
    border:1px solid #f4a66f;
  }


</style>

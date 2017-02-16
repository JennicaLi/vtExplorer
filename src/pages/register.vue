<template>
  <div id="register">
    <h2>注册</h2>
    <div class="broadcast">{{message}}</div>
    <div class='box'>
      <div class="container">
        <label>电子邮箱</label>
        <input type="text" class='inputbox' id="email" placeholder="admin@example.com" />
      </div>
      <div class="container">
        <label>用户名</label>
        <input type="text" id="username" placeholder="admin123" class='inputbox'/>
      </div>
      <div class="container">
        <label>密码</label>
        <input type="password" id="password" placeholder="Admin123!" pattern="(\w|[$,@]){6,}" class='inputbox'/>
      </div>
      <div class="container">
        <label>确认密码</label>
        <input type="password" id="repassword" placeholder="Admin123!" pattern="(\w|[$,@]){6,}" class='inputbox'/>
      </div>
      <div class="container">

        <button class='ok_button parrel ' id="submit_user"  v-on:click='register'>立即注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
import $ from 'jquery'
  export default{
    props:['message'],
    data(){
      return {
      }
    },
    methods:{
      register:function (e) {
        var url=SERVER_API.users;
        var email=this.$el.querySelector('#email').value;
        var username=this.$el.querySelector('#username').value;
        var password=this.$el.querySelector('#password').value;
        var repassword=this.$el.querySelector('#repassword').value;
        var emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if(!email||!username||!password||!repassword){
          this.message='请将信息填写完整';
          return ;
        }
        if(!emailReg.test(email)){
          this.message='请输入正确的邮箱地址';
          return ;
        }
        if(password!==repassword){
          this.message='两次密码不一致';
          return ;
        }
        this.message='';
        var registerbutton = e.target.parentElement;
        registerbutton.disabled = true;
        var options={
          email:email,
          username:username,
          password:password,
        }
        var vm=this;
        $.ajax({
          url:url,
          type:'POST',
          data:options,
          dataType:'json',
          success:function (res) {
//            registerbutton.disabled = false;
            vm.message=res.message;
            window.location.href('#/login');
          },
          error:function (err) {
            registerbutton.disabled = false;
            vm.message=err.responseJSON.error;
          }
        })
        //todos:check
//        this.$http.post(url, options).then((res) =>{
//          var data=res.data;
//          registerbutton.disabled = false;
//          this.message='已注册，请验证邮箱';
//          },
//        (res)=>{
//          registerbutton.disabled = false;
//          console.error(res.data.error);
//          })

      }
    }
  }

</script>

<style scoped>
  #register{
    text-align:center;
    margin: 0 auto;
    max-width: 640px;
  }
  #register label{color:#000;}
  .broadcast{color:red;font-size:12px;}

  .container> label {
    display: inline-block;
    padding-right: 1rem;
    width: 6rem;
    text-align: right;
  }
  .container:after {
    display: block;
    content: "";
    clear: both;
  }
.box{
background-color:#f9f7f7;
padding:8px auto;

}

</style>

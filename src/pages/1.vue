<template>
  <div>
    <h3>{{sourceInfo}}</h3>

  </div>
</template>

<script>


    export default{
        data(){
            return{
                sourceInfo:''
            }
        },
        mounted:function(){
          this.sourceInfo="hello"
        }
    }
</script>

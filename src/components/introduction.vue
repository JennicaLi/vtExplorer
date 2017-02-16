<template>
  <ul>
    <li v-for="info in infos">
      <div>
        <h3>{{info.title}}</h3>
        <p v-for="detail in info.details">{{detail}}</p>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'intruction',
    data() {
      return {
        infos:[
          {
            title:'How styles work',
            details:['Design: Click New style to customize a template style, upload your own stylesheet, or design from scratch with an Empty style.',
              'Develop: Pick a ready-to-use Mapbox style or use a custom style designed with Studio. Click Share, develop & use of a custom style to obtain its style URL and an access token.'
            ]
          }]
      }
    }
  }
</script>
<style scoped>
  h3{
  line-height:20px;
  margin:15px auto;
  }
  </style>

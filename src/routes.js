/**
 * Created by lijing on 2017/1/5.
 */
import  login from './pages/login.vue'
import register from './pages/register.vue'
import sources from './pages/sources.vue'
import tilesets from './pages/tilesets.vue'
import sourceDetail from './pages/sourceDetail.vue'
import dataselect from './pages/dataselect.vue'
import tilesetdetail from './pages/tilesetDetail.vue'

export default [
  {
    path:'/',
    component:login
  },
  {
    path:'/register',
    component:register
  },

  {path:'/sources',
    component:sources
  },
  {
    path:'/sources/:sourceid/detail',
    component:sourceDetail
  },

  {
    path:'/tilesets',
    component:tilesets
  },

  {
    path:'/tilesets/:tilesetid/detail',
    component:tilesetdetail
  },
  {
    path:'/tilesets/:tilesetid/generate',
    component:dataselect
  }
]

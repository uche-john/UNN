<script>
import {RouterView} from "vue-router"


import Nav from './components/Nav.vue'
import HomeView from "./views/HomeView.vue"
import Footer from './components/Footer.vue'
// import StudentPortal from './views/StudentPortal.vue'
export default {
   data(){
      return{
         show:false

      }
   },
   components: {
      Nav,
      // HomeView,
      // Footer,
      // StudentPortal
   },
   // methods:{
   //    toggle(){
   //       show= !show
   //    }
   // }
   
}
</script>

<template>
   <div>
      <Nav/>
   </div>
 
 <RouterView/>
</template>




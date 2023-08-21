<script>
import {RouterView} from "vue-router"


import Nav from './components/Nav.vue'


export default {
   data(){
      return{
         show:false

      }
   },
   components: {
      Nav
   },
  
   
}
</script>

<template>
   <div>
      <Nav/>
   </div>
 
 <RouterView/>
</template>




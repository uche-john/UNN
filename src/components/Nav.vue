<script>
export default {
    
}
</script>
<template>
    <nav>
      <div class="bg-green-700 px-2 py-4 text-white text-sm flex items-center justify-around cursor-pointer sm:text-sm">
            <section class="flex items-center ">
                <p class="px-3">TETFund Intervention </p>|
                <p class="px-3">Give/Donations </p>|
                <p class="px-3">Enterprise </p>|
                <p class="px-3">FAQs </p>|
                <p class="px-3">UNN Mail </p>|
                <p class="px-3">Research Gate </p>| 
                <p class="px-3">UNN Mart </p>|
                <p class="px-3">Contact </p>
            </section>
            
            <section class="sm:flex  items-center hidden justify-between px-12">
                <div class="flex items-center justify-around bg-white p-3 rounded-2xl">
                    <input type="search" placeholder="Search" class="outline-none text-black" >
                    <font-awesome-icon icon="fa-solid fa-search" class="text-2xl text-gray-300  hover:text-green-400 px-2" />
                </div>
                <div class="">
                    
                    <font-awesome-icon icon="fa-brands fa-youtube" class="text-2xl text-white hover:text-green-400 px-2" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl text-white hover:text-green-400 px-2" />
                    <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl text-white hover:text-green-400 px-2"  />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl text-white hover:text-green-400 px-2" />
                </div>
            </section>
        </div>
    
      
      <div class="text-green-700 bg-white flex items-center   justify-between sm:py-10  ">
        <section class=" text-right pl-5 flex items-center  justify-between">
          <img src="../assets/unnLogo.png" alt="UNN logo" class="w-20">
          <div class="mb-12 pl-5">
            <p class="text-3xl sm:text-2xl font-bold " >University of Nigeria</p>
            <p class="text-sm pt-2  font-mono">Restoring The Dignity of Man</p>
          </div>
        </section>
       
        <section class="hidden sm:inline text-xl cursor-pointer">
          <router-link to="/" class="inline p-5 hover:font-semibold " >Home</router-link>
          <router-link to="/about" class="inline p-2 hover:font-semibold" >Academics</router-link>
          <router-link to="/student" class="inline p-2 hover:font-semibold" >Admission</router-link>
          <router-link to="/news" class="inline p-2 hover:font-semibold" >Libraries</router-link>
          <router-link to="/news" class="inline p-2 hover:font-semibold" >Campuses</router-link>
          <router-link to="/news" class="inline p-2 hover:font-semibold" >Registry</router-link>
          <router-link to="/news" class="inline p-2 hover:font-semibold" >Alumni</router-link>
          <router-link to="/news" class="inline p-2 hover:font-semibold" >News</router-link>
          <router-link to="/" class="inline px-8 py-3 hover:border-gray-500 hover:text-white hover:bg-green-500 mx-12 border-2 border-green-700 text-green-700 rounded-2xl " >Portal</router-link>
         
        </section>
        <button id="hamburger-button" class="text-3xl md:hidden w-1/6 mb-20 cursor-pointer">
          &#9776;
        </button>
      </div>
  
     
     
    </nav>
    
  </template>
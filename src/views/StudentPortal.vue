<template>
    <!-- <Nav/> -->
    <form class="m-auto w-4/5 mb-10 text-center shadow-lg border rounded-md sm:w-2/5">
        <div class="m-auto">
            <img src="../assets/unnLogo.png" alt="" class="w-1/5 m-auto my-10">
            <p class="text-xl font-bold">Sign Into Your Account</p>
        </div>
        <section class="">
            <input type="text" class=" w-4/5 sm:w-3/5 outline-none border-b my-10" placeholder="Username">
            <input type="Password" class="w-4/5 sm:w-3/5 outline-none  border-b mb-10" placeholder="Password">
            <div class="flex items-center w-5/6 sm:w-3/5 m-auto text-sm justify-between sm:text=xl">
                 <div><input type="radio" class="mx-2 pt-2 text-sm sm:text-xl"><span>Remember me</span> </div>
                <p><a href="#" class="text-blue-300 text-sm sm:text-xl">Forgot Password?</a></p>
            </div>
            <br>
            <button class="sm:w-1/5 w-2/5  bg-blue-400 rounded-md p-4 mb-10 text-sm text-white sm:text-xl">Sign In</button>
            <p class="text-sm sm:text-xl" >Click <a href="#"><span class="text-blue-300">here</span> </a>to get Hostel</p>
            
        <p class="my-5 text-sm sm:text-xl ">Any issues? <a href="#"><span class="text-blue-300">Send us an email</span> </a> or call our support on 09055397623</p>
        </section>

    </form>
</template>
<script>
// import Nav from '../components/Nav.vue'
export default {
    // components:{
    //     Nav
    // }
}
</script>
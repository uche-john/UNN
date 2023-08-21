<template>
    <!-- <Nav/> -->
    <form class="m-auto w-4/5 mb-10 text-center shadow-lg border rounded-md sm:w-3/5">
        <div class="m-auto">
            <img src="../assets/unnLogo.png" alt="" class="w-1/5 m-auto my-10">
            <p class="text-xl font-bold">Sign Into Your Account</p>
        </div>
        <section class="">
            <input type="text" class="w-3/5 outline-none border-b my-10" placeholder="Username">
            <input type="Password" class="w-3/5 outline-none  border-b mb-10" placeholder="Password">
            <div class="flex items-center w-3/5 m-auto text-sm justify-between sm:text=xl">
                 <div><input type="radio" class="mx-2 pt-2"><span>Remember me</span> </div>
                <p><a href="#" class="text-purple-800">Forgot Password?</a></p>
            </div>
            <br>
            <button class="w-1/5  bg-blue-400 rounded-md p-4 mb-20 text-sm text-white sm:text-xl">Sign In</button>
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
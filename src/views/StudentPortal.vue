<template>
    <div class="bg-gray-200">
        <div class="m-auto">
            <img src="../assets/unnLogo.png" alt="">
            <p class="text-xl font-bold">Sign Into Your Account</p>
        </div>
        <section class="m-auto">
            <input type="text" class="w-3 outline-none bg-gray-400 rounded-md" placeholder="Username">
            <input type="Password" class="w-3 outline-none bg-gray-400 rounded-md" placeholder="Password">
            <div class="flex items-center justify-between">
                <input type="radio"><span>Remember me</span>
                <p><a href="#">Forgot Password?</a></p>
            </div>
            <button class="w-3/5 text-center bg-blue-600 rounded-md text-white">Sign In</button>
        </section>

    </div>
</template>
<script>
export default {
    
}
</script>
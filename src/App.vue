<script setup>
  import Nav from './components/Nav.vue'


  const images = [
         './assets/img6.jpeg',
         './assets/img1.jpeg',
         './assets/img3.jpg',
         './assets/img7.jpeg',
         './assets/img9.jpeg',
      ]
       const currentIndex =  0
       const image = {
          src:"./assets/img9.jpeg"
       }



     const  prevSlide = ()=>{
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.image.length;
   }

  const nextslide = ()=>{
      this.currentIndex = (this.currentIndex + 1 ) % this.image.length;
   }


</script>

<template>
  <div>
      <Nav/>
    
      <div class="w-full h-1/2 relative" id="stuff">
        <img :src="image.src" alt="student" class="w-full" id="bg">
        <p class="text-2xl text-white absolute bg-black bottom-1 text-center opacity-60">
        2021/2022 PHARMACY 1ST SEMESTER EXAMINATION TIMETABLE
        </p>
      </div>
    
      <div class="flex items-center justify-between">
       <button class="p-2 rounded-md bg-slate-500" @click="prevSlide">Previous</button>
       <button class="p-2 rounded-md bg-slate-500" @click="nextSlide">Next</button>
      </div>
    
       
    
    
        <div class="flex justify-between items-center mt-10 p-5">
          <img src="./assets/vc.jpeg" alt="VC" class=" ml-10 rounded-2xl w-2/6">
    
          <section class="text-center w-3/6 mr-16">
             <div class="text-left">
                <p class="text-3xl font-bold py-5">Misson</p>
                <p class="text-xl font-cursive">
                   
                   To Place the University of Nigeria, Nsukka in the forefront of research and the development, innovaton,
                   knowledge transfer and human resources development in the global academic terrain, while promoting the 
                   core values which will ensure the restoration of the dignity of man. <span class="float-right text-8xl text-gray-600">&#34;</span>
    
                </p>
             </div>
             <div class="text-left py-5">
                <p class="text-3xl font-bold py-5">vision</p>
                <p class="text-xl font-cursive">
                To create a fuctional, globally competitive and research focused university which is not just an ivory Tower but responsive to the
                needs of the society while delivering world class educaton and knowledge. <span class="float-right text-8xl text-gray-600">&#34;</span>
    
                </p>
             </div>
          </section>
        </div>
    
    <section class="flex items-center text-xl justify-between p-10">
       <p class="text-2xl">Latest News</p>
    
       <p class="text-blue-400 text-2xl">See more news</p>
    </section>
    
     <section class="flex items-center justify-evenly">
       <div class="w-2/5 rounded-xl m-5 shadow-md ">
          <img src="./assets/img.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
       </div>
    
       <div class="w-2/5 rounded-xl m-5 shadow-md ">
          <img src="./assets/img5.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
            Home Science and Management Craft Exhibition & Sales 2023
          </p>
    
       </div>
    
       <div class="w-2/5 rounded-xl m-5 shadow-md ">
          <img src="./assets/img1.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
             3rd Annual national Hybrid confrence 2023
          </p>
    
       </div>
     </section>
     
     <section class="flex items-center text-xl justify-between p-10">
       <p class="text-2xl">Latest Events</p>
    
       <p class="text-blue-400 text-2xl">See more events</p>
    </section>
    
    <section class="flex items-center py-10 justify-around">
       <div class="w-2/5 rounded-xl shadow-xl text-center">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white">Thursday 8th June, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
          <p class="text-gray-400 text-center py-5">Moot Court, University of Nigeria, Enugu</p>
          <p class="text-gray-400 text-center py-5">1:00 PM</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
         <div class="w-2/5 rounded-xl shadow-xl text-center">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white">Thursday 8th June, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
          <p class="text-gray-400 text-center py-5">Moot Court, University of Nigeria, Enugu</p>
          <p class="text-gray-400 text-center py-5">1:00 PM</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
       
    </section>
    <section class="flex items-center py-10 justify-around">
       <div class="w-2/5 rounded-xl shadow-xl text-center">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white">Thursday 8th June, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
          <p class="text-gray-400 text-center py-5">Moot Court, University of Nigeria, Enugu</p>
          <p class="text-gray-400 text-center py-5">1:00 PM</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
         <div class="w-2/5 rounded-xl shadow-xl text-center">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white">Thursday 8th June, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
          <p class="text-gray-400 text-center py-5">Moot Court, University of Nigeria, Enugu</p>
          <p class="text-gray-400 text-center py-5">1:00 PM</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
       
    </section>
    
    
    <div>
       <p class="font-bold text-2xl mx-10">Discover</p>
    </div>
    
    <section class="flex items-center justify-between">
       <div class="w-2/5 rounded-xl m-2 shadow-md ">
          <img src="./assets/addmission.png" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">Admissions</p>
          <p class="text-left text-md p-2">
             The Admission unit of the Registry Department implements the decisions of the university Management as they 
             affect admission of candidates into undergraduate programmes of the University...
          </p>
    
       </div>
    
       <div class="w-2/5 rounded-xl m-2 shadow-md ">
          <img src="./assets/campus12-200x130.png" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">Campus Life</p>
          <p class="text-left text-md p-2">
             UNN Campuse Life is the official University of Nigeria, Nsukka entertainment Unit created by the University of Nigeria,Nsukka ICT department...
          </p>
    
       </div>
    
       <div class="w-2/5 rounded-xl m-2 shadow-md ">
          <img src="./assets/img9.jpeg" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">About UNN</p>
          <p class="text-left text-md p-2">
             To place the University of Nigeria, Nsukka in the forefront of research and the development, innovation, knowledge transfer and human resources
             development in global academics terrain, while promotting the core values...
          </p>
    
       </div>
    
    
    </section>
    
    
    
       <section class="">
         <div class="grid grid-cols-2 gap-1 p-10">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="./assets/img6.jpeg" alt="">
            </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="./assets/img9.jpeg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="./assets/img7.jpeg" alt="">
                </div>
    
                    
            <div class="grid grid-cols-2 mt-0 ">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="./assets/img1.jpeg" alt="">
            </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="./assets/img5.jpeg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="./assets/img4.jpg" alt="">
                </div>
            
                
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="./assets/img3.jpg" alt="">
                </div>
            </div>
        </div>
    
       
       </section>
    
       <img :src="image" alt="student" class="w-full">
    
    
    </div>
    
   
    
    
 
</template>

<style scoped>
       #bg{
          width:100vw;
          align-items:center;
          height: 80vh;
       }
       #stuff p{
          text-align: center;
          padding:15px;
          width: 98vw;
       }
    </style>


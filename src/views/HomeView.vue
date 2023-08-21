<script>
import Footer from '../components/Footer.vue'
import {mapState} from "vuex"

export default {
 

   data() {
    return {
      images: [
        "https://www.unn.edu.ng/wp-content/uploads/2023/07/Diploma-2023-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/PGC-2023-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/PG-Orientation-2023-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/Pharmacy-CBT-1-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/Extra-Mural-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/NMSB-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/Closure-of-PG-2023-1360x510_c.png",
        "https://www.unn.edu.ng/wp-content/uploads/2023/08/New-Academic-Session-2022-1360x510_c.png",
      ],
      currentIndex: 0,
      
      // show:false
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentImageAlt() {
      return `Image ${this.currentIndex + 1}`;
    },
    
      ...mapState(["show"])
   
    
  },

  

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 2000); // Change slide every 2 seconds
  },
  components:{
   Footer,
   // Nav
  }
}
</script>
<template>
  <div v-show="!show">
      
    <!-- <Nav/> -->
    
      <div class="slideshow-container">
        <div class="slide">
         <!-- "../assets/unnimg7.png" -->
          <img :src="images[0]" :alt="currentImageAlt" class="w-full">
        </div>
        <button class="prev-button" @click="prevSlide">&#10094;</button>
        <button class="next-button" @click="nextSlide">&#10095;</button>
      </div>
       
    
    
        <div class=" flex-col flex justify-around items-center mt-10 p-5 sm:flex-row">
          <div>
            <div class="relative">
              <img src="../assets/vc.jpeg" alt="VC" class=" w-4/6 m-auto rounded-2xl  sm:w-5/6 sm:ml-10">
              <div class="text-md text-white absolute w-4/6 ml-24 p-10 rounded-b-2xl  bg-black bottom-1 text-left opacity-60 sm:w-5/6 sm:ml-10">
                <p>The Vice-Chancellor</p>
                <p class="font-bold text-xl">Professor Charles Arinzechukwu Igwe</p>
              </div>
            </div>
          </div>
    
          <section class="text-center   sm:mr-16 sm:w-4/6">
             <div class="text-center py-5 sm:text-left">
                <p class="text-3xl font-bold py-5">Misson</p>
                <p class="text-md font-serif mb-10 sm:text-xl  ">
                   
                   To Place the University of Nigeria, Nsukka in the forefront of research and the development, innovaton,
                   knowledge transfer and human resources development in the global academic terrain, while promoting the 
                   core values which will ensure the restoration of the dignity of man. 
                   <font-awesome-icon icon="fa-solid fa-quote-right" class="text-4xl float-right text-gray-300  hover:text-green-400 px-2" />
                </p>
             </div>
             <div class="text-center py-5 sm:text-left">
                <p class="text-3xl font-bold py-5 font-serif">vision</p>
                <p class="text-md font-serif mb-10 sm:text-xl ">
                To create a fuctional, globally competitive and research focused university which is not just an ivory Tower but responsive to the
                needs of the society while delivering world class educaton and knowledge. 
                <font-awesome-icon icon="fa-solid fa-quote-right" class="text-4xl float-right text-gray-300  hover:text-green-400 px-2" />
                </p>
             </div>
          </section>
        </div>
    
    <section class="flex items-center text-xl justify-between p-10">
       <p class="text-2xl">Latest News</p>
    
       <p class="text-blue-400 text-2xl">See more news</p>
    </section>
    
     <section class="flex flex-col items-center justify-evenly sm:flex-row">
       <div class="w-4/5 rounded-xl m-5 shadow-md sm:w-2/5">
          <img src="../assets/img.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
             2021/2022 pharmacitical 1st semester Examination Timetable
          </p>
    
       </div>
    
       <div class="w-4/5 rounded-xl m-5 shadow-md sm:w-2/5 ">
          <img src="../assets/img5.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
            Home Science and Management Craft Exhibition & Sales 2023
          </p>
    
       </div>
    
       <div class="w-4/5 rounded-xl m-5 shadow-md sm:w-2/5">
          <img src="../assets/img1.jpeg" alt="VC" class="w-full rounded-t-xl ">
    
          <p class="text-left text-2xl p-5">
             3rd Annual national Hybrid confrence 2023
          </p>
    
       </div>
     </section>
     
     <section class="flex items-center text-xl justify-between p-10">
       <p class="text-2xl">Latest Events</p>
    
       <p class="text-blue-400 text-2xl">See more events</p>
    </section>
    
    <section class="flex flex-col items-center py-10 justify-around sm:flex-row">
       <div class="w-4/5 rounded-xl shadow-xl text-center mb-20 sm:w-2/5">
          <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white"><font-awesome-icon icon="fa-solid fa-calendar" class="text-2xl text-gray-300 px-2" />  Thursday 8th June, 2023</p>
        
          <p class="text-center text-2xl font-bold p-5">
             181st INAUGURAL LECTURE
          </p>
    
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-location-pin" class="text-2xl text-gray-300 px-2" /> Moot Court, University of Nigeria, Enugu</p>
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-clock" class="text-2xl text-gray-300 px-2" /> 1:00 PM</p>
          <button class="border p-3 my-10 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
         <div class="w-4/5 rounded-xl shadow-xl text-center mb-20 sm:w-2/5">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white"> <font-awesome-icon icon="fa-solid fa-calendar" class="text-2xl text-gray-300 px-2" /> June 4th - 8th, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
             2nd Annual International Conference on Water in Africa
          </p>
    
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-location-pin" class="text-2xl text-gray-300 px-2" /> Princess Alexandra Auditorium (PAA)</p>
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-clock" class="text-2xl text-gray-300 px-2" /> 12:00 Noon</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
       
    </section>
    <section class="flex flex-col items-center py-10 justify-around sm:flex-row">
       <div class="w-4/5 rounded-xl shadow-xl text-center mb-20 sm:w-2/5">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white"> <font-awesome-icon icon="fa-solid fa-calendar" class="text-2xl text-gray-300 px-2" /> April 11th -April 22nd, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5 ">
             Final 2021/2022 First Semester Examination Timetable for inter-Faculty and inter-Disciplinary Courses
          </p>
    
         
         
          <button class="border p-3 my-16 border-green-700 rounded-xl text-green-700  text-center">View Details</button>
    
       </div>
    
         <div class="w-4/5 rounded-xl shadow-xl text-center mb-20 sm:w-2/5">
         <p class="bg-green-700 p-5 text-center  rounded-t-xl w-full text-white"> <font-awesome-icon icon="fa-solid fa-calendar" class="text-2xl text-gray-300 px-2" />June 27th -28th, 2023</p>
    
          <p class="text-center text-2xl font-bold p-5">
            Youth Friendly Resource Center Hybrid National Symosium/Conference
          </p>
    
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-location-pin" class="text-2xl text-gray-300 px-2" /> Princess Alexandra Auditorium (PAA)</p>
          <p class="text-gray-400 text-center py-5"> <font-awesome-icon icon="fa-solid fa-clock" class="text-2xl text-gray-300 px-2" /> 10:00 AM</p>
          <button class="border p-3 my-5 border-green-700 rounded-xl text-green-700 text-center">View Details</button>
    
       </div>
    
       
    </section>
    
    
    <div>
       <p class="font-bold text-2xl mx-10">Discover</p>
    </div>
    
    <section class="flex flex-col items-center justify-between sm:flex-row">
       <div class="w-4/5 rounded-xl m-2 shadow-md mb-20 sm:w-2/5">
          <img src="../assets/addmission.png" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">Admissions</p>
          <p class="text-left text-md pb-10  p-2">
             The Admission unit of the Registry Department implements the decisions of the university Management as they 
             affect admission of candidates into undergraduate programmes of the University...
          </p>
    
       </div>
    
       <div class="w-4/5 rounded-xl m-2 shadow-md mb-20 sm:w-2/5">
          <img src="../assets/campus12-200x130.png" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">Campus Life</p>
          <p class="text-left text-md pb-5  p-2">
             UNN Campuse Life is the official University of Nigeria, Nsukka entertainment Unit created by the University of Nigeria,Nsukka ICT department...
          </p>
    
       </div>
    
       <div class="w-4/5 rounded-xl m-2 shadow-md mb-20 sm:w-2/5">
          <img src="../assets/img9.jpeg" alt="VC" class="w-full  ">
    
          <p class="text-left text-2xl font-bold p-2">About UNN</p>
          <p class="text-left text-md pb-16 p-2">
             To place the University of Nigeria, Nsukka in the forefront of research and the development, innovation, knowledge transfer and human resources
             development in global academics terrain, while promotting the core values...
          </p>
    
       </div>
    
    
    </section>
    
    
    
     
         
     <section>
      <p class="text-2xl ml-10 mb-10 text-green-600 sfont-bold">School Gallary</p>  

      <div class="grid grid-cols-2 gap-1 mb-20">
         <div>
            <img class="h-auto max-w-full rounded-sm" src="../assets/img7.jpeg" alt="">
         </div>
         <div>
            <img class="h-auto max-w-full rounded-sm" src="../assets/img9.jpeg" alt="">
         </div>
         <div>
            <img class="h-auto max-w-full rounded-sm" src="../assets/img8.jpeg" alt="">
         </div>
         <div>
          <img class="h-auto max-w-full rounded-sm" src="../assets/bg7.jpeg" alt="">
         </div>
         <div>
            <img class="h-auto max-w-full rounded-sm" src="../assets/img10.jpeg" alt="">
         </div>
         <div>
            <img class="h-auto max-w-full rounded-sm" src="../assets/img11.jpeg" alt="">
         </div>
     
      </div>

     </section>
     <Footer/>

  </div>
</template>


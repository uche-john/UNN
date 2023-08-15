<template>
  <div class="about">
    <h1>This is an about page</h1>
   <!-- Add Icons using String format -->
<div class="my-10">
  
  <font-awesome-icon icon="fa-brands fa-google-wallet" class="text-2xl text-black hover:text-green-400 px-5" />
  <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl text-black hover:text-green-400 px-5" />
   <font-awesome-icon icon="fa-solid fa-user-secret" class="text-2xl text-black hover:text-green-400 px-5"  />
   <font-awesome-icon icon="fa-brands fa-x-twitter" class="text-2xl text-black hover:text-green-400 px-5" />

   
</div>
  </div>
</template>

<!-- <template>
  <div class="slideshow-container">
    <div class="slide">
      <img :src="currentImage" :alt="currentImageAlt">
    </div>
    <button class="prev-button" @click="prevSlide">&#10094;</button>
    <button class="next-button" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentImageAlt() {
      return `Image ${this.currentIndex + 1}`;
    }
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
  }
};
</script>

<style>
/* Styles go here */
</style> -->


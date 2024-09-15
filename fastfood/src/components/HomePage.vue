<template>
  <ion-page>
    <ion-content>
      <div class="container mt-3 custom-container">
        <img src="../assets/logo2.png" class="home-logo" alt="logo2">
        <div>
          <h6>Anneoyong, Chou!</h6>
          <h1>What do you want to eat?</h1>
        </div>
      </div>

        <!--search bar section-->
      <ion-item class="search-container container mt-3">
        <ion-icon :icon="search" slot:start class="search-icon"></ion-icon>
        <ion-input placeholder="try our new Steak Fries Vegies"></ion-input>
      </ion-item>

      <!--swiper slide section 1-->
      <div class="container mt-2 d-flex justify-content-between align-items-center">
      <h5 class="fw-bold mb-2">Special Offers!</h5>
      <h6 class="fw-bold mb-2.5 text-danger d-flex justify-content-between align-items-start">View All<ion-icon size="medium" :icon="chevronForward"></ion-icon></h6>
      </div>
      <div class="my-swiper container">
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slidesPerView="1.2"
          :space-between="0"
          :navigation="false"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
        >
          <swiper-slide >
            <div class="slides">
            <img
              src="../assets/special-slide2.jpg"
              alt="logo"
              class="img-slides"
            />
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides">
            <img
              src="../assets/special-slide3.jpg"
              alt="logo"
              class="img-slides"
            />
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides">
            <img
              src="../assets/special-slide1.jpg"
              alt="logo"
              class="img-slides"
            />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!--swiper slide section 2-->
      <div class="container mt-2 d-flex justify-content-between align-items-center">
      <h5 class="fw-bold mb-2">Category</h5>
      </div>
      <div class="my-swiper container">
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slidesPerView="1.8"
          :space-between="0"
          :navigation="false"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
        >
          <swiper-slide >
            <div class="slides2">
            <img
              src="../assets/category-slide1.jpeg"
              alt="chicken"
              class="img-slides2"
            />
            <div class="overlay">
                <div class="text-overlay">Chicken</div>
                <div class="text-overlay2">9 Recipes</div>
            </div>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
            <img
              src="../assets/category-slide2.jpg"
              alt="seafoods"
              class="img-slides2"
            />
            <div class="overlay">
                <div class="text-overlay">Seafoods</div>
                <div class="text-overlay2">6 Recipes</div>
            </div>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
            <img
              src="../assets/category-slide3.jpg"
              alt="vegies"
              class="img-slides2"
            />
            <div class="overlay">
                <div class="text-overlay">Vegies</div>
                <div class="text-overlay2">5 Recipes</div>
            </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!--whats new section-->
      <div class="container mt-4">
        <h5 class="fw-bold mb-2">What's New?</h5>
        <img src="../assets/whatsnew2-img.jpg" class="new-menu" alt="newmenu">
      </div>

      <!--Most popular menu section-->
      <div class="container mb-5">
        <h5 class="fw-bold mb-2">Most Popular</h5>
        <div class="custom-popular-wrapper">
        <div class="popular-menu-wrapper">
            <img src="../assets/popular-menu2.png" alt="burger">
            <div class="container">
                <h6 class="fw-bold custom-popular-title mb-1">Steak Fries Vegies</h6>
                <p>Salad</p>
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <h5 class="custom-h5 text-danger">P 175</h5>
                   <div class="rating">
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                   </div>
                </div>
            </div>
        </div>
        <div class="popular-menu-wrapper">
            <img src="../assets/popular-menu3.png" alt="burger">
            <div class="container">
                <h6 class="fw-bold custom-popular-title mb-1">Chicken Salad</h6>
                <p>Chicken</p>
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <h5 class="custom-h5 text-danger">P 125</h5>
                   <div>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                   </div>
                </div>
            </div>
        </div>
        </div>

        <!--another set for popular-->
        <div class="mt-2 custom-popular-wrapper">
        <div class="popular-menu-wrapper">
            <img src="../assets/popular-menu5.png" alt="burger">
            <div class="container">
                <h6 class="fw-bold custom-popular-title mb-1">Sorvetes Primavera</h6>
                <p>Dessert</p>
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <h5 class="custom-h5 text-danger">P 175</h5>
                   <div class="rating">
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                   </div>
                </div>
            </div>
        </div>
        <div class="popular-menu-wrapper">
            <img src="../assets/popular-menu1.png" alt="burger">
            <div class="container">
                <h6 class="fw-bold custom-popular-title">Burger</h6>
                <p>Bread</p>
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <h5 class="custom-h5 text-danger">P 105</h5>
                   <div>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                   </div>
                </div>
            </div>
        </div>
        </div>
      </div><br>
       <!-- Fixed Button -->
      <ion-button class="fixed-button" @click="gotoOrder">Order Now!</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonIcon, IonItem, IonButton, IonInput, IonContent, IonPage } from '@ionic/vue';
import { search, chevronForward, star, starOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper'; 
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

const router = useRouter();
const store = useStore();

const gotoOrder = () =>{
  router.push('/ordernow')
  store.dispatch('toggleOrder');
}

onMounted(() => {
  store.dispatch('closeOrder');
});
</script>

<style scoped>
.home-logo {
  width: 100px;
  height: 100px;
}
.fixed-button {
  position: fixed;
  bottom: 0px; 
  right: 20px; 
  z-index: 1000; 
  --background: rgb(221, 39, 39); 
  color: white;
  width: 45%;
  height: 50px;
  --border-radius: 40px;
}
.star{
  color: gold;
}
.custom-h5{
  margin: 0;
}
.custom-popular-wrapper{
    display: flex;
    justify-content: space-between;
}
.popular-menu-wrapper{
    padding: 10px;
    background-color: #ebe8e8;
    width: 49%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.custom-popular-title{
    margin-top: 0;
}
.new-menu{
    width: 100%;
    height: 230px;
    border-radius: 25px;
    border: 1px solid black;
    margin-bottom: 20px;
}
.slides{
    width: 90%;
    background-color: #ccc;
    height: 150px;
    border: 1px solid black;
    border-radius: 20px;
}
.img-slides{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid black;
}
.slides2 {
  position: relative;
  width: 95%;
  background-color: #ccc;
  height: 250px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden; /* Ensure the overlay stays within the border-radius */
}
.img-slides2 {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover; /* Ensure the image covers the container */
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay with 50% opacity */
  border-radius: 20px;
  display: flex;
  align-items: flex-start; 
  justify-content: flex-end;
  flex-direction: column;
  padding: 10px; 
  box-sizing: border-box; 
}
.text-overlay {
  color: white; 
  font-size: 1.2rem; 
  font-weight: bold;
}
.text-overlay2 {
  color: white; 
  font-size: 1rem; 
}
.custom-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

h1 {
  font-weight: bolder;
  margin-top: 0;
  letter-spacing: 1.5px;
}

h6 {
  margin-bottom: 0;
}

.search-container {
  --padding-start: 0;
  border-radius: 22px;
  border: 1px solid #ccc;
  background: hsl(0, 0%, 97%);
  width: 90%;
  height: auto;
}

.search-icon {
  color: red;
  margin-right: 0px;
  padding: 20px;
  background-color: #f7f7f7;
}
ion-input {
  --padding-start: 0;
  background-color: #f7f7f7;
}
ion-item{
    --background: #f7f7f7;
}
</style>

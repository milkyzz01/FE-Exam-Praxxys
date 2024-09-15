<template>
<ion-page>
   <ion-content>
     <div class="container">
        <!--search bar section-->
      <ion-item class="search-container  mt-1">
        <ion-icon :icon="search" size="large" slot:start class="search-icon"></ion-icon>
        <ion-input placeholder="try our new Beef Bibimbaw!"></ion-input>
        <ion-icon :icon="options" size="large" slot:end class="search-icon"></ion-icon>
      </ion-item>

      <!--menu swiper-->
      <div class="my-swiper mt-3">
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slidesPerView="4.3"
          :space-between="0"
          :navigation="false"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
        >
          <swiper-slide >
            <div class="slides2">
              <h6>All</h6>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
               <h6>Breakfast</h6>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
              <h6>Chicken</h6>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
              <h6>Seafood</h6>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="slides2">
              <h6>Vegies</h6>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="custom-popular-wrapper mt-3">
        <div class="popular-menu-wrapper" v-for="menu in menus" :key="menu.imgID" @click="gotoMakeOrder(menu.imgID, menu.imgPath, menu.imgName, menu.price)">
            <img :src="getImageSrc(menu.imgPath)" :alt="menu.imgName">
            <!--menu description-->
            <div class="container mt-3">
                <h6 class="fw-bold custom-popular-title mb-1">{{ menu.imgName }}</h6>
                <p>Salad</p>
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <h5 class="custom-h5 text-danger">P {{ menu.price }}</h5>
                   <div class="rating mt-2">
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="star" class="star checked"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
                   </div>
                </div>
            </div>
        </div>
      </div>
    <!--end div contaoiner-->
     </div>
   </ion-content>
</ion-page>
</template>

<script setup>
import { IonButtons, IonButton, IonIcon, IonItem, IonLabel, IonList, IonContent, IonInput, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, computed, onMounted } from 'vue';
import { search, filter, menu, options, chevronForward, star, starOutline } from 'ionicons/icons';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper'; 
import axios from 'axios';
import { useRouter } from 'vue-router';

//variables
const store = useStore();
// act as storage
const menus = ref([{
            "imgID": 1,
            "imgPath": "popular-menu2.png",
            "imgName": "Steak Fries Vegies",
            "price": 175
        },
        {
            "imgID": 2,
            "imgPath": "popular-menu3.png",
            "imgName": "Chicken Salad",
            "price": 165
        },
        {
            "imgID": 3,
            "imgPath": "popular-menu5.png",
            "imgName": "Sorvetes Primavera",
            "price": 185
        },
        {
            "imgID": 4,
            "imgPath": "popular-menu1.png",
            "imgName": "Burger",
            "price": 195
        },
        {
            "imgID": 5,
            "imgPath": "popular-menu7.png",
            "imgName": "Fried Chicken",
            "price": 215
        },
        {
            "imgID": 6,
            "imgPath": "popular-menu8.png",
            "imgName": "Barbeque",
            "price": 225
        },
        {
            "imgID": 7,
            "imgPath": "popular-menu9.png",
            "imgName": "Sisig",
            "price": 235
        },
        {
            "imgID": 8,
            "imgPath": "popular-menu10.png",
            "imgName": "Chicken Adobo",
            "price": 245
        }]);

const router = useRouter();


// Function to get the image source
const getImageSrc = (imgPath) => {
  try {
    return new URL(`../assets/${imgPath}`, import.meta.url).href;
  } catch (error) {
    console.error('Error loading image:', error);
  }
};
//function to make order
const gotoMakeOrder = (id, path, name, price) =>{
    router.push({ name: 'MakeOrder', params: { id }, query: { path, name, price } });
};

onMounted(() => {
  store.dispatch('toggleOrder');
});

</script>

<style scoped>
.custom-popular-title{
    margin-top: 0;
    font-size: 15px;
}
.custom-rating{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.custom-h5{
    font-size: 15px;
}
.popular-menu-wrapper{
    background-color: rgb(241, 239, 239);
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
}
.custom-popular-wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.star{
    color: gold;
}
.slides2{
    background-color: #d8d0d0;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 2px;
    padding-top: 1px;
    border-radius: 20px;
    text-align: center;
    color: black;
    width: 90%;
    height: auto;
    font-size: auto;
}
h6{
    font-size: 3vw;
}
.search-container {
  --padding-start: 0;
  border-radius: 22px;
  border: 1px solid #ccc;
  background: hsl(0, 0%, 97%);
  width: 100%;
  height: 60px;
  display: flex;
}
ion-item{
    --background: #f7f7f7;
}
ion-input {
  --padding-start: 0;
  background-color: #f7f7f7;
}
.search-icon {
  color: red;
  margin-right: 0px;
  padding: 20px;
  background-color: #f7f7f7;
}
</style>
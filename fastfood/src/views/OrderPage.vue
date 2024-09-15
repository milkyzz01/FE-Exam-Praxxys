<template>
<ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="d-flex align-items-center justify-content-start">
        <ion-icon :icon="chevronBack" class="mt-1 custom-back" size="medium" @click="goBack"></ion-icon>
        <div class="d-flex align-items-center justify-content-between custom-nav">
        <h5 class="fw-bold">Meat</h5>
        <ion-icon :icon="folder" size="small" class="mt-1 custom-nav-icon"></ion-icon>
        </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <!--content section-->
    <ion-content>
        <div class="container">
            <!--menu img section-->
            <div class="img-menu-wrapper">
                <img :src="getImageSrc(imgPath)" class="custom-img-menu" :alt="imgName">
                <ion-icon :icon="heartOutline" size="small" class="mt-1 custom-icon-img-menu"></ion-icon>
            </div>
            <!--menu name section-->
            <h6 class="fw-bold mt-3">{{ imgName }}</h6>
            <!--menu rating section-->
            <div class="rating mt-3">
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="star" class="star"></ion-icon>
                     <ion-icon :icon="starOutline" class="star"></ion-icon>
            </div>
            <p class="mt-2 custom-paragraph">
                Le coq au vin est un plat classique de la cuisine 
                française qui marie des morceaux de poulet braisés 
                avec du vin rouge, des champignons, des oignons et du lard. 
                Ce ragoût savoureux, cuit lentement.
            </p>
            <!--price quantity section-->
            <div class="d-flex align-items-center justify-content-between mt-1">
            <h6 class="price">P {{ quantityPrice }}</h6>
            <!-- range quantity section-->
            <ion-item class="quantity-control mt-1">
              <ion-icon :icon="remove" size="small" @click="decrementQuantity" class="custom-quantity"></ion-icon>
              <ion-label class="quantity-label">{{ quantity }}</ion-label>
              <ion-icon :icon="add" size="small" @click="incrementQuantity" class="custom-quantity"></ion-icon>
            </ion-item>
            </div>
            <!--Beverages section-->
            <h5 class="fw-bold">Beverages</h5>
            <ion-item class="select-container">
              <ion-select label="Choose Beverages" class="select-input" value="Coke" label-placement="stacked">
                <ion-select-option value="Coke">Coke</ion-select-option>
                <ion-select-option value="Sprite">Sprite</ion-select-option>
                <ion-select-option value="Royal">Royal</ion-select-option>
              </ion-select>
            </ion-item>
            <div class="d-flex justify-content-around align-items-center mt-3">
                <div class="custom-drink-container">
                    <h5 class="custom-drink-sizes">Regular</h5>
                </div>
                <div class="custom-drink-container">
                    <h5 class="custom-drink-sizes">Large</h5>
                </div>
                <div class="custom-drink-container">
                    <h5 class="custom-drink-sizes">X-Large</h5>
                </div>
            </div>
             <!--add ons section-->
             <h5 class="fw-bold">Add-Ons</h5>
             <div class="container add-ons-container">
                <div class="d-flex justify-content-start align-items-center gap-20">
                <img src="../assets/tomato-sauce.png" class="tomato-img" alt="tomato">
                <div class="custom-addons-desc">
                    <h5 class="fw-bold custom-addons-title">Tomato Sauce</h5>
                    <p class="custom-sauce">Sauce</p>
                    <h5 class="custom-price">P {{ tomatoPriceQuantity }}</h5>
                </div>
                </div>
                <div class="custom-quantity-checkbox">
                    <ion-checkbox class="custom-checkbox" v-model="isTomatoChecked"></ion-checkbox>
                    <ion-item class="quantity-control2 mt-1">
                      <ion-icon :icon="remove" size="small" @click="decrementQuantityTomato" class="custom-quantity2"></ion-icon>
                      <ion-label class="quantity-label">{{ quantityTomato }}</ion-label>
                      <ion-icon :icon="add" size="small" @click="incrementQuantityTomato" class="custom-quantity2"></ion-icon>
                    </ion-item>
                </div>
             </div>
             <!--add ons 2-->
             <div class="container add-ons-container mb-5">
                <div class="d-flex justify-content-start align-items-center gap-20">
                <img src="../assets/rice.png" class="tomato-img" alt="tomato">
                <div class="custom-addons-desc">
                    <h5 class="fw-bold custom-addons-title">White Rice</h5>
                    <p class="custom-sauce">Rice</p>
                    <h5 class="custom-price">P {{ ricePriceQuantity }}</h5>
                </div>
                </div>
                <div class="custom-quantity-checkbox">
                    <ion-checkbox class="custom-checkbox" v-model="isRiceChecked"></ion-checkbox>
                    <ion-item class="quantity-control2 mt-1">
                      <ion-icon :icon="remove" size="small" @click="decrementQuantityRice" class="custom-quantity2"></ion-icon>
                      <ion-label class="quantity-label">{{ quantityRice }}</ion-label>
                      <ion-icon :icon="add" size="small" @click="incrementQuantityRice" class="custom-quantity2"></ion-icon>
                    </ion-item>
                </div>
             </div><br>
             <!--footer button-->
             <ion-button class="custom-footer-button container" @click="showSuccessModal">Add to Bag</ion-button>
    </div>
    </ion-content>
    <SuccessModal :visible="isModalVisible" :total="total" :quantityTomato="quantityTomato" :quantityRice="quantityRice" :price="quantityPrice" :imgName="imgName" :imgPath="imgPath" @update="isModalVisible = $event" />
</ion-page>
</template>

<script setup>
import { IonButtons, IonSelect, IonCheckbox, IonSelectOption, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { diamond, cart, add, remove, folder, star, starOutline, personCircle, heartOutline, location, time, chevronBack, home, helpCircle, notifications, pizza, storefront } from 'ionicons/icons';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import SuccessModal from '../composables/SuccessModal.vue';

//variables used
const route = useRoute();
const router = useRouter();
const imgId = route.params.id;
const imgPath = route.query.path;
const imgName = route.query.name;
const price = route.query.price;
const fetchResponse = ref([]);
const quantity = ref(1); 
const quantityTomato = ref(1); 
const quantityRice = ref(1); 
const isModalVisible = ref(false);
const tomatoPrice = ref(49);
const ricePrice = ref(25);
//check to see if tomato or rice is checked
const isTomatoChecked = ref(false); 
const isRiceChecked = ref(false);   
// change the value realtime using computed properties
const quantityPrice = computed(() => {
  return price * quantity.value;
});
const tomatoPriceQuantity = computed(() => {
  return tomatoPrice.value * quantityTomato.value;
});
const ricePriceQuantity = computed(() => {
  return ricePrice.value * quantityRice.value;
});
const total = computed(() => {
  let totalPrice = quantityPrice.value;
  //add if they are true
  if (isTomatoChecked.value) {
    totalPrice += tomatoPriceQuantity.value;
  }
  if (isRiceChecked.value) {
    totalPrice += ricePriceQuantity.value;
  }
  return totalPrice;
});

// function to toggle modal
const showSuccessModal = () => {
  isModalVisible.value = true;
};
//function on quantity range 1
const incrementQuantity = () => {
  quantity.value += 1;
};
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};
//function on quantity range 2
const incrementQuantityTomato = () => {
  quantityTomato.value += 1;
};
const decrementQuantityTomato = () => {
  if (quantityTomato.value > 1) {
    quantityTomato.value -= 1;
  }
};
//function on quantity range 3
const incrementQuantityRice = () => {
  quantityRice.value += 1;
};
const decrementQuantityRice = () => {
  if (quantityRice.value > 1) {
    quantityRice.value -= 1;
  }
};
// Function to get the image source
const getImageSrc = (imgPath) => {
  try {
    return new URL(`../assets/${imgPath}`, import.meta.url).href;
  } catch (error) {
    console.error('Error loading image:', error);
  }
};
//Function to go back to order menu
const goBack = () =>{
    router.push('/ordernow')
    console.log(total.value);
}

onMounted(() =>{
    console.log(route.query)
    
});
</script>

<style scoped>
.custom-footer-button{
    position: fixed;
    bottom: 0; 
    right: 0; 
    left: 0;
    z-index: 2; 
    --background: rgb(221, 39, 39); 
    color: white;
    width: 100%;
    height: 50px;
    --border-radius: 40px;
}
.custom-checkbox{
    margin-right: 17px;
}
.custom-quantity-checkbox{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
}
.custom-price{
    font-size: 15px;
    color: red;
    margin-top: 0;
}
.custom-sauce{
    font-size: 12px;
    letter-spacing: 1px;
}
.custom-addons-title{
    font-size: 14px;
    margin-bottom: 0;
    letter-spacing: 1px;
}
.gap-20{
    gap: 10px;
}
.add-ons-container{
    background-color: #ebe7e7;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 25px;
}
.tomato-img{
    width: 35%;
}
.custom-drink-container{
    border: 1px solid gray;
    border-radius: 15px;
    width: 30%;
    text-align: center;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.custom-drink-sizes{
    font-size: 13px;
    font-weight: bold;
}
.select-input{
    background-color: hsl(0, 0%, 97%);
}
.select-container{
  --padding-start: 20px;
  border-radius: 22px;
  border: 1px solid #ccc;
  --background: hsl(0, 0%, 97%);
  width: 100%;
  height: 60px;
  display: flex;
}
.price{
    color: red;
    font-weight: bold;font-size: 18px;
}
.quantity-control {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
}
.quantity-control2 {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  background-color: #ccc;
  --background: #ebe7e7;
  border-top: 0;
}
.custom-quantity {
  color: red;
  background-color: #ccc;
  padding: 5px; /* Adjust padding as needed */
  border-radius: 20px;
}
.custom-quantity2 {
  color: red;
  background-color: #ccc;
  padding: 5px; /* Adjust padding as needed */
  border-radius: 20px;
}
.quantity-label {
  font-size: 14px; /* Adjust size as needed */
  text-align: center;
  margin: 0 10px; /* Adjust spacing between icons and label */
}
.custom-paragraph{
    color: gray;
}
.star{
    color: gold;
    gap: 10px;
}
.img-menu-wrapper{
    background-color: rgb(233, 229, 229);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    border-radius: 25px;
    position: relative;
}
.custom-icon-img-menu{
    position: absolute;
    bottom: -10px; 
    right: 20px;  
    color: red;   
    background-color: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 4px rgb(112, 110, 110);
}
.custom-img-menu{
    width: 65%;
    height: 80%;
}
ion-header {
  --background-color: white;
  --border-width: 0; 
  box-shadow: none; 
}
.custom-back{
    background-color: rgb(214, 208, 208);
    padding: 5px;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 15px;
    margin-left: 10px;
}
.custom-nav-icon{
    margin-right: 10px;
    color: red;
}
.custom-nav{
    width: 100%;
}
</style>
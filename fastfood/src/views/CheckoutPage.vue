<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="d-flex align-items-center justify-content-start">
          <ion-icon :icon="chevronBack" class="mt-1 custom-back" size="medium" @click="goBack"></ion-icon>
          <div class="d-flex align-items-center justify-content-between custom-nav">
            <h5 class="fw-bold">Order Summary</h5>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">
        <div class="content-wrapper">
          <div class="d-flex justify-content-between align-items-center">
            <div 
              class="main-content" 
              :class="{ 'slide-left': isSliding }"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @mousedown="handleTouchStart"
              @mousemove="handleTouchMove"
              @mouseup="handleTouchEnd"
            >
            <div class="container custom-details">
              <h5 class="custom-name">Chou Tzuyu</h5>
              <p class="text-content">+63 912 345 6789</p>
              <p class="text-content">chou.tzu-yu@email.com</p>
            </div>
            </div>
            <ion-icon :icon="ellipsisVertical" class="ellipsis-icon" size="large" v-if="!isSliding" @click="showDelete"></ion-icon>
          </div>
          <div class="delete-content" :class="{ 'show': isSliding }">
            <ion-icon :icon="trash" size="medium" @click="deleteItem"></ion-icon>
          </div>
          <div class="edit-content" :class="{ 'show': isSliding }">
            <ion-icon :icon="pencil" size="medium" @click="editItem"></ion-icon>
          </div>
        </div>
        <!--another section-->
          <div class="content-wrapper mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="main-content">
            <div class="container custom-details">
              <h5 class="custom-name">My Home Address</h5>
              <p class="text-content">No. 21 St. Agustin Street, Brgy. De Jose</p>
              <p class="text-content">Delgado City 2234 Philippines</p>
            </div>
            </div>
            <ion-icon :icon="ellipsisVertical" class="ellipsis-icon" size="large"></ion-icon>
          </div>
        </div>
        <!--another 3rd section-->
          <div class="content-wrapper mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="main-content">
            <div class="container custom-details">
              <h5 class="custom-name">Work/Office</h5>
              <p class="text-content">3rd flr Anyeong Bldg. Seareal St. Joaqin</p>
              <p class="text-content">City 3456 Philippines</p>
            </div>
            </div>
            <ion-icon :icon="ellipsisVertical" class="ellipsis-icon" size="large"></ion-icon>
          </div>
        </div>

        <!--Order section-->
        <h5 class="mt-4 fw-bold">Orders</h5>
         <!--another 3rd section-->
          <div class="content-wrapper mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="main-content">
            <div class="container custom-details2 mb-1">
              <img :src="getImageSrc(imgPath)" class="order-img" alt="steak">
              <div class="order-summary">
                <h5 class="fw-bold custom-steak">{{ imgName }}</h5>
                <p class="add-ons-custom">{{ quantityTomato }}x Tomato Sauce</p>
                <p class="add-ons-custom">1x Regular Coke</p>
                <p class="add-ons-custom">{{ quantityRice }}x White Rice</p>
              </div>
            </div>
            <div class="d-flex justify-content-center"><hr></div>
            <div class="container d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bolder text-danger custom-h6">P {{ SubTotal }}</h6>
              <ion-item class="quantity-control2">
                      <ion-icon :icon="remove" size="small" @click="decrementQuantityRice" class="custom-quantity2"></ion-icon>
                      <ion-label class="quantity-label">{{ quantity }}</ion-label>
                      <ion-icon :icon="add" size="small" @click="incrementQuantityRice" class="custom-quantity2"></ion-icon>
              </ion-item>
            </div>
            </div>
            <ion-icon :icon="ellipsisVertical" class="ellipsis-icon" size="large"></ion-icon>
          </div>
        </div>

        <!--Payment option section-->
        <h5 class="fw-bold mt-4">Payment Option</h5>
        <!--COD-->
        <div class="container custom-payment-container mb-2">
          <div class="d-flex align-items-center justify-content-between container">
            <h5 class="fw-bold custom-payment-title">Cash on Delivery</h5>
            <ion-checkbox class="custom-checkbox"></ion-checkbox>
          </div>
          <p class="container custom-payment-desc">Pay when you received the order</p>
        </div>
        <!--Loyalty points-->
        <div class="container custom-payment-container mb-2">
          <div class="d-flex align-items-center justify-content-between container">
            <h5 class="fw-bold custom-payment-title">Loyalty Points<span>(0 points)</span></h5>
            <ion-checkbox class="custom-checkbox"></ion-checkbox>
          </div>
          <p class="container custom-payment-desc">Pay using your earned loyalty points</p>
        </div>
         <!--paypal-->
        <div class="container custom-payment-container mb-2">
          <div class="d-flex align-items-center justify-content-between container">
            <img src="../assets/paypal.png" class="payment-img" alt="paypal">
            <ion-checkbox class="custom-checkbox"></ion-checkbox>
          </div>
          <p class="container custom-payment-desc">A new tab will open to access your account</p>
        </div>
        <!--paynamics-->
        <div class="container custom-payment-container mb-2">
          <div class="d-flex align-items-center justify-content-between container">
            <img src="../assets/paynamics.png" class="payment-img" alt="paypal">
            <ion-checkbox class="custom-checkbox"></ion-checkbox>
          </div>
          <p class="container custom-payment-desc">Choose paynamics services available from you</p>
        </div>

        <!--Subtotal-->
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="fw-bold custom-subtotal">Subtotal</h5>
          <h5 class="fw-bold">P {{ SubTotal }}</h5>
        </div>
        <!--Delivery charge-->
        <div class="d-flex justify-content-between align-items-center custom-margin">
          <h5 class="fw-bold custom-charge">Delivery Charge</h5>
          <h5 class="fw-bold">P {{ chargePrice }}</h5>
        </div>

        <!--change -->
        <ion-item class="change-item mb-3">
           <ion-input label="Change for" label-placement="stacked" placeholder="eg.1010"></ion-input>
        </ion-item>
      <!--end div-->
      </div>
    </ion-content>
    <!--Footer-->
        <ion-footer class="custom-footer">
        <ion-toolbar>
            <div class="container d-flex justify-content-between align-items-center">
              <div>
                <p class="custom-grandtotal">Grand Total</p>
                <h5 class="custom-grandprice">P {{ GrandTotal }}</h5>
              </div>
              <ion-button class="custom-placeorder" @click="placeOrder">Place Order</ion-button>
            </div>
        </ion-toolbar>
         </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ellipsisVertical, trash, pencil, chevronBack, add, remove } from 'ionicons/icons';
import { IonButtons, IonSelect, IonFooter, IonCheckbox, IonSelectOption, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

const isSliding = ref(false);
const startX = ref(0);
const currentX = ref(0);
const threshold = 50; // Amount to drag before showing delete content
const quantity = ref(1)
const router = useRouter();
const route = useRoute();
const chargePrice = ref(59);
const quantityTomato = computed(() => {
  return route.query.quantityTomato; 
});
const quantityRice = computed(() => {
  return route.query.quantityRice; 
});
//handle the route queries
const price = computed(() => {
  return route.query.price; 
});
const imgName = computed(() => {
  return route.query.imgName; 
});
const imgPath = computed(() => {
  return route.query.imgPath; 
});
const total = computed(() => {
  const queryTotal = route.query.total;
  return Number(queryTotal); 
});
// grand total computed
const SubTotal = computed(() => {
  return total.value * quantity.value;
});
const GrandTotal = computed(() => {
  return SubTotal.value + chargePrice.value;
});

//functions
// increment and dec quantity
//function on quantity range 3
const incrementQuantityRice = () => {
  quantity.value += 1;
};
const decrementQuantityRice = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};
const showDelete = () => {
  isSliding.value = true;
};

const hideDelete = () => {
  isSliding.value = false;
};

const deleteItem = () => {
  // Your delete item logic here
  console.log('Item deleted');
};

const editItem = () => {
  // Your edit item logic here
  console.log('Item edited');
};

const goBack = () => {
  router.go(-1);
};

const handleTouchStart = (event) => {
  startX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  currentX.value = event.touches[0].clientX;
  const dx = currentX.value - startX.value;

  // Apply drag transformation
  if (dx < 0) {
    document.querySelector('.main-content').style.transform = `translateX(${Math.max(dx, -80)}%)`;
    document.querySelector('.delete-content').style.transform = `translateX(${Math.min(-dx, 0)}%)`;
    document.querySelector('.edit-content').style.transform = `translateX(${Math.min(-dx, 0)}%)`;
  }
};

const handleTouchEnd = () => {
  const dx = currentX.value - startX.value;
  if (dx < -threshold) {
    showDelete();
  } else {
    hideDelete();
  }
  document.querySelector('.main-content').style.transform = '';
  document.querySelector('.delete-content').style.transform = '';
  document.querySelector('.edit-content').style.transform = '';
};

// function to place order
const placeOrder = () => {
  router.push('/received');
  
};
// Function to get the image source
const getImageSrc = (imgPath) => {
  try {
    return new URL(`../assets/${imgPath}`, import.meta.url).href;
  } catch (error) {
    console.error('Error loading image:', error);
  }
};
</script>


<style scoped>
.custom-placeorder{
  --background: rgb(219, 41, 41);
  --border-radius: 20px;
  width: 40%;
}
.custom-grandtotal{
  margin: 0;
  font-size: 12px;
}
.custom-grandprice{
  margin: 0;
  font-weight: bold;
}
.change-item{
  border-radius: 20px;
  border: 1px solid gray;
  --background: rgb(241, 233, 233);
}
.custom-margin{
  margin-top: -15px;
  margin-bottom: 10px;
}
.custom-charge{
  font-size: 16px;
}
.custom-subtotal{
  font-size: 15px;
}
.payment-img{
  width: 35%;
  padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 55px;
}
span{
  color: red;
  margin-left: 5px;
}
.custom-payment-desc{
  font-size: 14px;
  margin-top: 0;
  color: rgb(117, 110, 110);
  margin-bottom: 10px;
}
.custom-payment-title{
  font-size: 16px;
  margin-bottom: 10px;
}
.custom-payment-container{
  background-color: #e9e3e3;
  padding: 5px;
  border-radius: 15px;
}
.custom-h6{
  margin-left: 10px;
}
.quantity-label {
  font-size: 14px; /* Adjust size as needed */
  text-align: center;
  margin: 0; /* Adjust spacing between icons and label */
}
.custom-quantity2 {
  color: red;
  background-color: rgb(214, 208, 208);
  padding: 5px; /* Adjust padding as needed */
  border-radius: 20px;
}
.quantity-control2 {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  background-color: rgb(214, 208, 208);
  --background: #e9e3e3;
  border-top: 0;
}
hr {
  border: 0px solid black; /* Light grey line */
  background-color: black;
  width: 90%;
}
.add-ons-custom{
  font-size: 12px;
  margin: 0;
}
.custom-steak{
  font-size: 14px;
}
.order-img{
  width: 25%;
  height: 30%;
}
.custom-details2{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}
.custom-details{
  padding: 10px;
}
.custom-name{
  margin-top: 0;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 15px;
}
ion-header {
  --background-color: white;
  --border-width: 0;
  box-shadow: none;
}

.custom-back {
  background-color: rgb(214, 208, 208);
  padding: 5px;
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 15px;
  margin-left: 10px;
}

.custom-nav {
  width: 100%;
}

.content-wrapper {
  position: relative;
  overflow: hidden;
}

.main-content {
  background: #e9e3e3;
  padding: 0px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 100%;
}

.text-content {
  margin: 0;
  color: gray;
  font-size: 13px;
}

.ellipsis-icon {
  cursor: pointer;
  color: rgb(226, 226, 43);
  
}

.delete-content,
.edit-content {
  position: absolute;
  right: 0;
  top: 0;
  background: rgb(199, 137, 137); /* Change this to suit the design */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateX(500px);
  transition: transform 0.4s ease;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.edit-content {
  background: rgb(253, 230, 155); /* Different color for the edit icon */
  margin-right: 40px; /* Adjust as needed for spacing */
  height: 100%;
}

.delete-content.show,
.edit-content.show {
  transform: translateX(0);
}

.main-content.slide-left {
  transform: translateX(-25%);
}

.delete-icon,
.edit-icon {
  cursor: pointer;
  
}
</style>


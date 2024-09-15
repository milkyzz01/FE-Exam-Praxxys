<template>
  <ion-page>
    <!--Start of Page-->
    <!--Side menu when clicked-->
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <!--side menu header-->
        <ion-toolbar>
          <div class="sidemenu-toolbar">
            <div>
              <img src="../assets/profile.jpg" class="profile-sidemenu" alt="profile">
            </div>
            <ion-menu-toggle>
            <div class="custom-mid-nav" @click="goToLoyalty">
              <ion-icon :icon="diamond" size="small" class="custom-icon"></ion-icon>
              <h6>0 Points</h6>
              <ion-icon :icon="chevronForward" size="small" class="custom-icon-arrow"></ion-icon>
            </div>
            </ion-menu-toggle>
          </div>
          <ion-title class="sidemenu-title">Chou Tzuyu</ion-title>
          <p class="sidemenu-number">+63 912 345 6789</p>
        </ion-toolbar>
      </ion-header>
      <!--sidemenu content-->
      <ion-content>
        <ion-list lines="none" inset="true" class="custom-list">
          <ion-item>
            <ion-menu-toggle>
            <ion-label @click="goToHomeOrder">
              <ion-icon :icon="home" size="small" class="custom-sidemenu-icon-active"></ion-icon>
              Home
            </ion-label>
            </ion-menu-toggle>
          </ion-item>
          <ion-item>
            <ion-menu-toggle>
            <ion-label @click="goToOrderNow">
              <ion-icon :icon="pizza" size="small" class="custom-sidemenu-icon-active"></ion-icon>
              Order Now!
            </ion-label>
            </ion-menu-toggle>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="notifications" size="small" class="custom-sidemenu-icon"></ion-icon>
              Notifications
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="storefront" size="small" class="custom-sidemenu-icon"></ion-icon>
              Store Locator
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="helpCircle" size="small" class="custom-sidemenu-icon"></ion-icon>
              FAQ'S
            </ion-label>
          </ion-item>
        </ion-list>
        <!--second list-->
        <ion-list lines="none" inset="true" class="custom-list2">
          <ion-item>
            <ion-label>
              <ion-icon :icon="cart" size="small" class="custom-sidemenu-icon"></ion-icon>
              My Orders
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="personCircle" size="small" class="custom-sidemenu-icon"></ion-icon>
              My Account
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="heart" size="small" class="custom-sidemenu-icon"></ion-icon>
              My Favorites
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="location" size="small" class="custom-sidemenu-icon"></ion-icon>
              Order Tracker
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <ion-icon :icon="time" size="small" class="custom-sidemenu-icon"></ion-icon>
              Order History
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-button class="mb-5">Logout</ion-button>
      </ion-content>
    </ion-menu>

    <ion-header class="custom-header" id="main-content">
      <ion-toolbar class="custom-toolbar-navbar">
        <div class="d-flex align-items-center">
            <!-- Button to toggle side menu aligned to the end -->
          <ion-buttons class="menu-button">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        <div class="toolbar-content" v-if="showNavHome">
          <!-- Rendered when home button -->
          <div class="custom-mid-nav" v-if="showNavHome">
            <ion-icon :icon="diamond" size="small" class="custom-icon"></ion-icon>
            <h6>0 Points</h6>
            <ion-icon :icon="chevronForward" size="small" class="custom-icon-arrow"></ion-icon>
          </div>
        </div>
        <div class="navbar-profile" v-if="showNavHome">
            <img src="../assets/profile.jpg" class="profile" alt="profile">
        </div>
         <!-- Rendered when order button -->
        <div class="toolbar-content-order" v-if="showNavOrder">
            <div class="custom-mid-nav">
            <h5 class="fw-bold">Our Foods</h5>
            </div>
        </div>
        <div class="d-flex align-items-center navbar-profile" v-if="showNavOrder">
            <ion-icon :icon="folder" size="small" class="custom-icon-arrow"></ion-icon>
        </div>
        <!--rendered when loyalty points is true-->
        <h5 v-if="loyaltyPoints" class="fw-bold">Loyalty Points</h5>
        </div>
      </ion-toolbar>
    </ion-header>

    <!-- Content will render the pages -->
    <ion-content class="ion-padding">
      <!-- Router -->
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>


<script setup>
import { ref, computed } from 'vue';
import { IonButtons, IonRouterOutlet, IonMenuToggle, IonButton, IonIcon, IonItem, IonLabel, IonList, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { diamond, cart, folder, personCircle, heart, location, time, chevronForward, home, helpCircle, notifications, pizza, storefront } from 'ionicons/icons';
import OrderNowPage from '../components/OrderNowPage.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const showNavHome = computed(() => store.getters.NavHome);
const showNavOrder = computed(() => store.getters.NavOrder);
const loyaltyPoints = computed(() => store.getters.NavLoyalty);


const goToOrderNow = async () => {
  router.push('/ordernow'); // Navigate to the Order Now page
  store.dispatch('toggleOrder');
}
const goToHomeOrder = async () => {
  router.push('/homeOrder'); // Navigate to the Order Now page
  store.dispatch('closeOrder');
}
const goToLoyalty = async () => {
  router.push('/loyalty'); // Navigate to the Order Now page
  store.dispatch('openLoyalty');
}


</script>

<style scoped>
.custom-mid-nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
}
ion-button {
  --background: rgb(218, 26, 26); 
  color: white; 
  width: 45%;
  height: 40px;
  --border-radius: 15px;
  margin-left: 30px;
}
.custom-sidemenu-icon-active{
    margin-right: 10px;
    color: red;
}
.custom-sidemenu-icon{
    margin-right: 10px;
    color: gray;
}
.custom-list{
    margin-top: -20px;
    margin-bottom: -5px;
}
.custom-list ion-item:last-of-type {
  border-bottom: 1px solid #ccc; /* Add border to the last item */
}
.sidemenu-number{
    font-size: 13px;
    margin-left: 17px;
    color: gray;
}
.sidemenu-toolbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
h6{
    font-weight: bold;
}
.profile-sidemenu{
    border-radius: 50%;
    height: 90px;
    width: 95px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.sidemenu-title{
    font-weight: bolder;
    margin-left: -3px;
    letter-spacing: 1.5px;
}
ion-header {
  --background-color: white;
  --border-width: 0; 
  box-shadow: none; 
}
.custom-icon {
  color: gold; 
}
.custom-icon-arrow{
    color: red; 
}
.custom-toolbar-navbar {
  border-bottom: none; 
  box-shadow: none; 
}
.toolbar-content {
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%;
}
.toolbar-content-order {
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  width: 100%;
}
.navbar-title {
  margin-right: 0px;
  margin-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.2rem; 
  color: black; 
}
.navbar-profile{
  margin-right: 10px;
  margin-left: 0;
  margin-bottom: 0;
  margin-top: 0;
}
.profile{
    border-radius: 40%;
    height: 30px;
    width: 39px;
}
.menu-button {
  display: flex;
  align-items: center;
}
ion-menu-button{
    color: red;
}
</style>
<template>
<ion-page class="custom">
    <ion-content>
    <div class="logo2-wrapper mt-5 container">
      <img src="../assets/logo2.png" class="logo" alt="logo">
        <div class="mt-4 title">
            <h1 class="fw-bold">Bonjour!</h1>
        <div>
            <p>Welcome to all new FastFood mobile app. Kindly Login your account. Thank You</p>
        </div>
        </div>
        <!-- Form Section -->
        <div>
          <ion-input label="Email" label-placement="stacked" placeholder="Enter Email"></ion-input>
          <ion-input label="Password" label-placement="stacked" placeholder="Enter Password"></ion-input>
          <ion-button @click="goToContent">Login</ion-button>
          <div class="text-center">
          <h6>Login as Guest</h6>
          </div>
        </div>
      </div>
    </ion-content>

    <!--footer-->
    <ion-footer class="custom-footer">
    <ion-toolbar>
        <p>Don't have an account yet?<span>Create</span></p>
    </ion-toolbar>
    </ion-footer>
</ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonList, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToContent = () =>{
    router.push('/content')
};

</script>

<style scoped>
* {
  color: black;
}
.custom{
    background-color: white;
    height: 100vh;
}
.logo2-wrapper {
  width: 100vw;
}
p{
    color: #928c8c;
    letter-spacing: 1px; 
}
span{
    color: #ff5722;
}
.logo {
  width: 150px;
  border-radius: 90px;
}
h6{
    color: #ff5722;
    font-weight: bold;
}

.title {
  margin-left: 5px;
}

ion-input {
  border-radius: 12px; 
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  --padding-start: 15px;
  margin-bottom: 20px;
}

ion-button {
  --background: rgb(218, 26, 26); 
  color: white; 
  width: 100%;
  height: 55px;
  --border-radius: 15px;
}

/* styles footer */
.custom-footer {
  --background: #ff5722; 
  border-top: transparent; 
}

ion-toolbar {
  --background: white; 
  text-align: center;
}

</style>

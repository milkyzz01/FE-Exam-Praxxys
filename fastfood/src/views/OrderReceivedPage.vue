<template>
<ion-page>
  <ion-content>
    <div class="container custom-container">
        <img src="../assets/modal-success.png" class="custom-img" alt="success">
        <div class="custom-order-wrapper">
            <h1>Order Received!</h1>
            <p>Your Order <span>No. 19049585</span> has successfully take and
            now being processed. Kindly wait foe our notifications
            regarding your order.</p>
        </div>
    </div>
</ion-content>
  <ion-footer>
    <div class="custom-footer">
    <ion-button class="custom-button">Track Order</ion-button>
    <h5 @click="goHome">Back to Home</h5>
    </div>
  </ion-footer>
</ion-page>
</template>

<style scoped>
.custom-button{
    width: 80%;
    --background: rgb(209, 36, 36);
    --border-radius: 20px;
    height: 50px;
}
.custom-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
ion-footer{
    background: white;
    border-top: 0;
    box-shadow: none;
}
.custom-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
h5{
    color: red;
    margin-top: 10px;
    font-size: 14px;
    margin-bottom: 10px;
}
span{
    color: red;
    font-weight: bold;
    
}
.custom-img{
    width: 500px;
}
.custom-container{
    display: flex;
    flex-direction: column;
    
    margin-top: 50px;
    align-items: center;
}
.custom-order-wrapper{
    text-align: center;
}
h1{
    font-weight: bold;
}
</style>

<script setup>
import { IonButtons, IonSelect, IonCheckbox, IonSelectOption, IonButton, IonIcon, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { diamond, cart, add, remove, folder, star, starOutline, personCircle, heartOutline, location, time, chevronBack, home, helpCircle, notifications, pizza, storefront } from 'ionicons/icons';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();

const goHome = () =>{
    router.push('/homeOrder')
};
</script>
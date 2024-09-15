<template>
    <ion-page>
        <ion-content>
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center custom-gap">
                        <ion-icon :icon="diamond" size="large" class="text-yellow"></ion-icon>
                        <h5 class="fw-bold fs-6">Beginner Tier</h5>
                    </div>
                    <div class="d-flex align-items-center custom-gap">
                        <h5 class="fw-bold fs-6 text-danger">View All</h5>
                        <ion-icon :icon="chevronForward" size="small" class="text-danger"></ion-icon>
                    </div>
                </div>

                <!-- Paragraph -->
                <p class="text-muted custom-p-size mt-2">
                    Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.
                </p>

                <!-- Circle div -->
                <div class="mt-5 custom-circle">
                    <div class="custom-circle-wrapper">
                        <h1>0/165</h1>
                    </div>
                </div>

                <!--Rewards section-->
                <div class="d-flex align-items-center justify-content-between mt-5">
                    <h5 class="mt-0 fw-bold fs-5.5">Rewards</h5>
                    <div class="d-flex align-items-center custom-gap">
                    <h5 class="mt-0 fw-bold fs-6 text-danger">How it Works</h5>
                     <ion-icon :icon="chevronForward" size="small" class="text-danger"></ion-icon>
                     </div>
                </div>

                <div class="d-flex align-items-center justify-content-center custom-gap">
                    <div class="custom-selection">
                        <h6 class="fs-6">All</h6>
                    </div>
                    <div class="custom-selection">
                        <h6 class="fs-6">Beginner</h6>
                    </div>
                    <div class="custom-selection">
                        <h6 class="fs-6">Intermediate</h6>
                    </div>
                    <div class="custom-selection">
                        <h6 class="fs-6">Loyal</h6>
                    </div>
                </div>

                <div class="d-flex justify-content-start align-items-center custom-container custom-gap mt-4">
                    <img src="../assets/popular-menu2.png" class="custom-img" alt="popular">
                    <div>
                        <h5 class="fw-bold fs-6">Steak Fries Veggies</h5>
                        <p class="m-0 fs-6">Meat</p>
                        <div class="d-flex custom-gap align-items-center">
                            <ion-icon :icon="diamond" size="small" class="text-yellow"></ion-icon>
                            <h5 class="text-danger custom-h5 fw-bold">20 Points</h5>
                        </div>
                    </div>
                </div>
                <!-- End div -->
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonButtons, IonButton, IonIcon, IonItem, IonLabel, IonList, IonContent, IonInput, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { diamond, chevronForward } from 'ionicons/icons';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore(); 

onMounted(() => {
    store.dispatch('openLoyalty');
});
</script>

<style scoped>
.custom-h5{
    font-size: 15px;
}
.custom-container{
    background-color: #e7dfdf;
    border-radius: 20px;
    margin-bottom: 20px;
}
.custom-img{
    width: 20%;
    margin-left: 10px;
}
.custom-selection{
    background-color: #e9e2e2;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 2px;
    padding-top: 1px;
    border-radius: 20px;
    text-align: center;
    color: rgb(109, 106, 106);
    width: 100%;
    height: auto;
    font-size: auto;
}
.custom-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto; 
}

.custom-circle-wrapper {
    background-color: white; 
    width: 150px; 
    height: 150px; 
    border-radius: 50%; 
    border: 15px solid rgb(250, 203, 211); 
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.5); 
}

.custom-circle-wrapper h1 {
    margin: 0; 
    color: black; 
    font-size: 24px; 
}

.custom-p-size {
    font-size: 13px;
}

.custom-gap {
    gap: 15px;
}

.text-yellow {
    color: yellow;
}
</style>

<template>
  <ion-page @click="goToLogin">
    <div class="custom">
      <transition 
        name="fade" 
        @before-enter="beforeEnter" 
        @enter="enter" 
        @leave="leave">
        <img v-if="showImage" src="../assets/logo.png" alt="logo">
      </transition>
    </div>
  </ion-page>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { IonPage } from '@ionic/vue';
  import { useRouter } from 'vue-router';

  const showImage = ref(false);
  const router = useRouter();

  onMounted(() => {
    setTimeout(() => {
      showImage.value = true;
    }, 1000); 
  });

  //Click anywhere to go to login page
  const goToLogin = () =>{
    router.push('/login')
  }

  function beforeEnter(el) {
    el.style.opacity = 0;
  }

  function enter(el, done) {
    el.offsetHeight;
    el.style.transition = 'opacity 1s';
    el.style.opacity = 1;
    done();
  }

  function leave(el, done) {
    el.style.transition = 'opacity 1s';
    el.style.opacity = 0;
    done();
  }
</script>

<style scoped>
  .custom {
    background-color: rgb(226, 39, 39);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

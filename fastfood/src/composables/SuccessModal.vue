<template>
 <ion-page>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content container">
      <div><img src="../assets/modal-success.png" class="custom-success" alt="success"></div>
      <h1>Successfully Added!</h1>
      <p class="text-secondary mb-1">What do you want to do now?</p>
      <div class="button-group">
        <button @click="proceedToCheckout">Proceed to Checkout</button>
        <p class="fw-bold text-danger" @click="addMore">Add More</p>
      </div>
    </div>
  </div>
 </ion-page>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  visible: Boolean,
  price: Number,
  total: Number,
  imgPath: String,
  imgName: String,
  quantityTomato: Number,
  quantityRice: Number
});
const router = useRouter();
const emit = defineEmits(['update']);

const proceedToCheckout = () => {
  router.push({
    path: '/checkout',
    query: {
      price: props.price,
      total: props.total,
      imgPath: props.imgPath,
      imgName: props.imgName,
      quantityTomato: props.quantityTomato,
      quantityRice: props.quantityRice
    }
  });
  emit('update', false);
};

const addMore = () => {
  router.push('/ordernow')
  emit('update', false);
};
</script>

<style scoped>
.custom-success{
    width: 60%;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
  display: flex;
}
.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;
}

button {
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: rgb(214, 28, 28);
  margin: 0;
}


</style>

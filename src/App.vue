<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/user/product';
import { useCartStore } from "@/stores/user/cart";
import { useEventStore } from "@/stores/event";

const eventStore = useEventStore()
const cartStore = useCartStore()
const productStore = useProductStore()
onMounted(()=>{
  cartStore.loadCart()  
  productStore.loadProducts()
})
</script>

<template>
  <div class="toast">
  <div class="alert" :class="`alert=${eventStore.data.status}` ">
    <span>{{ eventStore.data.message }}</span>
  </div>
</div>
  <RouterView />
</template>

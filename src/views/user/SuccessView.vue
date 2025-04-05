
<template>
  <UserLayout>
    <div class="max-w-2xl mx-auto border border-base-200 shadow-2xl p-8">
      <div>
        <div class=" text-2xl font-bold">You order is success</div>
        <div>Hi {{ orderData.name }}</div>
        <div>เตรียมรอรับสินค้าได้</div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-4">
        <div>
          <div class="font-bold">Order date</div>
          <div>{{ orderData.createdAt }}</div>
        </div>
        <div>
          <div class="font-bold">Order number</div>
          <div>{{ orderData.orderNumber }}</div>
        </div>
        <div>
          <div class="font-bold">Payment method</div>
          <div>{{ orderData.paymentMethod }}</div>
        </div>
        <div>
          <div class="font-bold">Address</div>
          <div>{{ orderData.address }}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div v-for="product in orderData.products" class="grid grid-cols-4 mt-4">
          <div><img :src="product.imageUrl" alt=""></div>
          <div><b>{{product.name}}</b></div>
          <div>จำนวน: {{ product.quantity }}</div>
          <div>ราคารวม: {{ product.price * product.quantity }}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <div>ราคาสินค้าทั้งหมด</div>
        <div>{{ orderData.totalPrice }}</div>
      </div>
      <div class="flex justify-between">
        <div>ค่าส่ง</div>
        <div>0</div>
      </div>
      
      <div class="divider"></div>
      <div class="flex justify-between">
        <div>ราคาทั้งสิ้น</div>
        <div>{{ orderData.totalPrice }}</div>
      </div>
      <div class="divider"></div>
      <div>ขอบคุณที่มาซื้อ</div>
    </div>
</UserLayout>
</template>

<script setup>
  import UserLayout from "@/layouts/UserLayout.vue";
  import { useCartStore } from "@/stores/user/cart";
  const cartStore = useCartStore()
  import {ref, onMounted } from "vue";
  
  const orderData = ref({})


  onMounted(()=>{
    cartStore.loadCheckout()
    if(cartStore.checkout.orderNumber){
      orderData.value = cartStore.checkout
    }
  })
</script>

<style lang="scss" scoped>

</style>
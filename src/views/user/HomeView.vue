
<template>
  <UserLayout>
    <div class="hero bg-base-200 h-96">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello to wattanapongpha shop</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<Product :products="productStore.list">
</Product>
  </UserLayout>
</template>

<script setup>
  import UserLayout from "@/layouts/UserLayout.vue";
  
  import {useProductStore} from '@/stores/user/product'
  const productStore = useProductStore()

  import Product from '@/components/Product.vue'
</script>

<style lang="scss" scoped>

</style>
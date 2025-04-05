<template>
    <UserLayout>
        <div class="text-3xl m4">
            Search:{{ searchText }}
        </div>
        <Product :products="filterProducts">
        </Product>
    </UserLayout>
</template>

<script setup>
import { onMounted,ref,computed,watch } from 'vue';
import { useRoute } from 'vue-router';

import UserLayout from "@/layouts/UserLayout.vue";

import { useProductStore } from '@/stores/user/product'
const productStore = useProductStore()

import Product from '@/components/Product.vue'

const route = useRoute()
const searchText = ref('')

onMounted(() => {
    if(route.query.q){
        searchText.value = route.query.q
    }
})

watch(()=>route.query.q,(newSearchText)=>{
    searchText.value = newSearchText
},{immediate:true})

const filterProducts = computed(()=>{
    return productStore.filterProducts(searchText.value)
})
</script>

<style lang="scss" scoped></style>
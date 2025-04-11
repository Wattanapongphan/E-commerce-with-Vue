<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl">{{mode}}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div v-for="form in formData" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input type="text" v-model="productData[form.field]" class="input input-bordered w-full" />
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Status</span>
                    </label>
                    <select v-model="productData.status" class="select select-bordered w-full">
                        <option disabled selected>Pick status</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end mt-4"> 
                <RouterLink :to="{name:'admin-products-list'}" class="btn btn-ghost">BACK</RouterLink>
                <button class="btn btn-neutral" @click="updateProduct()">{{mode}}</button>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import  {ref,reactive,onMounted } from 'vue';

import { useRouter,useRoute,RouterLink } from 'vue-router';
const router = useRouter()
const route = useRoute()

const productIndex = ref(-1)
const mode = ref('ADD')

import {useAdminProductStore } from '@/stores/admin/product'
const adminProductStore = useAdminProductStore()


const updateProduct = ()=>{
    if(mode.value === 'EDIT'){
        adminProductStore.updateProduct(productIndex.value,productData)
    }else{
        adminProductStore.addProduct(productData)
    }
        router.push({name:'admin-products-list'})
}
const productData = reactive({
    name:'',
    imageUrl:'',
    price:0,
    quantity:0,
    about:'',
    status:''
})

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'imageUrl'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    },
]

onMounted(()=>{
    if(route.params.id){
        productIndex.value = parseInt(route.params.id)
        mode.value = 'EDIT'

        const selectedProduct = adminProductStore.getProduct(productIndex.value)
        console.log(selectedProduct)
        productData.name = selectedProduct.name
        productData.imageUrl = selectedProduct.imageUrl
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status
    }
})
</script>
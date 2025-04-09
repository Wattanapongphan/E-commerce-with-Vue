<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl">Add</div>
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
                <button class="btn btn-ghost">BACK</button>
                <button class="btn btn-neutral" @click="addProduct()">ADD</button>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { reactive } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter()

import {useAdminProductStore } from '@/stores/admin/product'
const adminProductStore = useAdminProductStore()


const addProduct = ()=>{
    adminProductStore.addProduct(productData)
    router.push({name:'admin-products-list'})
}
const productData = reactive({
    name:'',
    image:'',
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
        field: 'image'
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
</script>
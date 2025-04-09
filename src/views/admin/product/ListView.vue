<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl">Product</div>
            <div>
              <RouterLink :to="{name:'admin-products-create'}" 
              class="btn btn-neutral">Add New</RouterLink>
            </div>
        </div>
        <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Status</th>
        <th>Updated At</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="product in adminProductStore.list">
        <th>{{product.name}}</th>
        <td><img :src="product.image" class="w-12"></td>
        <td>{{product.price}}</td>
        <td>{{product.remainQuantity}}/{{product.quantity}}</td>
        <td>
          <div class="badge badge-success">{{product.status}}</div>
        </td>
        <td>{{product.updatedAt}}</td>
        <td>
            <div class="flex gap-2">
                <div class="btn btn-ghost"><Edit></Edit></div>
                <div class="btn btn-ghost"><Trash></Trash></div>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </AdminLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import AdminLayout from '@/layouts/AdminLayout.vue';
import {ref ,onMounted} from 'vue'
import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'

import {useAdminProductStore } from '@/stores/admin/product'
const adminProductStore = useAdminProductStore()
onMounted(()=>{
  adminProductStore.loadProducts()
})

</script>
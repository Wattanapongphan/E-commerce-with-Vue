<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl font-bold">Order Detail id:{{ orderIndex }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">Order Date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.no }}</div>
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
            <div v-for="product in orderData.products" class="grid grid-cols-4 items-center">
                <div class="mx-auto">
                    <img class="p-2 w-20" :src="product.imageUrl">
                </div>
                <div>
                    <div class="font-bold">{{ product.name }}</div>
                    <div class="">{{ product.description }}</div>
                </div>
                <div>จำนวน {{ product.quantity }} ชิ้น</div>
                <div>{{ product.price }} B</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between font-bold">
                <div>ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="flex justify-end my-4">
                <RouterLink :to="{name:'admin-orders-list'}" class="btn btn-neutral">Back</RouterLink>
            </div>
        </div>

    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { ref, reactive, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router';
import { useAdminOrderStore } from '@/stores/admin/order';
const adminOrderStore = useAdminOrderStore()

const orderIndex = ref(-1)
const orderData = ref({
    products: []
})
const route = useRoute()

onMounted(() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder
    }
})
</script>
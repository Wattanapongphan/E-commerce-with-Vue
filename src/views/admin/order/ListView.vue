<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl font-bold">Order</div>
            <div class="divider"></div>
            <Table :headers="['customer Name', 'Price', 'Status', 'Updated At', '']">
                <tr v-for="(order, index) in adminOrderStore.list">
                    <td>{{ order.customerName }}</td>
                    <td>{{ order.totalPrice }}</td>
                    <td>{{ order.status }}</td>
                    <td>{{ order.updatedAt }}</td>
                    <td>
                        <RouterLink :to="{ name: 'admin-orders-detail', params: { id: index } }" class="btn">See Detail</RouterLink>
                    </td>
                </tr>
            </Table>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue'

import { useAdminOrderStore } from '@/stores/admin/order';
const adminOrderStore = useAdminOrderStore()

import { RouterLink } from 'vue-router';

</script>
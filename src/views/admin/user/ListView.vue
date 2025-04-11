<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl">User</div>
        </div>
        <Table :headers="['Name', 'Role', 'Status', 'Updated At']">
            <tr v-for="(user, index) in adminUserStore.list">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td>
                    <div class="badge" :class="user.status === 'active' ? 'badge-success' : 'badge-error'">
                        {{ user.status }}
                    </div>
                </td>
                <td>{{ user.updatedAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink :to="{ name: 'admin-users-update', params: { id: index } }" class="btn">Edit</RouterLink>
                        <button class="btn" @click="changeStatus(index)">
                            {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                        </button>
                    </div>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>

<script setup>
import { useAdminUserStore } from '@/stores/admin/user';
import { RouterLink } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';

import Table from '@/components/Table.vue'


const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let slectedUser = adminUserStore.list[index]
    slectedUser.status = slectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateUser(slectedUser)
}
</script>
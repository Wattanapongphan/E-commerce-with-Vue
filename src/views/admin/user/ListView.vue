<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl">User</div>
        </div>
        <Table :headers="['Name','Role','Status','Updated At']">
            <tr v-for="(user,index) in adminUserStore.list">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.updatedAt }}</td>
                <td>
                    <div class="flex gap-2">
                    <button class="btn">Edit</button>
                    <button class="btn" @click="changeStatus(index)">
                        {{ user.status === 'active' ?'Disable' :'Enable' }}
                    </button>
                </div>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>

<script setup>
import { useAdminUserStore } from '@/stores/admin/user';

import AdminLayout from '@/layouts/AdminLayout.vue';

import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'


const adminUserStore = useAdminUserStore()

const changeStatus = (index)=>{
    let slectedUser = adminUserStore.list[index]
    slectedUser.status = slectedUser.status === 'active' ?'inactive':'active'
    adminUserStore.updateUser(slectedUser)
}
</script>
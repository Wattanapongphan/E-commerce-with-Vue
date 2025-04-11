<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl">Update User</div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-2">
                <div v-for="form in formData" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input 
                    v-if="form.type === 'text'"
                    v-model="userData[form.field]"
                    type="text"  
                    class="input input-bordered w-full" />
                    <select 
                    v-if="form.type === 'select'"
                    v-model="userData[form.field]"
                    type="text"
                    class="input input-bordered w-full">
                    <option v-for="item in form.dropdownList">{{ item }}</option>
                </select>
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{name:'admin-users-list'}" class="btn btn-ghost">BACK</RouterLink>
                <button class="btn btn-neutral" @click="updateUser()">Update</button>
            </div>
        </div>

    </AdminLayout>
</template>

<script setup>
import {useAdminUserStore } from '@/stores/admin/user'
const adminUserStore = useAdminUserStore()

import { useEventStore } from "@/stores/event";
const eventStore = useEventStore()

import AdminLayout from '@/layouts/AdminLayout.vue';

import { useRoute,useRouter,RouterLink } from 'vue-router';
const route = useRoute()
const router = useRouter()

import {ref, reactive,onMounted } from 'vue';
const userIndex = ref(-1)
const userData = reactive({
    fullname:'',
    role:'',
    status:''
})

onMounted(()=>{
    if(route.params.id){
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)
        
        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
        console.log(userData)
    }
})


const updateUser = () => {
    adminUserStore.updateUser(userIndex.value,userData)
    eventStore.popupMessage('info','Update User Successful')
    router.push({name:'admin-users-list'})
}
const formData = [
     {
        name: 'Name',
        field: 'fullname',
        type:'text'
    },
    {
        name: 'Role',
        field: 'role',
        type:'select',
        dropdownList:['admin','moderator','user']
    },
    {
        name: 'Status',
        field: 'status',
        type:'select',
        dropdownList:['active','inactive']
    }
    ]
</script>
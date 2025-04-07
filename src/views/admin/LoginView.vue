<template>
    <div class="h-screen flex items-center">
    <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8 ">
        <div class="flex flex-col items-center ">
            <h1 class="text-3xl">Login View</h1>
            <div class="form-control w-full">
            <label class="label">Email</label>
            <input type="text" class="input w-full" placeholder="you email" />
        </div>
        <div class="form-control w-full">
            <label class="label">Password</label>
            <input type="password" class="input w-full" placeholder="you password" />
        </div>
        </div>
        <RouterLink :to="{name:'admin-dashboard'}" class="btn btn-neutral mt-4 w-full">
            Login
        </RouterLink>
    </div>
</div>
</template>
 
<script setup>
import { RouterLink } from 'vue-router';

</script>
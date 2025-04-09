<template>
<div class="drawer drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mx-4">
    <!-- Page content here -->
    <slot></slot>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
        <li class="text-3xl gont-bold"><a>Backoffice</a></li>
      <li v-for="menu in menus"><RouterLink
         :class="menu.routeName === activeMenu? 'menu-active' : ''" 
         :to="{name:menu.routeName}">{{menu.name}}</RouterLink></li>
    </ul>
  </div>
</div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const menus = [
    {
        name:'Dashboard',
        routeName:'admin-dashboard'
    },
    {
        name:'User',
        routeName:'admin-users-list'
    },
    {
        name:'Product',
        routeName:'admin-products-list'
    },
    {
        name:'Order',
        routeName:'admin-orders-list'
    },
    {
        name:'Logout',
        routeName:'admin-login'
    },
]

const route = useRoute()
const activeMenu = ref('')

onMounted(()=>{
    activeMenu.value = route.name
})
</script>


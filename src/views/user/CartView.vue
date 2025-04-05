<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
    <div class="flex">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div class="flex" v-for="item in [1,2,3,4,5]">
          <div class="felx-1">
            <img class="w-full p-10" src="https://picsum.photos/id/237/200/300" alt="">
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="relative grid grid-cols-2">
                  <div>
                  <div><b>flower</b></div>
                  <div>just flower</div>
                  <div>100 B</div>
                </div>
                <div>
                  <select class="select w-1/2">
                    <option v-for="quantity in [1,2,3,4,5]">{{ quantity }}</option>
                  </select>
                </div>
                <button class="absolute top-0 right-0">
                  X
                </button>
                </div>
              </div>
              <div><b>in stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-4">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 divide-y divide-black">
        <div class="flex justify-between p-4">
          <div>ราคาสินค้าทั้งหมด</div>
          <div>100</div>
        </div>
        <div class="flex justify-between p-4">
          <div>ค่าส่ง</div>
          <div>0</div>
        </div>
        <div class="flex justify-between p-4">
          <div>ราคารวมทั้งหมด</div>
          <div>0</div>
        </div>
      </div>
      </div>
    </div>

  </UserLayout>
</template>

<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from '@/components/icons/Close.vue'
</script>

<style lang="scss" scoped></style>
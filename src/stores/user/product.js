import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
  state:()=>({
    list: [{
      name: 'test',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
    },
    {
      name: '123123',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: '123123123',
      status: 'open',
      price: 1111111,
    }
  ],
  }),
  actions:{
    filterProducts(searchText){
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})

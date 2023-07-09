<script setup>
import { useProductStore } from "~~/stores/ProductStore";
const productStore = useProductStore();

const { product, cartStore, countBasket, quantityProducts } = defineProps(["product", "cartStore", "countBasket"]);
</script>

<template>
  <div
    class="relative flex items-center w-full h-[120px] mt-[5px] mr-12 bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg group/item sm:w-[364px]"
  >
    <div class="w-[90px] h-[90px] mt-[15px] mb-[15px] ml-[20px]">
      <img :src="`https://assets.adidas.com/images/${product.photo}`" :alt="product.name" />
    </div>
    <div class="ml-[34.43px]">
      <p class="font-normal text-[12px] mt-3 text-[#59606D]">{{ product.name }}</p>
      <p class="font-bold mt-[6px] text-[#59606D]">{{ product.price }} ₽</p>
    </div>
    <div
      @click="productStore.onDelete(product)"
      class="absolute top-[15.62px] right-[18.75px] mt-[70px] mr-[5px] cursor-pointer hover:text-red-500 group/edit visible sm:invisible group-hover/item:visible"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M227.313 363.313L312 278.627l84.687 84.686l22.626-22.626L334.627 256l84.686-84.687l-22.626-22.626L312 233.373l-84.687-84.686l-22.626 22.626L289.373 256l-84.686 84.687l22.626 22.626z"
        />
        <path
          fill="currentColor"
          d="M472 64H194.644a24.091 24.091 0 0 0-17.42 7.492L16 241.623v28.754l161.224 170.131a24.091 24.091 0 0 0 17.42 7.492H472a24.028 24.028 0 0 0 24-24V88a24.028 24.028 0 0 0-24-24Zm-8 352H198.084L48 257.623v-3.246L198.084 96H464Z"
        />
      </svg>
    </div>
  </div>
</template>

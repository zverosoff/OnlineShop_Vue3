<script setup>
import { cart } from "~~/src/open";
import { useProductStore } from "~~/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <div class="flex flex-raw justify-between">
    <div class="fixed flex justify-between items-center bg-neutral-50 w-full z-50 h-[66px] shadow-md">
      <div class="sm:ml-[88px] ml-[20px] font-mono text-xl text-neutral-700">
        <nuxt-link to="/">Online Shop</nuxt-link>
      </div>

      <ul class="invisible lg:visible flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
          <a class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-sky-400 hover:text-white"
            ><nuxt-link to="/">Главная</nuxt-link></a
          >
        </li>
        <li>
          <a href="#" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-sky-400 hover:text-white"
            ><b><nuxt-link to="/">Магазин</nuxt-link></b></a
          >
        </li>
        <li>
          <a href="#" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-sky-400 hover:text-white"
            ><nuxt-link to="/breand">О бренде</nuxt-link></a
          >
        </li>
        <li>
          <a href="#" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-sky-400 hover:text-white"
            ><nuxt-link to="/contact">Контакты</nuxt-link></a
          >
        </li>
      </ul>

      <div
        @click="cart.setisOpened(true)"
        class="flex sm:mr-[108px] mr-[15px] relative w-[34px] h-[34px] justify-center transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-700 text-center hover:duration-700 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <path
            fill="grey"
            d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4l-8.4.9L4 5z"
          />
        </svg>
        <div
          class="absolute top-0 right-0 not-italic font-bold text-[10px] leading-[14px] bg-sky-400 rounded-full w-[14px] h-[14px] text-center text-white"
        >
          {{ productStore.countBasket }}
        </div>
      </div>

      <span
        class=" fixed top-[19px] right-[50px] sm:right-[150px] rounded-lg pl-4 pr-4 p-1 text-sm text-neutral-400 shadow-inner"
      >
        <b>{{ productStore.totalPrice }} </b> ₽
      </span>
    </div>
  </div>
</template>

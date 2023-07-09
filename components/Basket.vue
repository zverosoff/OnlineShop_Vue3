<script setup>
import { storeToRefs } from "pinia";
import { cart } from "/src/open";
import { useProductStore } from "~~/stores/ProductStore";
const productStore = useProductStore();
const { cartStore, countBasket, totalPrice } = storeToRefs(productStore);
</script>

<template>
  <div v-show="cart.isOpen" class="fixed left-0 top-0 w-full h-full z-50 overflow-hidden dark:bg-gray-700">
    <div class="flex flex-col justify-center absolute left-0 top-0 w-full h-full bg-white opacity-90"></div>
    <div
      class="overflow-y-auto h-screen absolute w-full top-0 right-0 bg-white shadow-[-4px_0px_16px_rgba(0,0,0,0.05)] rounded-l-lg sm:w-[430px]"
    >
      <div class="ml-4 mr-4 sm:ml-8">
        <div class="flex items-center justify-between">
          <div class="font-bold text-3xl mt-[52px]">Корзина</div>
          <div @click="cart.setisOpened(false)" class="mt-[52px] mr-2rem rotate-45 text-4xl"><button>+</button></div>
        </div>
        <div v-if="countBasket > 0">
          <div class="font-normal text-lg leading-[23px] pt-4 text-[#59606D]"></div>
          <BasketProduct
            v-for="product in cartStore"
            :key="product"
            :product="product"
            class="border-l-2 border-neutral-100"
          />
          <div class="mt-4 mr-10 text-right font-bold">Итого: {{ totalPrice }} ₽</div>
        </div>
        <div v-else>
          <div class="flex flex-col justify-center items-center">
            <div class="mt-6 mr-8 font-normal text-[22px]">
              <center>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejAHZgPGYT_7hB7WUEuQuZSUKGGHWLIdY-5wbxIkOY2xfeOPAUJ9gsvp5kmSo4OxE0hs&usqp=CAU"
                  alt=""
                  srcset=""
                />
                 Корзина пуста.
              </center>
            </div>
            <div
              @click="cart.setisOpened(false)"
              class="w-[364px] h-[50px] mb-[32px] mt-6 ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-[#59606D] rounded-lg cursor-pointer"
            >
              <button class="mt-[14px] ml-[118px] text-white">Перейти к выбору</button>
            </div>
          </div>
        </div>

        <div>
          <BasketFormInp v-if="productStore.countBasket > 0" />
        </div>
      </div>
    </div>
  </div>
</template>

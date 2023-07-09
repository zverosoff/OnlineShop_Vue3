<script setup>
import { cart } from "~~/src/open";
import { useProductStore } from "~~/stores/ProductStore";

const productStore = useProductStore();
const { product, cartStore } = defineProps(["product", "cartStore"]);

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="flex flex-col items-center p-2 group/item">
    <div
      class="w-full h-full sm:w-100% sm:h-100% overflow-hidden bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg hover:cursor-pointer"
      :data-cat="product.category"
    >
      <div class="flex flex-col group/edit visible sm:invisible group-hover/item:visible">
        <div class="relative flex">
          <div class="absolute top-[20px] left-[20px] flex p-2 rounded-md bg-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42842 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89123 9.95731 7.10881 9.95731 7.29092 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z"
                fill="#F2C94C"
              />
            </svg>
            <div class="font-bold text-[10px] ml-[3px] text-yellow-500">
              {{ product.rating }}
            </div>
          </div>
          <div
            @click="productStore.onAdd(product)"
            class="absolute top-[20px] right-[20px] hover:bg-sky-400 hover:text-slate-50 cursor-pointer p-1 rounded-md bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9.033 9.033 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603l-.302-.106ZM13 8.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H11a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
                <path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <!-- <nuxt-link :to="`/products/` + product.id"> -->
      <img
        class="w-100% h-100% sm:h-[350px]"
        :src="`https://assets.adidas.com/images/${product.photo}`"
        loading="lazy"
        :alt="product.name"
      />
      <!-- </nuxt-link> -->
    </div>

    <div class="flex flex-col items-center cursor-pointer">
      <div class="truncate font-normal text-sm pt-[8px] text-gray-500">{{ product.name }}</div>

      <div class="font-bold text-sm pl-2 pr-2 p-[4px]">{{ product.price }} ₽</div>
    </div>
  </div>
</template>

<style scoped></style>

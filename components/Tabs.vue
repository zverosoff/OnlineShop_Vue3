<script setup>
import { ref } from "vue";
import states from "@/consts/states";
import { useProductStore } from "~~/stores/ProductStore";

const productStore = useProductStore();
const categoriesState = useState(states.ALL_CATEGORIES);
const selectedCategoryState = useState(states.SELECTED_CATEGORY);

const tabsList = ref(categoriesState.value);
const onCategorySelected = (category) => {
  console.log("> Tabs -> onCategorySelected -> category:", category);
  selectedCategoryState.value = category;
};

const sortActive = ref(false);

const onModalButtonClick = () => {
  sortActive.value = !sortActive.value;
};

const productsState = useState(states.PROCUCTS);
const productListFiltered = ref(productsState.value.all);
const categoryState = useState(states.SELECTED_CATEGORY);

watch(categoryState, (value) => {
  console.log("> Index -> watch: categoryState =", value, productsState.value.categories);
  productListFiltered.value = productsState.value.categories[value.id];
});

const categoryFilter = () => {
  const categoryId = categoryState.value.id;
  productListFiltered.value = productsState.value.filter((p) => {
    return p.category === categoryId;
  });
};

const productFilter = (e) => {
  if (e === "price") {
    productListFiltered.value = productListFiltered.value.sort((a, b) => b.price - a.price);
  }
  if (e === "popular") {
    productListFiltered.value = productListFiltered.value.sort((a, b) => b.rating - a.rating);
  }
  sortActive.value = !sortActive.value;
};
</script>

<template>
  <div class="w-100% h-[100px]">
    <div class="flex flex-raw justify-center sm:justify-normal pt-[100px] sm:ml-[40px] font-bold text-3xl">
      Kаталог товаpов
    </div>
    <div class="flex flex-raw justify-center sm:pt-0 sm:justify-end pt-10 mr-[40px]">
      <div class="flex flex-wrap -mt-6">
        <div class="font-normal text-sm mr-[5px]">Сортировать по:</div>
        <div @click="onModalButtonClick" class="relative font-normal text-sm ml-[4px] text-gray-600 cursor-pointer">
          цене
          <svg
            class="absolute top-0 right-[-8px] w-[5px] h-[2.5px] mt-[13px]"
            width="5"
            height="3"
            viewBox="0 0 5 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D" />
          </svg>
        </div>
      </div>
      <div
        v-show="sortActive"
        class="absolute w-[140px] h-[55px] bg-sky-400 text-white shadow-[0px_4px_16px_rgba(0,0,0,0.05)] rounded-lg"
      >
        <div @click="productFilter('price')" class="pl-3 text-sm hover:text-black hover:bg-sky-100 mt-2 cursor-pointer">
          По цене
        </div>
        <div @click="productFilter('popular')" class="pl-3 text-sm hover:text-black hover:bg-sky-100 cursor-pointer">
          По популярности
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center mt-[20px]">
      <div
        v-for="tabs in tabsList"
        :key="tabs"
        @click="onCategorySelected(tabs)"
        class="font-normal text-base mt-1 pb-4 text-[#959DAD] ml-2 hover:text-white cursor-pointer"
      >
        <span v-if="selectedCategoryState.id == tabs.id" class="text-white bg-sky-400 p-2 hover:bg-sky-300">
          {{ tabs.name }}</span
        >
        <span v-else class="p-2 shadow-md hover:bg-sky-400">{{ tabs.name }}</span>
      </div>
    </div>

    <div class="pt-[50px]">
      <div class="flex flex-wrap justify-center items-center pb-[100px] pl-1 sm:pl-0">
        <Product v-for="product in productListFiltered" :key="product.id" :product="product" />
      </div>
    </div>

    <footer
      class="fixed bottom-0 left-0 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6"
    >
      <span class="text-sm text-neutral-500 mt-2"
        >© 2023 <a href="#" class="hover:underline">Vasyutkin Sergey</a>
      </span>

      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6"><nuxt-link to="/breand">О бренде</nuxt-link></a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Правила</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Лицензия</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Контакты</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

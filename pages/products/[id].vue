<script setup>
import states from "@/consts/states";

const { data: products, loading: isProductsLoading } = await useFetch(`/api/products`);

useState(states.PROCUCTS, () => ({
  all: products.id,
  categories: categoriesState.value.map((c) =>
    products.id.filter((p) => c.id === categoryAll.id || p.category === c.id)
  ),
}));
</script>
<template>
  <div v-if="isProductsLoading && isCategoriesLoading">Loading</div>
  <ProductId :product="product" />
  <footer
    class="fixed bottom-0 left-0 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6"
  >
    <span class="text-sm text-neutral-500 mt-2"
      >© 2023 <a href="#" class="hover:underline">Страница еще не готова</a>
    </span>

    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">О нас</a>
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
</template>

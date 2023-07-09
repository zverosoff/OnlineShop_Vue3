<script setup>
import states from "@/consts/states";

const { data: products, loading: isProductsLoading } = await useFetch(`/api/products`);
const { data: categories, loading: isCategoriesLoading } = await useFetch(`/api/categories`);

const categoryAll = { id: 0, name: "Все" };
const categoriesState = useState(states.ALL_CATEGORIES, () => [categoryAll, ...categories.value]);

useState(states.SELECTED_CATEGORY, () => categoryAll);
useState(states.PROCUCTS, () => ({
  all: products.value,
  categories: categoriesState.value.map((c) =>
    products.value.filter((p) => c.id === categoryAll.id || p.category === c.id)
  ),
}));

// console.log("> App -> products:", products.value);
</script>
<template>
  <title>Online Shop</title>
  <div v-if="isProductsLoading && isCategoriesLoading">Loading</div>
  <div>
    <Header />
    <NuxtPage />
    <slot />
    <Basket />
  </div>
</template>

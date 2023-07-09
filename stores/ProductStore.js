import { defineStore } from "pinia";
import debounce from "lodash.debounce";

export const useProductStore = defineStore("productCard", {
  state: () => ({
    cartStore: [],
    countBasket: 0,
  }),

  getters: {
    totalPrice: (state) => state.cartStore.reduce((prev, curr) => (prev += curr.price * curr.quantity), 0),
  },
  actions: {
    async onAdd(product) {
      const item = this.cartStore.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cartStore.push({ ...product, quantity: 1 });
      }
      this.countBasket++;
    },

    async onDelete(product) {
      const item = this.cartStore.find((p) => p.id === product.id);

      if (item) {
        item.quantity--;
      }
      if (item.quantity === 0) {
        this.cartStore.splice(this.cartStore.indexOf(item), 1);
      }
      this.countBasket--;
    },
  },

  methods: {
    onRemoveClickHandler(product) {
      this.removeProduct(product.productId);
    },
    onQuantityChangeHandler: debounce(function onQuantityChangeHandler(e, product) {
      const qty = e.target.value;
      this.setProductQuantity({ productId: product.productId, qty });
    }, 400),
  },
});

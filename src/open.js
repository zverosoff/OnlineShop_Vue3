import { ref } from "vue";

export const cart = ref({
  isOpen: false,
  setisOpened(value) {
    this.isOpen = value;
  },
});

<template>
  <div
    class="nav flex items-center justify-between z-[99999]"
    :class="{ 'on-scroll-bg': scrollPosition > 50 }"
  >
    <div>
      <img src="~~/assets/images/logo-dark.svg" alt="logo" />
    </div>

    <div class="flex items-center space-x-6">
      <div class="relative cursor-pointer" @click="openCart">
        <img
          src="../assets/images/shopping-cart.svg"
          alt=""
          class="mr-6 w-7 h-7 cursor-pointer"
        />
        <div
          class="absolute top-[-15px] left-[-15px] w-7 h-7 rounded-full flex justify-center"
          style="background: var(--main-gradient)"
        >
          <span class="text-[#fff] text-center font-bold text-sm">{{
            cartLength
          }}</span>
        </div>
      </div>

      <custom-button class="" :btn-bg="'#13183f'">Get Started</custom-button>
    </div>

    <div
      ref="target"
      v-if="cartModal"
      class="w-[50%] absolute top-24 right-[100px] z-50"
    >
      <cart />
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";
import Cart from "./Cart.vue";
import { useCartStore } from "~~/store/cart";
import { onClickOutside } from "@vueuse/core";

const cartStore = useCartStore();

const cartModal = ref(false);
const cart = cartStore.cart || [];
const target = ref(null);

const scrollPosition = ref(null);

const openCart = () => {
  cartModal.value = !cartModal.value;
};

const cartLength = computed(() => {
  return cart?.length || 0;
});

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll());
  // handleScroll()
});

onClickOutside(target, () => cartModal.value = false);

</script>

<style scoped>
.on-scroll-bg {
  background: rgb(255, 255, 255);
  box-shadow: 5px 5px #504f4f23;
;
}

</style>

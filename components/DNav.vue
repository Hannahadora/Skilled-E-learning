<template>
  <div
    class="nav flex items-center justify-between z-[99999] bg-[#fff]"
    :class="{ 'on-scroll-bg': activateNavBg }"
  >
    <div>
      <img src="/images/logo-dark.svg" alt="logo" />
    </div>

    <div class="flex items-center space-x-6">
      <div class="relative cursor-pointer" @click="toggleCart">
        <img
          src="/images/shopping-cart.svg"
          alt=""
          class="mr-6 w-7 h-7 cursor-pointer"
        />
        <div
          class="absolute top-[-15px] left-[-15px] w-7 h-7 rounded-full flex justify-center"
          style="background: var(--main-gradient)"
        >
          <span class="text-[#fff] flex items-center justify-center text-center font-bold text-sm">{{
            cartLength
          }}</span>
        </div>
      </div>

      <custom-button class="" :btn-bg="'#13183f'">Get Started</custom-button>
    </div>

    <div
      ref="target"
      v-if="cartModal"
      class="lg:w-[45%] w-[100%] absolute top-24 lg:right-[100px] right-[0] z-50"
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
const activateNavBg = ref(false)

const scrollPosition = ref(null);

watch(scrollPosition, () => {
  scrollPosition.value > 50 ? activateNavBg.value = true : activateNavBg.value = false
});

const toggleCart = () => {
  if(cartModal.value === true) {
    cartModal.value = false;
  } else {
    cartModal.value = true;
  }
};

const cartLength = computed(() => {
  return cart?.length || 0;
});

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  if(scrollPosition.value > 50) {
    activateNavBg.value = true
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll());
  handleScroll()
});

onClickOutside(target, () => cartModal.value = false);

</script>

<style scoped>
.on-scroll-bg {
  background: rgb(255, 255, 255);
  box-shadow: 1px 1px #504f4f23;
;
}

</style>

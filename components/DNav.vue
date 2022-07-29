<template>
  <div class="nav flex items-center justify-between z-[99999]">
    <div>
      <img src="~~/assets/images/logo-dark.svg" alt="logo" />
    </div>

    <div class="flex items-center space-x-6">
      <div class="relative">
        <img src="../assets/images/shopping-cart.svg" alt="" class="mr-6 w-7 h-7 cursor-pointer">
        <div class="absolute top-[-15px] left-[-15px] w-7 h-7 rounded-full flex justify-center" style="background: var(--main-gradient)">
          <span class="text-[#fff] text-center font-bold text-sm">{{ cartLength }}</span>
        </div>
      </div>

      <custom-button class="" :btn-bg="'#13183f'">Get Started</custom-button>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";

const cart = ref([])

const cartLength = computed(() => {
  return cart?.value.length || 0
})
</script>

<style scoped></style>

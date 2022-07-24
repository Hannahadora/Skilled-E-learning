<template>
  <div class="nav flex items-center justify-between">
    <div>
      <img src="~~/assets/images/logo-dark.svg" alt="logo" />
    </div>

    <ul class="flex items-center space-x-6">
      <custom-button class="bg-[#13183f]">Get Started</custom-button>
    </ul>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue';
</script>

<style scoped>
.nav > .ul {
  font-size: 18px;
  font-weight: bold;
}
</style>
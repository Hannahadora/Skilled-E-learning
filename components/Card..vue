<template>
  <div class="card">
    <img :src="icon" alt="" class="card-icon" />
    <h3 class="mb-[16px] mt-[40px] font-bold">{{ title }}</h3>
    <slot class="" name="content"></slot>
    <p class="mt-[24px] text-[#f74780]">Get Started</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
});
</script>

<style scoped>
.card {
  height: 300px;
  padding: 24px;
  background: #fff;
  position: relative;
  border-radius: 16px;
}

.card-icon {
  position: absolute;
  top: -16px;
}
</style>

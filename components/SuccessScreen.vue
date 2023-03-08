<template>
  <div class="h-[200px] rounded bg-white">
    <div class="flex flex-col items-center justify-center h-full">
      <div class="text-center text-[32px] font-serif font-bold text-[#000]">Success!!!</div>
      <div class="font-text-[24px] mt-[16px] text-[#000]">
        Your item will arrive in 7 working days
      </div>
      <custom-button class="mt-[24px]" :btn-bg="'#13183f'" @click="closeModal">Done</custom-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const emit = defineEmits(["close"]);
const router = useRouter()

const closeModal = () => {
  emit("close");
  router.push('/')
};
</script>

<style></style>

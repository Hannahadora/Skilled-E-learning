<template>
  <div class="h-100vh">
    <d-nav class="py-4" />

    <div class="flex items-center justify-between">
      <div>
        <h1 class="mb-[30px]">Maximize Skill, <br />Minimize Budget</h1>
        <p class="mb-[40px]">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <custom-button>Get Started</custom-button>
      </div>

      <div>
        <img src="../assets/images/image-hero-desktop.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import DNav from "./DNav.vue";
import CustomButton from "./CustomButton.vue";
</script>

<style></style>

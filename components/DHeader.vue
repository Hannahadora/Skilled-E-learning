<template>
  <div class="">
    <d-nav class="fixed z-50 w-full py-5 px-[150px]" />

    <div class="h-screen pl-[150px] pt-24">
      <div class="flex items-center justify-between">
        <div class="w-[40%] flex flex-col items-left justify-between">
          <h1 class="mb-[30px]">Maximize Skill, <br />Minimize Budget</h1>
          <p class="mb-[40px]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <custom-button class="" lg :btn-bg="'var(--main-gradient)'"
            >Get Started</custom-button
          >
        </div>

        <div class="h-[750px] w-[50%] mt-[-0px] overflow-hidden">
          <div class="hero mr-[-300px] mt-[-120px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DNav from "./DNav.vue";
import CustomButton from "./CustomButton.vue";
</script>

<style scoped>
.hero {
  background: url("/static/images/image-hero-desktop@2x.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
}
</style>

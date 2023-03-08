<template>
  <div class="lg:mb-[40px]">
    <d-nav class="fixed z-50 w-full py-5 xl:px-[150px] lg:px-[80px] md:px-[36px] px-[16px]" />

    <div class="md:h-auto h-screen xl:pl-[150px] lg:pl-[80px] md:pl-[36px] pl-[16px] lg:pt-16 md:pt-[4px] pt-[46px]">
      <div class="flex md:flex-row flex-col-reverse items-center justify-between">
        <div class="md:w-[40%] w-full flex flex-col md:items-left items-center md:text-left text-center justify-between">
          <h1 class="lg:mb-[30px] mb-[16px]">Maximize Skill, <br />Minimize Budget</h1>
          <p class="mb-[40px]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <custom-button class="" lg :btn-bg="'var(--main-gradient)'"
            >Get Started</custom-button
          >
        </div>

        <div class="md:h-[750px] h-[450px] md:w-[50%] w-[100%] mt-[-0px] overflow-hidden">
          <div class="hero md:mr-[-300px] md:mt-[-120px] mt-[-70px]"></div>
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
  background: url("/images/image-hero-desktop@2x.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
}
</style>

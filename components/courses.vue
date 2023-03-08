<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px]">
    <div
      class="relative h-[300px] rounded-[16px]"
      style="background: var(--main-gradient)"
    >
      <div class="p-8 c-centered">
        <h2 class="text-[#fff]">Check out our most popular courses!</h2>
      </div>
    </div>
    <div class="w-full" v-for="(course, index) in courses" :key="index">
      <card :item="course">
        <template #content>{{ course.info }}</template>
      </card>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
const courses = ref([
  {
    id: "itm1",
    price: "65.00",
    quantity: 0,
    title: "Animation",
    icon: "/images/icon-animation.svg",
    info: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    id: "itm2",
    price: "52.00",
    quantity: 0,
    title: "Design",
    icon: "/images/icon-design.svg",
    info: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    id: "itm3",
    price: "76.00",
    quantity: 0,
    title: "Photography",
    icon: "/images/icon-photography.svg",
    info: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    id: "itm4",
    price: "84.00",
    quantity: 0,
    title: "Crypto",
    icon: "/images/icon-crypto.svg",
    info: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    id: "itm5",
    price: "55.00",
    quantity: 0,
    title: "Business",
    icon: "/images/icon-business.svg",
    info: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
]);
</script>

<style></style>

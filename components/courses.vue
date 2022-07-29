<template>
  <div class="grid grid-cols-3 gap-[50px]">
    <div class="relative h-[300px] rounded-[16px]" style="background: var(--main-gradient)">
        <div class="p-8 c-centered">
            <h2 class="text-[#fff]">Check out our most popular courses!</h2>
        </div>
    </div>
    <div v-for="(course, index) in courses" :key="index">
    <card :item="course">
      <template #content>{{ course.info }}</template>
    </card>
  </div>
  </div>
</template>

<script setup>
import Card from './Card..vue';
const courses = ref([
    {
        price: '$ 5.00',
        title: 'Animation',
        icon: "../assets/images/icon-animation.svg",
        info: "Learn the latest animation techniques to create stunning motion design and captivate your audience."
    },
    {
        price: '$ 5.00',
        title: 'Design',
        icon: "../assets/images/icon-design.svg",
        info: "Learn the latest animation techniques to create stunning motion design and captivate your audience."
    },
    {
        price: '$ 5.00',
        title: 'Photography',
        icon: "../assets/images/icon-photography.svg",
        info: "Create beautiful, usable interfaces to help shape the future of how the web looks."
    },
    {
        price: '$ 5.00',
        title: 'Crypto',
        icon: "../assets/images/icon-crypto.svg",
        info: "Create beautiful, usable interfaces to help shape the future of how the web looks."
    },
    {
        price: '$ 5.00',
        title: 'Business',
        icon: "../assets/images/icon-business.svg",
        info: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
    }
])
</script>

<style></style>

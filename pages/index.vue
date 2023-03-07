<template>
  <div>
    <div>
      <div>
        <d-header />
      </div>
      <div class="px-[120px] py-[20px] mt-[20px]">
        <courses />
      </div>
    </div>
  </div>
</template>

<script setup>
import DHeader from "~~/components/DHeader.vue";
import courses from "~~/components/courses.vue";
import CheckoutForm from "~~/components/CheckoutForm.vue";


const closeCheckoutForm = () => {
  showCheckoutForm.value = false;
};

const openCheckoutForm = () => {
  showCheckoutForm.value = true;
};

</script>

<style scoped>
.page-title {
  font-size: 100px;
  font-style: italic;
  font-weight: medium;
  font-family: cheltanham;
}

.page-intro {
  border-top: 1px solid #b10234;
  border-bottom: 1px solid #b10234;
  color: #b10234;
  font-style: italic;
  font-family: cheltanham;
  font-size: 48px;
}

.c-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>

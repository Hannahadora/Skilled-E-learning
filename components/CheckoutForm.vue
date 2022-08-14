<template>
  <div>
    <div class="pb-4 border-b flex items-start justify-between">
      <span class="font-bold text-2xl">Checkout Form</span>
      <img
        class="w-7 h-7 cursor-pointer"
        src="~/assets/images/x.svg"
        alt=""
        @click="closeModal"
      />
    </div>
    <div class="w-full grid grid-cols-2 gap-6 my-6">
      <form class="w-full flex flex-col border-r pr-6">
        <h4>Personal Information</h4>
        <h-input :placeholder="'Full Name'" />
        <h-input :type="'phone'" :placeholder="'Phone Number'" />
        <h-input :type="'email'" :placeholder="'Email'" />
        <h-input :placeholder="'Pickup Address'" />
        <h-input :placeholder="'State'" />
        <h-input :placeholder="'Country'" />
      </form>

      <div>
        <h4>Cart Details</h4>

        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            <span>{{ `${item.title} '-' ${item.quantity}` }}</span>
          </li>
        </ul>

        <div class="flex items-center justify-end mt-6 px-8 text-xl">
          <h6 class="font-bold">Total:</h6>
          <h6 class="ml-4 font-bold">$ {{ totalCost }}</h6>
        </div>

         <div class="flex items-center justify-center">
        <custom-button
          class="mt-6 w-full uppercase"
          :btn-bg="'#13183f'"
          @click="openCheckoutForm"
          >Pay</custom-button
        >
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useCartStore } from "~~/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.cart || [];
const showCheckoutForm = ref(true);

const totalCost = computed(() => {
  const totals = cartItems.map((item) => item?.quantity * item?.price);
  return totals.reduce((a, b) => a + b, 0);
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped></style>

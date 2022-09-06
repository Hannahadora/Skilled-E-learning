<template>
  <div>
    <div class="bg-[#fff] rounded-lg p-6 shadow h-[500px] overflow-y-scroll">
      <h2 class="font-bold text-2xl border-b pb-6">Cart</h2>
      <div>
        <table class="text-sm">
          <tr class="border-b">
            <th>SN</th>
            <th class="text-left">Item</th>
            <th class="text-left">Qty</th>
            <th class="text-left">Unit price ($)</th>
            <th class="text-right">Total ($)</th>
            <th class="text-right">Action</th>
          </tr>
          <tr
            v-for="(item, index) in cartItems"
            :key="index"
            class="w-full p-4 border-b"
          >
            <td>{{ index + 1 }}</td>
            <td>
              <div class="flex items-center">
                <img class="mr-3 w-10 h-10" :src="item.icon" alt="" />
                <h4>{{ item.title }}</h4>
              </div>
            </td>
            <td>
              <div class="flex items-center bg-[#f4f4f4] rounded w-14">
                <input
                  class="bg-transparent font-bold text-center w-full"
                  type="number"
                  v-model="item.quantity"
                />
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <p>{{ item.price }}</p>
              </div>
            </td>
            <td class="text-right">
              {{ item.quantity * item.price }}
            </td>
            <td>
              <img
                class="w-7 h-7 cursor-pointer"
                src="../assets/images/trash.svg"
                alt=""
                @click="removeItem(index)"
              />
            </td>
          </tr>
        </table>
      </div>

      <div
        v-if="cartItems.length === 0"
        class="h-[150px] flex items-center justify-center"
      >
        Empty Cart
      </div>

      <div class="flex items-center justify-end mt-6 px-8 text-xl">
        <h6 class="font-bold">Total:</h6>
        <h6 class="ml-4 font-bold">$ {{ totalCost }}</h6>
      </div>
      <div class="flex items-center justify-center">
        <custom-button
          class="mt-6 w-full uppercase"
          :btn-bg="'#13183f'"
          @click="openCheckoutForm"
          >Checkout</custom-button
        >
      </div>
    </div>

    <h-modal v-if="checkoutFormModal" :modal-width="'900px'">
      <template #content>
        <checkout-form @close="closeCheckoutForm" @success="successModal = true" />
      </template>
    </h-modal>
    <h-modal v-if="successModal" :modal-width="'600px'">
      <template #content>
        <success-screen @close="successModal = false" />
      </template>
    </h-modal>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.cart || [];
const checkoutFormModal = ref(false);
const successModal = ref(false);

const totalCost = computed(() => {
  const totals = cartItems.map((item) => item?.quantity * item?.price);
  return totals.reduce((a, b) => a + b, 0);
});

const removeItem = (index) => {
  cartItems.splice(index, 1);
};

const closeCheckoutForm = () => {
  checkoutFormModal.value = false;
};

const openCheckoutForm = () => {
  checkoutFormModal.value = true;
  console.log(checkoutFormModal.value, 'form')
};
</script>

<style>
th,
td {
  padding: 16px 20px;
}
</style>

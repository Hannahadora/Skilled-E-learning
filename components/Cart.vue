<template>
  <div class="bg-[#fff] rounded-lg p-6 shadow h-[500px] overflow-y-scroll">
    <h2 class="font-bold text-2xl border-b pb-6">Cart</h2>
    <div>
      <table class="text-sm">
        <tr class="border-b">
          <th>SN</th>
          <th class="text-left">Item</th>
          <th class="text-left">Qty</th>
          <th class="text-left">Unit price</th>
          <th class="text-right">Total</th>
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
              <p>$ {{ item.price }}</p>
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
              @click="delete [item]"
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

    <div class="flex items-center justify-end">
      <custom-button class="mt-6" :btn-bg="'#13183f'">Checkout</custom-button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.cart || 0;

const getTotal = (item) => {
  return item.price;
};
</script>

<style>
th,
td {
  padding: 16px 20px;
}
</style>

<template>
  <div class="bg-[#fff] rounded-lg p-6 shadow">
    <h2 class="font-bold text-2xl border-b pb-6">Cart</h2>
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="w-full flex items-center justify-between p-4 border-b"
    >
      <table>
        <tr class="text-left">
          <th>Item</th>
          <th>Qty</th>
          <th>Unit price</th>
          <th>Total</th>
        </tr>
        <tr>
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
          <td>
{{ item.price * item.quantity }}
          </td>
        </tr>
      </table>

      <div class="p-3">
        <img
          class="w-7 h-7 cursor-pointer"
          src="../assets/images/trash.svg"
          alt=""
        />
      </div>
    </div>

    <div
      v-if="cartItems.length === 0"
      class="h-[150px] flex items-center justify-center"
    >
      Empty Cart
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.cart || 0;
</script>

<style>
th, td {
  padding-right: 40px;
}
</style>

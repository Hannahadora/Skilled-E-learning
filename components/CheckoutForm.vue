<template>
  <div class="">
    <div class="pb-4 border-b flex items-start justify-between">
      <span class="font-bold text-2xl">Checkout Form</span>
      <img
        class="w-7 h-7 cursor-pointer"
        src="/images/x.svg"
        alt=""
        @click="closeModal"
      />
    </div>
    <div class="w-full grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
      <form class="w-full flex flex-col border-r pr-6">
        <h4>Personal Information</h4>
        <h-input v-model="form.full_name" :placeholder="'Full Name'">
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.full_name.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>

        <h-input
          v-model="form.phone_number"
          :type="'phone'"
          :placeholder="'Phone Number'"
        >
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.phone_number.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>

        <h-input v-model="form.email" :type="'email'" :placeholder="'Email'">
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.email.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>

        <h-input v-model="form.address" :placeholder="'Pickup Address'">
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.address.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>

        <h-input v-model="form.state" :placeholder="'State'">
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.state.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>

        <h-input v-model="form.country" :placeholder="'Country'">
          <template #error>
            <div class="text-red-500 text-[10px] italic">
              {{ v$.country.$errors[0]?.$message?.toString() }}
            </div>
          </template>
        </h-input>
      </form>

      <div>
        <h4 class="mb-[10px]">Cart Details</h4>

        <ul class="flex flex-col md:max-h-[400px] max-h-[200px] overflow-y-scroll px-[8px]">
          <li v-for="(item, index) in cartItems" :key="index" class="my-[8px]">
            <div class="flex items-start justify-between">
              <div class="w-[70%]">
                <div class="flex items-center mr-[8px]">
                  <img
                    :src="item.icon"
                    alt=""
                    class="mr-[4px] w-[20px] h-[20px]"
                  />
                  <p class="font-bold text-[14px]">{{ `${item.title}` }}</p>
                </div>
                <span class="text-[12px]">{{ `${item.info}` }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[12px] mr-8" style="white-space: nowrap"
                  >$ {{ `${item.price}` }}</span
                >
                <span class="text-[12px] mr-8" style="white-space: nowrap">{{
                  `${item.quantity}`
                }}</span>
                <span class="font-bold" style="white-space: nowrap"
                  >$ {{ item.quantity * item.price }}</span
                >
              </div>
            </div>
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
            @click="submitForm"
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
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const cartStore = useCartStore();
const cartItems = cartStore.cart || [];

const form = reactive({
  full_name: "",
  phone_number: "",
  email: "",
  address: "",
  state: "",
  country: "",
});

const rules = {
  full_name: { required },
  phone_number: { required },
  email: { required, email },
  address: { required },
  state: { required },
  country: { required },
};

const v$ = useVuelidate(rules, form);

const formIsFilled = computed(() => {
  return Object.values(form).every((value) => !!value);
});

const totalCost = computed(() => {
  const totals = cartItems.map((item) => item?.quantity * item?.price);
  return totals.reduce((a, b) => a + b, 0);
});

const emit = defineEmits(["close", "success"]);

const closeModal = () => {
  emit("close");
};

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  emit("success");
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c89999;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ad7b7b;
}
</style>

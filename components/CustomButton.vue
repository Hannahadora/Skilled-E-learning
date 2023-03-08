<template>
  <button class="btn" :class="classes" :disabled="disabled" :style="styles" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  btnBg: { type: String, required: false },
  textColor: { type: String, default: "#fff", required: false },
  lg: { type: String, required: false },
  sm: { type: String, required: false },
  disabled: {type: Boolean, required: false}
});

const classes = {
  ["btn-lg"]: props.lg,
  ["btn-sm"]: props.sm,
};

const styles = {
  ...(props.btnBg && { background: props.btnBg }),
  ...(props.textColor && { color: props.textColor }),
};
</script>

<style scoped>
.btn {
  border-radius: 45px;
  font-size: 14px;
    padding: 7px 16px;
  border: none;
  cursor: pointer;
}

.btn-lg {
  padding: 16px 36px !important;
}

.btn-sm {
  padding: 7px 16px !important;
  font-size: 13px;
  border-radius: 45px;
}
button:disabled {
  cursor: not-allowed;
  background-color: #68686b3a !important;
}
</style>

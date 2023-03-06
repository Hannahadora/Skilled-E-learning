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
  ["btn-bg"]: props.lg,
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
  padding: 14px 24px;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.btn-bg {
  padding: 16px 36px;
}

.btn-sm {
  padding: 7px 16px;
  font-size: 13px;
  border-radius: 45px;
}
button:disabled {
  cursor: not-allowed;
  background-color: #68686b3a !important;
}
</style>

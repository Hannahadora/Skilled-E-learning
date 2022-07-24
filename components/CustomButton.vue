<template>
  <div>
    <button class="btn" :class="classes" :style="styles" v-bind="$attrs">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  btnBg: { type: String, required: false},
  textColor: { type: String, default: '#fff', required: false},
  lg: { type: String, required: false}
});

const classes = {
  ['btn-bg']: props.lg
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
    }

    .btn-bg {
      padding: 16px 36px;
    }
</style>

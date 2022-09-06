<template>
  <div class="modal-wrapper" :class="classes">
    <div class="modal-content mx-auto" :style="styles">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  modalWidth: { type: String, default: "500px" },
  modalHeight: { type: String, default: "auto" },
  center: { type: Boolean, default: false },
  right: { type: Boolean, default: false },
  left: { type: Boolean, default: false },
});
const show = ref(!!props.modelValue);
const styles = computed(() => {
  return {
    width: props.modalWidth,
    height: props.modalHeight,
  };
});

const classes = computed(() => {
  return {
    "justify-center": props.center,
    "justify-start": props.left,
    "justify-end": props.right,
  };
});
</script>

<style scoped>
.modal-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.551);
  display: flex;
  align-items: center;
}
.modal-content {
  background: #fff;
  border-radius: 14px;
  padding: 32px;
}
</style>

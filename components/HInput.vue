<template>
  <div>
    <label class="h-label">{{ label }}</label>
    <br />
    <div class="input-wrapper">
      <input class="h-input" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  label: { type: String, default: "" },
});
</script>

<style scoped>
.input-wrapper {
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  position: relative;
}

.h-input {
  border: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
}

.h-input:focus {
  outline: none;
}
.h-input:focus .h-label {
  /* top: -16px; */
  transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
  transform-origin: 0 0;
}
/* 
.h-label {
  font-size: 13px;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  z-index: 300;
} */

/* .h-input + .h-label {
  position: absolute;
  top: 13px;
  left: 18px;
  display: inline-block;
  width: auto;
  margin: 0;
  padding: 0;
  color: #b5b5b5;
  transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
  transform-origin: 0 0;
}

.h-input:focus + .h-label,
.h-input:not(:placeholder-shown) + .h-label {
  z-index: 500;
  padding: 0 1px;
  transform: translate(0, -19px) scale(0.8);
  color: #b5b5b5;
  background-color: white;
} */
</style>

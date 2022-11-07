<template>
  <form
    @submit.prevent="submit"
    :style="{
      gap: `${gap}px`,
      'max-width': `${width}px`,
      padding: `${paddingY}px ${paddingX}px`,
      background: background,
    }"
    class="form"
  >
    <slot></slot>
  </form>
</template>

<script setup>
const props = defineProps({
  gap: {
    type: String,
    default: '5',
  },
  width: {
    type: String,
    default: '350',
  },
  paddingX: {
    type: String,
    default: '0',
  },
  paddingY: {
    type: String,
    default: '0',
  },
  background: {
    type: String,
    default: '#1A1B30',
  },
  submit: {
    type: Function,
    reuired: false,
  },
});
</script>

<style lang="scss" scoped>
form {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
}
</style>

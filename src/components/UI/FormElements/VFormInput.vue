<template>
  <div class="form_controller" :style="{width: width}">
    <label class="form_label" :for="name">{{ label }}</label>
    <input
      class="form_input"
      @input="updateValue"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :type="type"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['update:value']);
const props = defineProps({
  value: {
    type: String,
    required: false,
  },

  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: false,
  },
  width: {
    type: String,
    default: '300px',
  },
});
const updateValue = (e) => {
  emit('update:value', e.target.value);
};
</script>

<style lang="scss" scoped>
.form {
  &_label {
    font-size: 14px;
  }
  &_input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
}
</style>

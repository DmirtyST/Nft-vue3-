<template>
  <div class="slide">
    <Transition name="slide">
      <slot />
    </Transition>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>

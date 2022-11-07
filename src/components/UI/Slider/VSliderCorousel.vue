<template>
  <div :autoplay="autoplay" :duration="duration" class="corousel">
    <slot :currentSlide="currentSlide" />

    <div v-if="arrow === true" class="corousel_arrow">
      <div :style="{'background-color': color}" @click="handlePrev">{{ '<' }}</div>
      <div :style="{'background-color': color}" @click="handleNext">{{ '>' }}</div>
    </div>

    <div v-if="pagination === true" class="corousel_pagination">
      <span
        @click="handlePagination(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{active: index + 1 === currentSlide}"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
const currentSlide = ref(1);
const getSlideCount = ref(null);
const props = defineProps({
  arrow: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 1500,
  },
  color: {
    type: String,
    default: '#032B1E',
  },
});
const autoPlay = ref(props.autoplay);
const autoPlayDuration = ref(props.duration);
const handleNext = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};
const handlePrev = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};
const handlePagination = (index) => {
  currentSlide.value = index + 1;
};
const handleAutoPlay = () => {
  setInterval(() => {
    handleNext();
  }, autoPlayDuration.value);
};
if (autoPlay.value === true) {
  handleAutoPlay();
}
onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length;
});
</script>

<style lang="scss" scoped>
.corousel {
  max-height: 100vh;
  height: 100vh;
  position: relative;
  &_pagination {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 22;
    display: flex;
    gap: 12px;
    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .active {
      background-color: rgb(145, 166, 145);
    }
  }
  &_arrow {
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 0 15px;
    top: 50%;
    transform: translateY(-50%);
    gap: 10px;
    font-size: 25px;
    position: relative;
    z-index: 9999;
    color: white;
    div {
      background-color: rgb(15, 15, 66);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>

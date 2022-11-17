<template>
  <button :type="type" :disabled="disabled" :class="['btn', `btn_${color}`]">
    <div class="btn_controll">
      <slot></slot>
      <div v-if="icon === true" class="btn_svg">
        <VSvg width="24" height="24" id="arrow" />
      </div>
    </div>
  </button>
</template>

<script setup>
  import VSvg from '../SVG/VSvg.vue';

  const props = defineProps({
    label: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'btn',
    },
    disabled: {
      type: Boolean,
      require: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
    icon: {
      type: Boolean,
      default: true,
    },
  });
</script>

<style lang="scss" scoped>
  .btn {
    cursor: pointer;
    font-family: PlayfairDisplay;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    background: #c2e978;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 22;
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1.5em;
      background-color: rgba(white, 0.6);
      transform: translateX(-4em) skewX(-45deg);
      left: 0;
      top: 0;
    }
    &:hover {
      &::before {
        animation: move-light 1s;
      }
    }
    @keyframes move-light {
      from {
        transform: translateX(-4em) skewX(-45deg);
      }
      to {
        transform: translateX(25em) skewX(-45deg);
      }
    }
    &_svg {
      margin-top: 4px;
    }
    &_controll {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;
    }
    &_big {
      padding: 20px 35px;
    }
    &_average {
      padding: 20px 37px;
    }
    &_minimal {
      padding: 12px 15px;
    }
    &:disabled {
      opacity: 0.6;
    }
  }
  @media (max-width: 950px) {
    .btn {
      &_big {
        padding: 15px 25px;
      }
    }
  }
  @media (max-width: 925px) {
    .btn {
      font-size: 16px;

      &_minimal {
        padding: 10px 12px;
      }
      &_average {
        padding: 16px 30px;
      }
    }
  }

  @media (max-width: 425px) {
    .btn {
      font-size: 15px;

      &_minimal {
        padding: 10px 12px;
      }
      &_average {
        padding: 14px 20px;
      }
      &_big {
        padding: 14px 20px;
      }
    }
  }
</style>

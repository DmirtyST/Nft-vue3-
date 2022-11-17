<template>
  <div>
    <p :style="{color: color}" :class="['Typography', `Typography_${size}`]">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
    sizeSpan: {
      type: String,
      default: 'sm',
    },
    color: {
      type: String,
      default: '#F9F9F9',
    },
  });
</script>

<style lang="scss" scoped>
  .TypographySpan {
    font-family: PlayfairDisplay;
    font-weight: 400;
    font-style: italic;
    &_lg {
      font-size: 21px;
      line-height: 32px;
    }
    &_xl {
      font-size: 24px;
      line-height: 32px;
    }
  }
  .Typography {
    font-family: PlayfairDisplay;
    font-weight: 400;
    &_smm {
      font-size: 17px;
      line-height: 28px;
    }
    &_sm {
      font-size: 18px;
      line-height: 28px;
    }
    &_md {
      font-size: 20px;
      line-height: 32px;
    }
    &_lg {
      font-size: 21px;
      line-height: 32px;
    }
    &_xl {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media (max-width: 925px) {
    .Typography {
      &_xl {
        font-size: 22px;
        line-height: 32px;
      }
    }
  }

  @media (max-width: 425px) {
    .Typography {
      &_xl {
        font-size: 18px;
        line-height: 32px;
      }

      &_lg {
        font-size: 18px;
        line-height: 32px;
      }
      &_md {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
</style>

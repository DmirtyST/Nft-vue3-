<template>
  <div>
    <div
      :style="{
        color: color,
        'text-transform': uppercase,
      }"
      :class="['Htag', `Htag_${size}`]"
    >
      <slot></slot>
    </div>
    <div
      :style="[icon === true ? 'padding-left:10px' : '']"
      :class="['Hsub', `Hsub_${sizeSub}`]"
    >
      <div v-if="icon === true" class="Hsub_icon">
        <VSvg id="star" width="13" height="13" />
      </div>
      <slot name="span"></slot>
    </div>
  </div>
</template>

<script setup>
  import VSvg from '../SVG/VSvg.vue';

  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
    sizeSub: {
      type: String,
      default: 'sm',
    },
    color: {
      type: String,
      default: '#c2e978',
    },
    uppercase: {
      type: String,
      default: '',
    },

    subActive: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  .Hsub {
    font-weight: 400;
    color: #ffffff;
    position: relative;

    &_lg {
      font-size: 40px;
      line-height: 53px;
    }
    &_xl {
      font-size: 53px;
      line-height: 65px;
    }
    &_icon {
      position: absolute;
      top: -40px;
      left: 0px;
    }
  }
  .Htag {
    color: #c2e978;
    font-weight: 400;

    &_md {
      font-size: 32px;
      line-height: 40px;
    }
    &_lg {
      font-size: 40px;
      line-height: 46px;
    }

    &_xl {
      font-size: 48px;
      line-height: 46px;
    }
    &_xxl {
      font-size: 72px;
      line-height: 46px;
    }
  }

  @media (max-width: 925px) {
    .Htag {
      &_xl {
        font-size: 40px;
        line-height: 40px;
      }
    }

    .Hsub {
      &_xl {
        font-size: 35px;
        line-height: 40px;
      }
    }
  }

  @media (max-width: 425px) {
    .Htag {
      &_xl {
        font-size: 32px;
        line-height: 40px;
      }
      &_lg {
        font-size: 32px;
        line-height: 40px;
      }
    }

    .Hsub {
      &_xl {
        font-size: 32px;
        line-height: 40px;
      }
      &_lg {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
</style>

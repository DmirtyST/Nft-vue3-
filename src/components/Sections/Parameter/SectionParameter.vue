<template>
  <section class="parameter">
    <div class="parameter_title">
      <VHtag size="lg" size-sub="lg">
        Each token has a number
        <template v-slot:span>
          <div class="parameter-title_sub">of parameters:</div>
        </template>
      </VHtag>
    </div>
    <div class="parameter_row">
      <div v-for="item in dataItems" :key="item.id" class="parameter_item">
        <VHtag size="md">{{ item.title }}</VHtag>
        <VTypography size="md">{{ item.text }}</VTypography>
      </div>
    </div>
  </section>
</template>

<script setup>
import VHtag from '../../UI/Htag/VHtag.vue';
import VTypography from '../../UI/Typography/VTypography.vue';

const dataItems = [
  {
    id: 1,
    title: 'Tree Name ',
    text:
      'Each sapling (tree) has a unique name, the name can be changed after purchasing a token. C02 tokens will be burned to change the name.',
  },
  {
    id: 2,
    title: 'Image',
    text:
      'We will update the image every 6 months until it takes its final shape. Each image will be engraved with the exact coordinates of your tree.',
  },
  {
    id: 3,
    title: 'Tree age',
    text:
      'The age of the tree will be counted from the moment of planting the seedlings in the ground and denoted in years and days.',
  },
  {
    id: 4,
    title: 'SQA tokens',
    text:
      'Each tree (NFT token) generates a certain number of ERC20 tokens per day. The number of tokens generated = the amount of C02 absorbed by the tree.',
  },
];
</script>

<style lang="scss" scoped>
.parameter {
  min-height: 384px;
  margin-bottom: 40px;
  &_row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
  &_title {
    margin-bottom: 32px;
  }
  &-title {
    &_sub {
      padding-left: 20px;
    }
  }

  &_item {
    background: #191d2e;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: all ease 0.4s;
    &:hover {
      transform: scaleZ(1.1);
    }
  }
}

@media (min-width: 970px) {
  .parameter {
    &_row {
      grid-template-rows: repeat(2, 192px);
    }
  }
}

@media (max-width: 567px) {
  .parameter {
    &_title {
      text-align: center;
    }
    &-title {
      &_sub {
        padding-left: 0px;
      }
    }
    &_row {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
}
</style>

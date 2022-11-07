<template>
  <section class="benefits">
    <div class="benefits_title">
      <VHtag size="lg"> <span> By purchasing a </span>NFT tree token you get: </VHtag>
    </div>
    <div class="benefits_row">
      <div v-for="item in dataItem" :key="item.id" class="benefits_item">
        <div class="benefits-item_image">
          <img :src="item.img" alt="" />
        </div>
        <VTypography size="md">{{ item.text }}</VTypography>
      </div>
    </div>
  </section>
</template>

<script setup>
import VHtag from '../../UI/Htag/VHtag.vue';
import BenefitsImage1 from '../../Image/benefits1.png';
import BenefitsImage2 from '../../Image/benefits2.png';
import BenefitsImage3 from '../../Image/benefits3.png';
import BenefitsImage4 from '../../Image/benefits4.png';
import BenefitsImage5 from '../../Image/benefits5.png';
import BenefitsImage6 from '../../Image/benefits6.png';
import VTypography from '../../UI/Typography/VTypography.vue';
const dataItem = [
  {
    id: 1,
    img: BenefitsImage1,
    text: 'Become the owner of your own evergreen tree',
  },
  {
    id: 2,
    img: BenefitsImage2,
    text: 'Help create anew movement in the direction of the NFT trend',
  },
  {
    id: 3,
    img: BenefitsImage3,
    text: 'You help the ecology ofour planet, because every tree absorbs C02',
  },
  {
    id: 4,
    img: BenefitsImage4,
    text: 'Participate in the distribution of royalties from collection token sales',
  },
  {
    id: 5,
    img: BenefitsImage5,
    text: 'You pass on your family tree from generation to generation',
  },
  {
    id: 6,
    img: BenefitsImage6,
    text: 'You can change the name of the tree and ennoble it',
  },
];
</script>

<style lang="scss" scoped>
.benefits {
  min-height: 414px;
  margin-bottom: 60px;
  &_title {
    text-align: center;
    span {
      color: #fff;
    }
    margin-bottom: 40px;
  }
  &_row {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  &_item {
    padding: 32px 24px;
    background: #191d2e;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-item {
    &_image {
      width: 56px;
      height: 56px;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
@media (max-width: 776px) {
  .benefits {
    display: none;
  }
}
</style>

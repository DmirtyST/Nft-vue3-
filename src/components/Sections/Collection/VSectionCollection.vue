<template>
  <section class="collection">
    <VContainer width="1128">
      <div class="collection_preview">
        <div class="collection-preview_title">
          <img class="collection-preview_image" :src="collectionRounded" alt="" />
          <VHtag size="xl" size-sub="xl">
            classic nft
            <template v-slot:span
              ><span class="collection-preview_sub">collection</span></template
            >
          </VHtag>
        </div>
        <div class="collection-preview_text">
          <VTypography size="md"
            >In addition to 1,000 tokenized trees, our team has prepared a collection of
            10,000 NFT tokens for you. Each token is unique. By purchasing tokens you help
            the development of our project and all subsequent projects with a social
            component.
          </VTypography>
        </div>
      </div>

      <section class="collection_row">
        <div
          v-for="item in dataItem"
          :key="item.id"
          :style="{'background-color': item.color}"
          class="collection_item"
        >
          <div class="collection-item_image">
            <img :src="item.img" alt="" />
          </div>
        </div>
        <div class="collection_banner">
          <VContainer width="1060px">
            <div class="collection-banner_row">
              <VSvg id="boat" width="56" height="56" />
              <div class="collection-banner_title">buy your sequoia on opensea</div>
              <VSvg id="arrowRight" width="40" height="40" />
            </div>
          </VContainer>
        </div>
      </section>

      <div class="collection_basement">
        <VTypography size="md">Coming soon on OpenSea.com</VTypography>
        <VButton :icon="false" color="average">subscribe and don’t miss</VButton>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
import VContainer from '../../UI/Container/VContainer.vue';
import collectionImg1 from '../../Image/collection1.png';
import collectionImg2 from '../../Image/collection2.png';
import collectionImg3 from '../../Image/collection3.png';
import VSvg from '../../UI/SVG/VSvg.vue';
import VHtag from '../../UI/Htag/VHtag.vue';
import VTypography from '../../UI/Typography/VTypography.vue';
import collectionRounded from '../../Image/collectionRounded.png';
import VButton from '../../UI/Button/VButton.vue';

const dataItem = [
  {id: 1, img: collectionImg1, color: '#24d489'},
  {id: 2, img: collectionImg2, color: '#ffd326'},
  {id: 3, img: collectionImg3, color: '#ff2fb5'},
];
</script>

<style lang="scss" scoped>
.collection {
  min-height: 700px;
  margin-bottom: 80px;
  &_preview {
    margin-bottom: 48px;
    padding-left: 42px;
    display: flex;
    align-items: center;
  }
  &_basement {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    &_desc {
    }
  }
  &-preview {
    &_title {
      position: relative;
      z-index: 1;
      width: 31%;
    }
    &_sub {
      padding-left: 20px;
    }
    &_text {
      width: calc(69% - 100px);
    }
    &_image {
      position: absolute;
      z-index: -1;
      width: 255px;
      height: 180px;
      left: -20px;
      top: -40px;
    }
  }
  &_row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 360px);
    gap: 20px;
    margin-bottom: 24px;
  }

  &_item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  &_banner {
    background: #3268b1;
    padding: 32px;
    grid-column-start: 1;
    grid-column-end: -1;
  }

  &-banner {
    &_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_title {
      font-family: StoneSoup;
      font-size: 40px;
      font-weight: 400;
      line-height: 49px;
      color: #ffffff;
    }
  }
  &-item {
    &_image {
      width: 300px;
      height: 300px;
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

@media (max-width: 1040px) {
  .collection {
    min-height: 700px;
    margin-bottom: 50px;
    &_row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 360px);
      gap: 10px;
      margin-bottom: 24px;
    }
    &_banner {
      grid-column-start: 2;
      grid-column-end: -1;
    }

    &-banner {
      &_row {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        gap: 15px;
      }
      &_title {
        text-align: center;
        font-size: 35px;
        line-height: 40px;
      }
    }
  }
}

@media (max-width: 800px) {
  .collection {
    &_preview {
      display: none;
    }
  }
}
@media (max-width: 702px) {
  .collection {
    &_row {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }
    &_item {
      min-height: 310px;
    }
    &_banner {
      min-height: 310px;
      display: flex;
      align-items: center;
      padding: 15px;
    }
  }
}
</style>

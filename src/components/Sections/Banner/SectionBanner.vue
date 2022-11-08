<template>
  <section class="banner">
    <VContainer width="987">
      <div class="banner_row">
        <div class="banner_eclipse"></div>
        <div class="banner_title">
          <img class="banner-title_rounded" :src="Rounded" alt="banner-img" />
          <VHtag size="xl" size-sub="xl">
            The sequoia is a very rare,
            <template v-slot:span><span>endangered plant</span></template>
          </VHtag>
        </div>
        <div class="banner_image">
          <img :src="BannerImg" alt="" />
        </div>
        <div class="banner_description">
          <VTypography size="lg"> It grows for 2,000 years or more. </VTypography>
          <VTypography size="lg">
            <span> We tokenized</span> each seedling (the future mighty and evergreen
            tree) <span>and made an NFT</span> token out of it.
          </VTypography>
          <div class="banner_btn">
            <VButton color="minimal">buy sequoia tree</VButton>
          </div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
import VContainer from '../../UI/Container/VContainer.vue';
import VHtag from '../../UI/Htag/VHtag.vue';
import Rounded from '../../Image/rounded.png';
import VTypography from '../../UI/Typography/VTypography.vue';
import VButton from '../../UI/Button/VButton.vue';
import BannerImg from '../../Image/bannerImage.png';
</script>

<style lang="scss" scoped>
.banner {
  background: #0d150f;
  min-height: 355px;
  margin-bottom: 49px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &_row {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  &_eclipse {
    position: absolute;
    width: 800px;
    height: 317px;
    background: rgba(0, 230, 175, 0.7);
    opacity: 0.3;
    filter: blur(150px);
    transform: translateX(-50%);
    left: 50%;
    top: 10px;
    z-index: -1;
    border-radius: 70%;
  }
  &_title {
    width: 33%;

    span {
      padding-left: 20px;
    }
  }

  &-title {
    position: relative;
    &_rounded {
      position: absolute;
      width: 325px;
      height: 215px;
      transform: rotate(30deg);
      top: 20px;
      left: -20px;
    }
  }
  &_image {
    width: 33%;
    position: relative;
    img {
      position: absolute;
      max-width: unset;
      width: 370px;
      height: 600px;
      top: -200px;
      z-index: 22;
    }
  }

  &-image {
    position: relative;
    z-index: 1;
  }
  &_description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;
    gap: 28px;
    span {
      font-style: italic;
      color: #c2e978;
    }
  }
}

@media (max-width: 925px) {
  .banner {
    overflow: hidden;
    height: auto;
    padding-top: 20px;
    padding-bottom: 40px;
    &_btn {
      margin-top: 20px;
    }
    &_row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    &-title {
      position: relative;
      &_rounded {
        display: none;
      }
    }
    &_title {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      span {
        padding-left: 0px;
      }
    }
    &_description {
      align-items: center;
      width: 100%;
      gap: 10px;
      text-align: center;
    }
    &_image {
      width: 100%;
      position: relative;
      width: 250px;
      height: 250px;
      img {
        top: -0;
        left: 40px;
        width: 250px;
        height: 320px;
      }
    }
  }
}
</style>

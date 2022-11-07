<template>
  <div class="wrapper">
    <img class="roadmap_image" :src="roadMapBg" alt="" />

    <VContainer width="1128">
      <section class="roadmap">
        <div class="roadmap_slider">
          <div class="roadmap_title">
            <VHtag :icon="true" size-sub="xl">
              <template v-slot:span>roadmap</template>
            </VHtag>
          </div>
          <swiper
            :slidesPerView="4.6"
            :loop="true"
            :grabCursor="true"
            :space-between="5"
            :modules="modules"
            :speed="600"
            :breakpoints="{
              300: {
                slidesPerView: 1.5,
              },
              400: {
                slidesPerView: 2.2,
              },
              600: {
                slidesPerView: 2.8,
              },
              800: {
                slidesPerView: 3.2,
              },
              1000: {
                slidesPerView: 4.3,
              },
              1400: {
                slidesPerView: 4.6,
              },
              1550: {
                slidesPerView: 5.6,
              },
            }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: true,
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-slot="{isActive}"
              v-for="(item, index) in dataSlider"
              :key="item.id"
            >
              <div :class="[isActive ? 'roadmap_slide active' : 'roadmap_slide']">
                <VSvg
                  :style="[
                    isActive ? 'fill:#C2E978;' : 'fill:#7E839A;',
                    'transition: all 0.4s',
                  ]"
                  class="roadmap-slide_svg"
                  width="56"
                  height="56"
                  :id="item.icon"
                />

                <p class="roadmap-slide_text">{{ item.text }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </VContainer>
  </div>
</template>

<script setup>
import roadMapBg from '../../Image/RoadmapImg.png';
import VContainer from '../../UI/Container/VContainer.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Mousewheel} from 'swiper';
import 'swiper/css';
import VSvg from '../../UI/SVG/VSvg.vue';
import VHtag from '../../UI/Htag/VHtag.vue';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const modules = [Autoplay, Mousewheel];
const dataSlider = [
  {id: 1, text: 'Creation and design of a landing page', icon: 'roadmap1'},
  {id: 2, text: 'Design of seqchain.com website', icon: 'roadmap2'},
  {id: 3, text: 'Frontend and backend of seqchain.com website', icon: 'roadmap3'},
  {
    id: 4,
    text: 'Creation of smart contracts based on Ethereum & Solana networks',
    icon: 'roadmap4',
  },
  {id: 5, text: 'Drawing all stages of tree maturation as NFT images', icon: 'roadmap1'},
  {
    id: 6,
    text: 'Help create a new movement in the direction of the NFT trend',
    icon: 'roadmap2',
  },
  {id: 7, text: 'Become the owner of your own evergreen tree', icon: 'roadmap3'},
];
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  margin-bottom: 100px;
  height: auto;
}
.roadmap {
  height: 384px;
  min-height: 384px;
  width: 100%;

  z-index: 2;
  position: relative;
  display: flex;
  align-items: flex-end;
  &_title {
    padding-left: 75px;
    margin-bottom: 24px;
  }

  &_slide {
    min-height: 240px;
    max-width: 274px;
    background: #171b2b;
    padding: 37px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all ease 0.4s;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background-color: #032c1e;
      transition: all ease 0.6s;
      z-index: -1;
    }
    &.active {
      &::before {
        width: 100%;
      }
      .roadmap-slide_text {
        color: #ffffff;
      }
    }
  }

  &-slide {
    &_text {
      font-family: PlayfairDisplay;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      color: #7e839a;
      transition: all ease 0.4s;
    }
  }
  &_slider {
    width: 119%;
    height: auto;
  }
  &_image {
    height: 400px;
    width: 100%;
    position: absolute;
    object-fit: contain;
    top: -110px;
    left: -15px;
    z-index: -1;
  }
}
@media (max-width: 800px) {
  .wrapper {
    margin-bottom: 50px;
  }
  .roadmap {
    height: auto;
    min-height: auto;
    &_title {
      padding-left: 0px;
      margin-bottom: 20px;
    }
    &_image {
      display: none;
    }
  }
}

@media (min-width: 1550px) {
  .roadmap {
    &_slider {
      width: 130%;
      height: auto;
    }
  }
}
</style>

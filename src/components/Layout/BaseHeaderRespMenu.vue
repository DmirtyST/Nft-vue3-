<template>
  <nav class="headerRespMenu">
    <div class="headerRespMenu_image">
      <img :src="Leaf" alt="image" />
    </div>
    <div class="headerRespMenu_image">
      <img :src="Leaf2" alt="image" />
    </div>
    <div class="headerRespMenu_image">
      <img :src="Leaf2" alt="image" />
    </div>
    <ul class="headerRespMenu_links">
      <li class="headerRespMenu-links_list" v-for="item in dataLink" :key="item.id">
        <a @click="activeBurger" class="headerRespMenu-links_link" href="#">{{
          item.title
        }}</a>
      </li>
    </ul>
    <ul class="headerRespMenu_social">
      <li v-for="item in dataSocial" :key="item.id">
        <a href="#">
          <VSvg
            class="headerRespMenu_svg"
            :id="item.name"
            :width="item.w"
            :height="item.h"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import VSvg from '../UI/SVG/VSvg.vue';
import Leaf from '../Image/leaf.png';
import Leaf2 from '../Image/leaf2.png';
const props = defineProps({
  dataLink: {
    type: Array,
    required: false,
  },
  activeBurger: {
    type: Function,
    required: false,
  },
  dataSocial: {
    type: Array,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.headerRespMenu {
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-left: 40px;
  overflow: auto;
  position: relative;
  &_image {
    position: absolute;
    width: 80px;
    height: 80px;

    &:first-child {
      left: -5%;
      top: 0;
    }
    &:nth-child(2) {
      right: 0;
      bottom: 5%;
    }
    &:nth-child(3) {
      right: 0;
      top: 10%;
      transform: rotate(-90deg);
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &_links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
  }
  &-links {
    &_list {
      padding: 10px 0;
    }

    &_link {
      color: #ffffff;
      font-size: 25px;
      position: relative;
      z-index: 22;
      transition: all linear 0.4s;
      &:hover {
        color: #c2e978;
      }
    }
  }
  &_svg {
    transition: all ease 0.4s;
    fill: #e5e5e5;
    &:hover {
      fill: #c2e978;
      transition: all ease 0.4s;
      transform: scale(1.2);
    }
  }
  &_social {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
}
@media (max-width: 768px) {
  .headerRespMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &_links {
      align-items: center;
      margin-bottom: 20px;
    }
  }
}
</style>

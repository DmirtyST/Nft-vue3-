<template>
  <div class="header">
    <VContainer width="1124">
      <div class="header_row">
        <div class="header_box">
          <div class="header_logo">
            <router-link to="/">
              <img :src="Logo" alt="SequoiaNft" />
              ></router-link
            >
          </div>
          <nav class="header_nav">
            <ul class="header_lists">
              <li class="header_list" v-for="item in data" :key="item.id">
                <a class="header_link" href="#">{{ item.title }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <ul class="header_social">
          <li v-for="item in dataSocial" :key="item.id">
            <a href="#">
              <Svg class="header_svg" :id="item.name" :width="item.w" :height="item.h"
            /></a>
          </li>
        </ul>
      </div>
    </VContainer>
    <VBurgerMenu :burger="burger" :activeBurger="activeBurger">
      <BaseHeaderRespMenu
        :activeBurger="activeBurger"
        :data-link="data"
        :data-social="dataSocial"
      />
    </VBurgerMenu>
  </div>
</template>

<script setup>
import VContainer from '../UI/Container/VContainer.vue';
import Logo from '../Image/Logo.png';
import Svg from '../UI/SVG/VSvg.vue';
import VBurgerMenu from '../UI/BurgerMenu/VBurgerMenu.vue';
import BaseHeaderRespMenu from './BaseHeaderRespMenu.vue';
import {ref} from 'vue';
const burger = ref(false);
const activeBurger = () => {
  burger.value = !burger.value;
  if (burger.value === true) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
};
const data = [
  {id: 0, title: 'home'},
  {id: 1, title: 'sequoia'},
  {id: 2, title: 'purchasing'},
  {id: 3, title: 'classic'},
  {id: 4, title: 'airdrop'},
  {id: 5, title: 'tokemonics'},
  {id: 6, title: 'roadmap'},
  {id: 7, title: 'team'},
];
const dataSocial = [
  {id: 0, name: 'twit', w: '20', h: '20'},
  {id: 1, name: 'face', w: '20', h: '20'},
  {id: 2, name: 'inst', w: '20', h: '20'},
  {id: 3, name: 'youtube', w: '24', h: '22'},
];
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: black;
  &_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  &_nav {
    font-family: PlayfairDisplay;
    display: none;
  }
  &_lists {
    display: flex;
    gap: 24px;
  }

  &_link {
    color: #ffffff;
    transition: all linear 0.4s;
    &:hover {
      color: #c2e978;
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
  &_logo {
    width: 64px;
    height: 64px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
  &_box {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  &_social {
    align-items: center;
    gap: 24px;
    display: none;
  }
}

@media (min-width: 925px) {
  .header {
    position: static;
    padding: 45px 0px;
    &_social {
      display: flex;
    }

    &_nav {
      display: contents;
    }
  }
}
</style>

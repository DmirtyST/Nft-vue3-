<template>
  <div class="burgerMenu">
    <div
      @click="activeBurger"
      :class="burger === false ? 'burgerMenu_burger' : 'burgerMenu_burger active'"
    >
      <div
        :class="
          burger === false ? 'burgerMenu-burger_line' : 'burgerMenu-burger_line active'
        "
      ></div>
    </div>
    <div :class="burger === false ? 'burgerMenu_menu' : 'burgerMenu_menu active'">
      <div
        :class="
          burger === false ? 'burgerMenu-menu_aside' : 'burgerMenu-menu_aside active'
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>

.burgerMenu {
  &_menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(black, 0.5);
    left: 0;
    top: 0;
    z-index: 700;
    visibility: hidden;
    opacity: 0;
    transition: all ease 0.4s;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  }

  &-menu {
    &_aside {
      height: 100%;
      width: 100%;
      background-color: rgb(11, 10, 10);
      transform: translateX(-100%);
      transition: all ease 0.4s;
      overflow: auto;
      padding-bottom: 50px;
      color: white;
      &.active {
        transform: translateX(0%);
      }
    }
  }
  &_burger {
    width: 30px;
    height: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 42px;
    right: 15px;
    z-index: 900;
    cursor: pointer;
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: white;
      left: 0;
      transition: all ease 0.4s;
    }
    &::before {
      top: 1px;
    }
    &::after {
      bottom: 0;
    }
    &.active {
      &::before {
        transform: rotate(50deg);
        top: 10px;
      }
      &::after {
        transform: rotate(-50deg);
        bottom: 9px;
      }
    }
  }

  &-burger {
    position: relative;
    display: block;
    &_line {
      width: 100%;
      height: 2px;
      background-color: white;
      transition: all ease 0.4s;
      &.active {
        transform: translateX(-100%);
      }
    }
  }
}
@media (min-width: 776px) {
  .burgerMenu {
    &-menu {
      &_aside {
        width: 40%;
      }
    }
  }
}
@media (min-width: 925px) {
  .burgerMenu {
    display: none;
  }
}
</style>

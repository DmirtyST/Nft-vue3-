<template>
  <div :class="burger === false ? 'burgerMenu' : 'burgerMenu active'">
    <div @click="activeBurger" class="burgerMenu_burger">
      <div class="burgerMenu-burger_line"></div>
    </div>
    <div class="burgerMenu_menu">
      <div class="burgerMenu-menu_aside">
        <slot></slot>
      </div>
      <div @click="activeBurger" class="burgerMenu_body"></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    activeBurger: {
      type: Function,
      required: true,
    },
    burger: {
      type: Boolean,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .burgerMenu {
    &.active {
      .burgerMenu_menu {
        visibility: visible;
        opacity: 1;
      }
      .burgerMenu-menu_aside {
        transform: translateX(0%);
        opacity: 1;
      }
      .burgerMenu_burger {
        &::before {
          transform: rotate(50deg);
          top: 10px;
        }
        &::after {
          transform: rotate(-50deg);
          bottom: 9px;
        }
      }
      .burgerMenu-burger_line {
        transform: translateX(-110%);
      }
      .burgerMenu_body {
        transform: translateX(-0%);
      }
    }

    &_menu {
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      left: 0;
      top: 0;
      z-index: 700;
      visibility: hidden;
      opacity: 0;
      transition: all ease 0.4s;
    }

    &_body {
      width: 0;
      height: 100vh;
      background-color: rgba(black, 0.5);
      transition: all linear 0.4s;
      transform: translateX(-100%);
      display: none;
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
        opacity: 0;
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
    }

    &-burger {
      position: relative;
      display: block;
      &_line {
        width: 100%;
        height: 2px;
        background-color: white;
        transition: all ease 0.4s;
      }
    }
  }
  @media (min-width: 776px) {
    .burgerMenu {
      &_body {
        width: 60%;
        display: unset;
      }
      &-menu {
        &_aside {
          transition: all linear 0.4s;
          width: 40%;
        }
      }
    }
  }
  @media (min-width: 1050px) {
    .burgerMenu {
      display: none;
    }
  }
</style>

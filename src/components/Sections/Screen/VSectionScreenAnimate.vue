<template>
  <div>
    <div class="animate">
      <div class="animate_item"><img :src="Leaf" alt="Leaf" /></div>
      <div class="animate_item"><img :src="LeafTwo" alt="Leaf" /></div>
      <div class="animate_item"><img :src="Leaf" alt="Leaf" /></div>
      <div class="animate_item"><img :src="LeafTwo" alt="Leaf" /></div>
      <div class="animate_item"><img :src="Leaf" alt="Leaf" /></div>
      <div class="animate_item"><img :src="LeafTwo" alt="Leaf" /></div>
    </div>
  </div>
</template>

<script setup>
import Leaf from '../../Image/leaf.png';
import LeafTwo from '../../Image/leaf2.png';
</script>

<style lang="scss" scoped>
.animate {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  &_item {
    position: relative;
    width: 41px;
    height: 36px;
    z-index: 1;
    top: -100%;
    &:first-child {
      animation: leafFirst 4.5s linear 0.6s infinite;
      left: 5%;
    }
    &:nth-child(2) {
      animation: leaftwo 4.5s linear 2s infinite;
    }
    &:nth-child(3) {
      animation: leafthree 4.5s linear 4s infinite;
    }
    &:nth-child(4) {
      animation: leaffour 4.5s linear 3s infinite;
    }
    &:nth-child(5) {
      animation: leaffive 4.5s linear 5s infinite;
    }
    &:last-child {
      animation: leafsix 4.5s linear 3.6s infinite;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @keyframes leafFirst {
      0% {
        top: 0%;
        left: 5%;
        transform: rotate(0deg);
      }

      100% {
        left: 5%;
        top: 100%;
        transform: rotate(360deg);
      }
    }
    @keyframes leaftwo {
      0% {
        top: 0%;
        left: 25%;
        transform: rotate(0deg);
      }

      100% {
        left: 25%;
        top: 100%;
        transform: rotate(360deg);
      }
    }
    @keyframes leafthree {
      0% {
        top: 0%;
        left: 45%;
        transform: rotate(0deg);
      }

      100% {
        left: 45%;
        top: 100%;
        transform: rotate(360deg);
      }
    }
    @keyframes leaffour {
      0% {
        top: 0%;
        left: 70%;
        transform: rotate(0deg);
      }

      100% {
        left: 70%;
        top: 100%;
        transform: rotate(360deg);
      }
    }
    @keyframes leaffive {
      0% {
        top: 0%;
        left: 85%;
        transform: rotate(0deg);
      }

      100% {
        left: 85%;
        top: 100%;
        transform: rotate(360deg);
      }
    }
    @keyframes leafsix {
      0% {
        top: 0%;
        left: 95%;
        transform: rotate(0deg);
      }

      100% {
        top: 100%;
        left: 95%;
        transform: rotate(360deg);
      }
    }
  }
}
</style>

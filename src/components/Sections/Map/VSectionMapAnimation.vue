<template>
  <ul class="AnimationMap">
    <li class="AnimationMap_item">
      <img
        class="sectionMap_gif"
        src="https://i.gifer.com/origin/2f/2f49e6458f8d83c3729220083495ff4e_w200.gif"
        alt=""
      />
    </li>
    <li class="AnimationMap_item">
      <img
        class="sectionMap_gif"
        src="https://i.gifer.com/origin/2f/2f49e6458f8d83c3729220083495ff4e_w200.gif"
        alt=""
      />
    </li>
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped>
.AnimationMap {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  &_item {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: -15px;
    right: -50px;
    &:first-child {
      animation: deer 10s linear 0.6s infinite;
      filter: brightness(15);
    }
    &:last-child {
      animation: deer 10s linear 5s infinite;
      filter: brightness(0);
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
}

@keyframes deer {
  0% {
    right: -50px;
    bottom: -15px;
  }
  100% {
    bottom: -15px;
    right: 100%;
  }
}
</style>

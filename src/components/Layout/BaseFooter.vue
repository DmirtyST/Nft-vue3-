<template>
  <div class="footer">
    <VContainer width="1128">
      <div class="footer_row">
        <div class="footer_title">
          <VHtag size="xl" size-sub="xl">
            share with friends
            <template v-slot:span>do you like it?</template>
          </VHtag>
        </div>
        <div class="footer_image">
          <img :src="footerImg" alt="image" />
        </div>
        <ul class="footer_icons">
          <li v-for="item in dataSocial" :key="item.id">
            <a href="#">
              <VSvg class="footer_svg" :width="item.w" :height="item.h" :id="item.icon" />
            </a>
          </li>
        </ul>
      </div>
    </VContainer>
    <div class="footer_sub">© 2021 Sequioa nft park</div>
  </div>
</template>

<script setup>
  import VContainer from '../UI/Container/VContainer.vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VSvg from '../UI/SVG/VSvg.vue';
  import footerImg from '../Image/footerImg.png';
  const dataSocial = [
    {id: 1, w: '56', h: '50', icon: 'twitter'},
    {id: 2, w: '56', h: '56', icon: 'facebook'},
    {id: 3, w: '56', h: '56', icon: 'instagram'},
  ];
</script>

<style lang="scss" scoped>
  .footer {
    min-height: 310px;
    padding: 50px 0;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 60px;

    &_image {
      img {
        position: absolute;
        height: 366px;
        width: 366px;
        top: -75px;
        left: 40%;
        transform: translateX(-50%);
        object-fit: contain;
      }
    }
    &_icons {
      align-items: center;
      display: inline-flex;
      gap: 64px;
    }
    &_svg {
      transition: linear 0.4s all;
      &:hover {
        opacity: 0.6;
        transition: linear 0.4s all;
      }
    }
    &_sub {
      font-size: 17px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0.05em;
      text-align: center;
    }
    &_row {
      background: linear-gradient(180deg, #201841 0%, #2c205d 100%);
      min-height: 207px;
      padding: 0 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      position: relative;
    }
  }
  @media (max-width: 880px) {
    .footer {
      gap: 30px;
      padding: 30px 0;
      min-height: auto;
      &_image {
        display: none;
        img {
        }
      }
      &_title {
        text-align: center;
      }
      &_row {
        background: linear-gradient(180deg, #201841 0%, #2c205d 100%);
        min-height: auto;
        padding: 20px 80px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 25px;
      }
    }
  }
  @media (max-width: 400px) {
    .footer {
      &_row {
        padding: 20px 50px;
      }
      &_icons {
        display: flex;
        align-items: center;
        gap: 30px;
      }
    }
  }
</style>

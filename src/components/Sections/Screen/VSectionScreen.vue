<template>
  <section id="home" class="screen">
    <div class="screen_row">
      <picture>
        <source :srcset="screenBgWebp" />
        <img class="screen-row_img" :src="screenBg" alt="bg-home" />
      </picture>
      <VSectionScreenAnimate />
      <VContainer width="950">
        <div class="screen_item">
          <div class="screen_titles">
            <span class="screen-titles_sub">welcome to</span>
            <h1 class="screen-titles_title">Sequoia NFT Park</h1>
          </div>
          <div class="screen_description">
            <h2 class="screen-description_title">social-ecological project</h2>
            <p class="screen-description_text">
              The goal of the project is to make the most out of the NFT hype wave for the
              good of our planet and its ecology.
            </p>
            <p class="screen-description_text">
              We want to set a new trend in the development of NFT projects and direct the
              energy of creativity and the power of modern technology to solve real social
              problems in our society.
            </p>
          </div>
        </div>
      </VContainer>
    </div>
  </section>
</template>

<script setup>
  import screenBg from '../../Image/screen.png';
  import screenBgWebp from '../../Image/screen.webp';
  import VContainer from '../../UI/Container/VContainer.vue';
  import VSectionScreenAnimate from './VSectionScreenAnimate.vue';
</script>

<style lang="scss" scoped>
  .screen {
    height: auto;
    margin-bottom: 80px;
    &_row {
      position: relative;
      min-height: 500px;
      padding: 10px 0;
      width: 100%;
      z-index: 1;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }
    &-row {
      &_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
    }

    &_item {
      width: 60%;
      position: relative;
      z-index: 1;
    }
    &-titles {
      &_sub {
        font-size: 32px;
        font-weight: 400;
        line-height: 39px;
      }

      &_title {
        font-size: 90px;
        font-weight: 400;
        line-height: 110px;
        color: #c2e978;
        margin-bottom: 50px;
        padding-left: 20px;
      }
    }

    &-description {
      &_title {
        font-size: 40px;
        font-weight: 400;
        line-height: 49px;
        margin-bottom: 18px;
      }

      &_text {
        font-family: PlayfairDisplay;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 12px;
        padding-left: 20px;
      }
    }
  }

  @media (max-width: 1050px) {
    .screen {
      padding-top: 104px;
      height: auto;
      margin-bottom: 50px;
      &_row {
        min-height: auto;
      }
      &-titles {
        &_sub {
          font-size: 30px;
          line-height: 35px;
        }

        &_title {
          font-size: 76px;
          line-height: 90px;
          margin-bottom: 30px;
          padding-left: 20px;
        }
      }
      &-description {
        &_title {
          font-size: 36px;
          line-height: 40px;
        }

        &_text {
          font-size: 18px;
          line-height: 28px;
        }
      }
    }
  }

  @media (min-width: 1550px) {
    .screen {
      &_row {
        min-height: 558px;
      }
    }
  }

  @media (max-width: 720px) {
    .screen {
      &_row {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 0;
      }
      &_titles {
        text-align: center;
      }
      &-titles {
        &_sub {
          font-size: 30px;
          line-height: 35px;
        }

        &_title {
          padding-left: 0px;
        }
      }
      &_item {
        width: 100%;
        position: relative;
        z-index: 1;
      }
    }
  }
  @media (max-width: 600px) {
    .screen {
      &-row {
        &_img {
          object-position: top left;
        }
      }
    }
  }
  @media (max-width: 425px) {
    .screen {
      &-titles {
        &_title {
          font-size: 55px;
          line-height: 70px;
        }
      }
      &-description {
        &_title {
          font-size: 33px;
        }
        &_text {
          padding-left: 0px;

          &:last-child {
            display: none;
          }
        }
      }
    }
  }
</style>

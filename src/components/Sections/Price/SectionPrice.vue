<template>
  <VContainer width="1128">
    <section id="classic" class="price">
      <div class="price_row">
        <div class="price_title">
          <VHtag size="lg" size-sub="lg">
            The value of the NFT token is calculated

            <template v-slot:span>
              <div class="price-title_row">
                <div class="price-title_sub">using the following formula:</div>
                <div class="price-title_image">
                  <img :src="priceArrow" alt="arrow" />
                </div>
              </div>
            </template>
          </VHtag>
        </div>
        <div class="price_itemCalc">
          <img class="price-itemCalc_rounded" :src="priceRounded" alt="image-price" />
          <div class="price-itemCalc_title">1.5 * 1 hectare * plot area</div>
          <div class="price-itemCalc_line"></div>

          <div class="price-itemCalc_sub">number of sequoias</div>
        </div>
      </div>
      <div class="price_box">
        <VContainer width="985">
          <div class="price-box_row">
            <div class="price-box_image">
              <img :src="priceResult" alt="price" />
            </div>

            <VButton color="big">buy tree</VButton>
          </div>
        </VContainer>
      </div>
    </section>
  </VContainer>
</template>

<script setup>
  import VContainer from '../../UI/Container/VContainer.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import priceArrow from '../../Image/priceArrow.png';
  import priceRounded from '../../Image/priceRounded.png';
  import VButton from '../../UI/Button/VButton.vue';
  import priceResult from '../../Image/priceResult.png';
</script>

<style lang="scss" scoped>
  .price {
    min-height: 344px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_box {
      min-height: 188px;
      background-color: #1d201a;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-box {
      &_row {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
        height: 100%;
      }

      &_image {
        position: relative;
        width: 73%;
        height: 108px;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    &_row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 53px;
      padding-bottom: 10px;
    }
    &_itemCalc {
      width: 222px;
      font-family: StoneSoup;
      font-size: 27px;
      font-weight: 400;
      line-height: 27px;
      color: #ffffff;
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    &-itemCalc {
      &_rounded {
        height: 130px;
        width: 200px;
        position: absolute;
        top: -40px;
        left: 17px;
        transform: rotate(-10deg);
      }

      &_line {
        height: 2px;
        background-color: white;
        width: 100%;
      }
    }
    &_title {
      display: inline-block;
      text-align: center;
      padding-right: 30px;
    }

    &-title {
      &_sub {
      }
      &_row {
        text-align: center;
        position: relative;
      }

      &_image {
        width: 50px;
        height: 37px;
        top: 50%;

        transform: translateY(-50%);
        right: -29px;
        position: absolute;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .price {
      min-height: auto;
      margin-bottom: 50px;

      &_itemCalc {
        display: none;
      }
      &_title {
        padding-right: 0px;
        margin-bottom: 20px;
      }
      &-title {
        &_image {
          display: none;
        }
      }

      &_box {
        min-height: auto;
        padding: 20px 0;
        align-items: center;
      }
      &-box {
        &_row {
          justify-content: center;
          flex-wrap: wrap;
        }

        &_image {
          width: 100%;
        }
      }
    }
  }
</style>

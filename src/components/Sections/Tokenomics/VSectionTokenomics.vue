<template>
  <VContainer width="1128">
    <div class="tokenomics">
      <VContainer width="950">
        <div class="tokenomics_row">
          <div class="tokenomics_title">
            <VHtag :icon="true" size-sub="xl">
              <template v-slot:span>Tokenomics</template>
            </VHtag>
          </div>
          <div class="tokenomics_content">
            <VTypography size="md"
              >Each NFT tree token generates acertain number of ERC20 standard tokens (SEQ
              Token).</VTypography
            >
            <ul class="tokenomics-content_lists">
              <li class="tokenomics-content_list">
                <div class="tokenomics-content_list_number">1</div>
                <VTypography size="md"
                  >Each tree generates 1,000 SEQ tokens per day</VTypography
                >
              </li>
              <li class="tokenomics-content_list">
                <div class="tokenomics-content_list_number">2</div>
                <VTypography size="md"
                  >Every month the number of generated tokens increases by
                  100</VTypography
                >
              </li>
              <li class="tokenomics-content_list">
                <div class="tokenomics-content_list_number">3</div>
                <VTypography size="md"
                  >You must burn 30,000 tokens to change the name of the tree</VTypography
                >
              </li>
            </ul>
            <VTypography size="sm"
              >The owner of a SEQ token may purchase items to enoble his tree. For
              example, you can buy Christmas decorations, order a drone shot of your tree,
              and more.</VTypography
            >
          </div>
        </div>
      </VContainer>
    </div>
  </VContainer>
</template>

<script setup>
import VContainer from '../../UI/Container/VContainer.vue';
import VHtag from '../../UI/Htag/VHtag.vue';
import VTypography from '../../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
.tokenomics {
  min-height: 400px;
  background: linear-gradient(180deg, #131624 0%, #191d2e 100%);
  padding: 60px 0;
  position: relative;
  margin-bottom: 30px;
  &_row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 50px;
  }

  &_content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &-content {
    &_list {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: PlayfairDisplay;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 7px;
      color: #ffffff;
      &_number {
        color: #c2e978;
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        background-color: #272f30;
        padding: 1px 8px;
        border-radius: 10px;
      }
    }
  }
}

@media (max-width: 800px) {
  .tokenomics {
    min-height: auto;
    padding: 40px 0;
    margin-bottom: 50px;
    &_row {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>

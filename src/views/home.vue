<template>
  <VContainer width="1250">
    <VSectionSreen />
    <VSectionMap />
    <VSectionBanner />
    <VSectionParameter />
    <VSectionBenefits />
    <VSectionPrice />
    <VSectionCollection />
    <VSectionTokenomics />
  </VContainer>
  <VSectionRoadmap />
  <VContainer width="1250">
    <VSectionTeam />
  </VContainer>
</template>

<script setup>
  import VContainer from '../components/UI/Container/VContainer.vue';
  import VSectionSreen from '../components/Sections/Screen/VSectionScreen.vue';
  import VSectionBanner from '../components/Sections/Banner/SectionBanner.vue';
  import VSectionMap from '../components/Sections/Map/VSectionMap.vue';
  import VSectionParameter from '../components/Sections/Parameter/SectionParameter.vue';
  import VSectionBenefits from '../components/Sections/Benefits/VSectionBenefits.vue';
  import VSectionPrice from '../components/Sections/Price/SectionPrice.vue';
  import VSectionCollection from '../components/Sections/Collection/VSectionCollection.vue';
  import VSectionTokenomics from '../components/Sections/Tokenomics/VSectionTokenomics.vue';
  import VSectionRoadmap from '../components/Sections/Roadmap/VSectionRoadmap.vue';
  import VSectionTeam from '../components/Sections/Team/VSectionTeam.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <section class="team">
    <div class="team_title">
      <VHtag size="xxl">team</VHtag>
    </div>
    <VContainer width="1128">
      <div class="team_row">
        <div v-for="item in dataItem" :key="item.id" class="team_item">
          <div :style="{'background-color': item.color}" class="team-item_eclipse">
            <img class="team-item_img" :src="item.img" alt="team-profile" />
          </div>
          <div class="team-item_title">{{ item.title }}</div>
          <div class="team-item_text">{{ item.desc }}</div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
import VContainer from '../../UI/Container/VContainer.vue';
import VHtag from '../../UI/Htag/VHtag.vue';
import teamImg1 from '../../Image/team1.png';
import teamImg2 from '../../Image/team2.png';
import teamImg3 from '../../Image/team3.png';
import teamImg4 from '../../Image/team4.png';
import teamImg5 from '../../Image/team5.png';
const dataItem = [
  {
    id: 1,
    color: '#3DDD4D',
    title: 'Alexandr R B',
    desc: 'ideologist, visionary, philanthropist and billionaire',
    img: teamImg1,
  },
  {
    id: 2,
    color: '#3DDDB7',
    title: 'Alexandr Drugov',
    desc: 'rugged Russian man and designer from God',
    img: teamImg2,
  },
  {
    id: 3,
    color: '#DD3DCD',
    title: 'Semyon Muntian',
    desc: 'plays guitar and creates together with Drugov',
    img: teamImg3,
  },
  {
    id: 4,
    color: '#673DDD',
    title: 'Vladimir Lukashev',
    desc: 'manages the product, dreams of trillions',
    img: teamImg4,
  },
  {
    id: 5,
    color: '#DD943D',
    title: 'Arkady Grossu',
    desc: 'helps us all be focused.',
    img: teamImg5,
  },
];
</script>

<style lang="scss" scoped>
.team {
  min-height: 450px;

  &_title {
    margin-bottom: 80px;
    text-align: center;
  }
  &_row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    gap: 19px;
  }
  &_item {
    min-height: 329px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    font-family: PlayfairDisplay;
    color: #ffffff;
  }
  &-item {
    &_eclipse {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 20px;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &_title {
      font-size: 17px;
      font-weight: 700;
      line-height: 28px;
    }
    &_text {
      font-size: 11px;
      font-style: italic;
      font-weight: 400;
      line-height: 18px;
    }
  }
}

@media (max-width: 1200px) {
  .team {
    &_row {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
}

@media (max-width: 776px) {
  .team {
    &_row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 535px) {
  .team {
    &_row {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>

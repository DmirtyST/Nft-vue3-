<template>
    <div class="progress">
        <span class="progress_percent">{{percent}}%</span>
       <svg width="120" height='120' viewBox="0 0 120 120" class="progress_svg">
        <circle cx="60" cy="60" r="54" fill="none" :stroke="`var(--${color})`" stroke-width="12"></circle>
        <circle :style="{'stroke-dashoffset': 100 - percent}" class="progress_line" cx="60" cy="60" r="54" fill="none" :stroke="`var(--${color}-hover)`" stroke-width="12" pathLength="100"></circle>
       </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    percent:{
    type:Number,
    default:0,
    },
    color:{
    type:String,
    default:'orange'
    }
})
</script>

<style lang="scss" scoped>
.progress{
    position: relative;
    width: 120px;
    height: 120px;

&_percent{
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
font-weight: bold;
}
&_svg{
    transform: rotate(-90deg);
    
}
&_line{
    stroke-dasharray: 100;
    transition: .9s;
}
}
</style>
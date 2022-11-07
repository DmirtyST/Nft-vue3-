<template>
    <div class="progress-container" :style="{'max-width':maxWidth}">
    <span class="progress_percent">Progress percent:{{percent}}%</span>
    <div class="progress" :style="{'background-color':`var(--${color})`}">
        <div class="progress_bar" :style="[{'width':`${percent}%`},{'background-color':`var(--${color}-hover)`}]"></div>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    maxWidth:{
    type:String,
    default:'500px'
    },
    percent:{
    type:Number,
    },
    color:{
    type:String,
    default:'red'
    },
    
})
</script>

<style lang="scss" scoped>
.progress-container{
overflow: hidden;
border-radius: 8px;
}
.progress {
height: 10px;
margin: 20px 5px;
border-radius: 8px;
transition: .4s;

}
.progress_bar {
height: 100%;
transition: .4s;
border-radius: 8px;

}
.progress_percent {
display: block;
text-align: center;
font-size: 17px;
}


</style>
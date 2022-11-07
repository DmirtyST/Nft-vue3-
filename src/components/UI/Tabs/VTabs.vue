<template>
    <div >
        <ul class="tabs_nav">
           <li @click="clickOnTab(tabs.name)" v-for="tabs in names" :key="tabs.id" :class="tabs.name === select ? 'tabs_item select' : 'tabs_item' ">{{tabs.label}}</li> 
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
names:{
type:Array,
required:true,
},
select:{
type:String,
required:false,
}
})
const emit = defineEmits(['chageTab'])
const clickOnTab = (tabName)=>{
    emit('chageTab',tabName)
}
</script>

<style lang="scss" scoped>

.tabs_nav{
display: inline-block;
flex-direction: column;


}
.tabs_item{
    background-color: red;
    margin: 10px;
    padding: 5px;
    opacity: 0;
    transition: all ease .4s;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select{
    background-color: #1C2137;
    color: white;
    opacity: 1;
    
   
}
</style>
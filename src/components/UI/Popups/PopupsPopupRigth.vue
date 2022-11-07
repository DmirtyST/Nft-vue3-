<template>
    <div class="popup">
        <div :style="{'justify-content':popupPosition,'padding':`${padding}px 0px`}" :class="isOpen === false ? 'popup_container': 'popup_container containerActive'">
        <div :class="isOpen === false ? 'popup_content': 'popup_content contentActive'">
        <div @click="togglePopup" class="popup_close">
            <VSvg width="20px" height="20px" id="close"/>
        </div>
        <slot></slot>
        </div>
        </div>
        <div @click="togglePopup" class="popup_button">
            <slot name="button"> </slot>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import VSvg from '../SVG/VSvg.vue';
const props = defineProps({
button:{
type:Array,
default:'Активный попап'
},
popupPosition:{
type:String,
default:'flex-end'
},
padding:{
type:String,
default:'0'
},
})
const isOpen = ref(false)
const togglePopup = ()=>{
isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.popup{

&_content{
    opacity: 0;
    transition: all ease .5s;
    height: 100%;
    width: 700px;
    background-color: #141dc3;
    position: relative;
    transform: translateX(100%);
}
&_container{
    opacity: 0;
    transition: all ease .5s;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
   
    display: flex;
    visibility: hidden;
    z-index: 9999;
    overflow: hidden;
}
&_close{
    position: absolute;
    right: 38px;
    top: 48px;
    cursor: pointer;
}
.contentActive{
    opacity: 1;
    transform: translateX(0%);
}
.containerActive{
    opacity: 1;
    visibility: visible;
}
&_button{

}
}
</style>
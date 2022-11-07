<template>
    <div class="form_controller">
    <TransitionGroup name="error">
        <div v-for="element of error" :key="element.$uid" class="form_error">
            <div class="form_error-message">
            {{element.$message}}
        </div>
    </div>
   </TransitionGroup>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
error:{
    type:Array,
    required:false,
},
})
</script>

<style lang="scss" scoped>
.form_controller{
position: relative;
padding: 18px 20px;
background-color: #ffff;

}

.form_error-message{
position: absolute;
top: 100%;
left: 0;
color: red;
}
.error-enter-active,
.error-leave-active {
  transition: all 0.5s ease;
 
  
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
  
}
</style>
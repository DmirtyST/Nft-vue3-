<template>
    <div>
        <div >
        <VForm :submit="submitForm" padding-x="15" padding-y="25" gap="20" width="350">
            <VFormConroller :error="v.email.$errors">
                <VFormInput v-model:value="v.email.$model"  name='email' placeholder="Имя"/>
            </VFormConroller>
            <VFormConroller :error="v.number.$errors">
                <VFormInput v-model:value="v.number.$model"  name='number' placeholder="Номер телефона"/>
            </VFormConroller>
            <VButton>Получить расчет</VButton>
        </VForm>
    </div>
    
    </div>
    
</template>

<script setup>
import VForm from '../FormElements/VForm.vue';
import VFormInput from '../FormElements/VFormInput.vue';
import VFormConroller from '../FormElements/VFormConroller.vue';
import { useVuelidate } from '@vuelidate/core'
import {rules} from './FormsValidator'
import {reactive} from 'vue'
import VButton from '../Button/VButton.vue';
const data = reactive({
    email:'',
    number:'',
})
const v = useVuelidate(rules, data)
const submitForm = ()=>{
   v.value.$touch()
   if(v.value.$error) return
   alert('Отправлено')
}

</script>


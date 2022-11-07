import {computed} from 'vue'
import {email,maxLength,helpers,required} from '@vuelidate/validators'
export const rules = computed(() => ({
    email: {
        required:helpers.withMessage('Обязательно для заполнения',required),
        email: helpers.withMessage('Введите коректный email',email)
      },
    number:{
        required:helpers.withMessage('Обязательно для заполнения',required),
        maxLength: helpers.withMessage('Введите коректный номер',maxLength(6))
    }
}))
<script setup lang="ts">
import type { NumericLiteral } from 'typescript';
import type {User} from '@/types/defaults';
import { ref } from 'vue';

// const userProps= defineProps<{
//     id:number,
//     name:string,
//     age:number
// }>()
const inputValue = ref<string>("");

const handleChange =(e: Event)=>{
    console.log('HandleChange',e.target);
    const input = e.target as HTMLInputElement;
    inputValue.value= input.value;
};

const userProps= defineProps<User>()

</script>
<template>
    <div class="flex mt-6">
        <h2> User Details</h2>
        <p class="p-4  text-black-800">
            id:{{ userProps.id }} <br>
            User Name : {{ userProps.name }} <br>
            Age : {{ userProps.age }}

        </p>
      
    </div>
    <span class="text-indigo-400">{{ inputValue }}</span>
    <input type="text" @change="handleChange" class="border-2 border-indigo=400">
</template>
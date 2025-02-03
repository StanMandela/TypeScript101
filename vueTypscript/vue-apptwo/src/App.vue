<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { Ref } from 'vue';
import Header from './components/Header.vue';
import UserDetails from './components/UserDetails.vue';
import type {User} from './types/defaults';
import Emits from './components/Emits.vue';
//one way to declare types
const name :Ref<string> =ref("Tom");
 type Color = "red"|"green"|"white";

 //locally defined User type 
//  interface User{
//     id:number,
//     name:string,
//     age:number
//  }


    // second way
const ageOne = ref <number>(18);
const color = ref<Color| null >('green');

const user :User = reactive({
    id:123,
    name:"Tony",
    age:36
});
//can reassign age/name with same kind of values
user.name="Johne";

//computed Properties
const isAdult= computed(()=>user.age>18);
console.log("Computed", typeof(isAdult.value))

const msg= ref<string>('Hello TypeScript');
    
const age :Ref<number  | null> = ref(16);
    age.value = null;

 const handleEmitChange=(name :string, age:number)=>{
    console.log("Name is ", name);
    console.log("Age is ", age);
 }   

</script>

<template>
<Header :msg="msg" />
<UserDetails :id="user.id" :name="user.name" :age="user.age" />
<Emits @change="handleEmitChange" />
</template>

<style scoped>

</style>

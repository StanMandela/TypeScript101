<template>
  <div class="app">

    <button @click="handleClick('title')">Order By title</button>
    <button @click="handleClick('salary')">Order By Salary</button>
    <button @click="handleClick('location')">Order By Loaction</button>

   <JobsList :jobs="jobs" :order="order"/>
   {{ name }}

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs ,ref } from 'vue';
import JobsList from './components/JobsList.vue';
import Job from './types/Job';
import OrderTerm from './types/OrderTerm';


export default defineComponent({
  name: 'App',
  components: {JobsList},

  
  //using composition api
  setup(){

    /* composition api using reactive */
    const state= reactive({
      name:'Link',
      age: 25 as number | string
    })
    // state.name=999

    // return{...toRefs(state)}

  /* composition api using refs we use generic types insteaad of  type assertions */
    // const name = ref('link')
    // const age = ref<number|string>(25)

    // return{ name,age}

    const jobs = ref<Job[]>([
      {title:'Farm Worker',location:'Nairobi', salary:5000,id:'1'},
      {title:'Factory Worker',location:'Nairobi', salary:5600,id:'2'},
      {title:'Cleaner',location:'Nairobi', salary:4500,id:'3'},
      {title:'Tailor',location:'Mombasa', salary:5540,id:'4'},
      {title:'Eletrician',location:'Kisumu', salary:5090,id:'5'}
    ])
    const order = ref<OrderTerm>('title');
    const changeName =(name:string)=>{
      state.name = name
    }

    const handleClick =(term:OrderTerm)=>{
      order.value = term
    }

    return {jobs, handleClick, order, ...toRefs(state)};
  },
  // methods:{
  //   changeName(name :string){
  //     this.name =name
  //   },
  //   changeAge(age:number|string|boolean){
  //     this.age = age

  //   }
  // }
});
</script>

<style>

</style>
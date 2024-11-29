<template>
  <div class="app">
   {{name}}-{{ age }}
   <button @click="changeName('Imelda')">Change Name</button>
   <button @click="changeAge(30)">Change Age</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data(){
    return{
      name:'hkjjs',
      age:24 as number|string
    }
  },
  methods:{
    changeName(name :number){
      this.name= name
    },
    changeAge(age:number|string|boolean){
      this.age = age

    }
  }
});
</script>

<style>

</style>
<script setup lang="ts">
//define Emits without a paramenter
//defineEmits(["change"]);

/* define emites with paramenter locally
 */

 // defineEmits<{
//     (e: "change",
//     name:string):void;
// }>();

/* define emts well using 
 */
 defineEmits<{
    change : [name:string, age:number]
 }>();


 const name :string = "Mandela"

</script>
<template>
    <button class="border-2 border-indigo-400" @click="$emit('change',name,45)">
        click Me
    </button>
</template>
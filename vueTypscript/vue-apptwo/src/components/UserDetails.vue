<script setup lang="ts">
import type { NumericLiteral } from 'typescript';

const userProps= defineProps<{
    id:number,
    name:string,
    age:number
}>()

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
</template>
<script setup lang="ts">
const props = defineProps<{
    msg:string
}>()
</script>
<template>
    <h1 class="text-4xl font-bold text-white-800">{{ props.msg }}</h1>
</template>

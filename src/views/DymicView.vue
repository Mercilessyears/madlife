<template>
    <component :is="componentId"></component>
</template>

<script lang="ts" setup>
import { markRaw, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ThreeBuilding from '@/components/ThreeBuilding/index.vue'


const componentId = ref<any>(ThreeBuilding)

// onMounted(() => {
//     console.log(route.params);
// })
</script>
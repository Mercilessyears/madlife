<template>
<NConfigProvider :theme="theme">
  <Application>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </Application>
</NConfigProvider>
</template>

<script setup lang="ts">
import {NConfigProvider,darkTheme} from 'naive-ui'
import { Application } from './components/Application';
import { computed, ref } from 'vue';
import { useProjectStore } from './store/project';
const project = useProjectStore()
const theme = computed(()=> project.getTheme)

</script>




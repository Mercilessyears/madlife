<template>
<NConfigProvider :theme="theme">
  <Application>
      <router-view v-slot="{Component}">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </router-view>
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




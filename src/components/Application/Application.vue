<template>
    <NLoadingBarProvider>
        <NDialogProvider>
            <NNotificationProvider>
                <NMessageProvider>
                    <slot name="default"></slot>
                </NMessageProvider>
            </NNotificationProvider>
        </NDialogProvider>
        
    </NLoadingBarProvider>
</template>
<script lang="ts" setup>
import { NLoadingBarProvider,NNotificationProvider,NMessageProvider,NDialogProvider } from 'naive-ui';
</script>

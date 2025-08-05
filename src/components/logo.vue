<script setup>
    import Title from './Title.vue'

    defineProps({
        infoData: Object
    });

</script>

<template>
    <div class="content_wrap hidden">
        <Title :infoData="infoData" />
        <div class="logo_box max-w-[1366px] p-10 mx-auto">
            
        </div>
    </div>
</template>

<style scoped>

</style>
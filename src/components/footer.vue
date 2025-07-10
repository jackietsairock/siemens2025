<script setup>
    defineProps({
        footerInfo: Object
    });
</script>

<template>
    <div class="footer_area w-full">
        <div class="footer_box flex flex-col gap-3 max-w-[100%] mx-auto py-0 px-10 text-center" style="color:#666866">
            <p class="text-md font-bold">{{footerInfo.text}}</p> 
            <p class="text-sm font-bold mb-30">{{footerInfo.copyright}}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
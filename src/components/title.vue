<script setup>
    defineProps(
        {
            infoData: Object
        }
    );
</script>

<template>
    <div class="title_area w-full text-center pb-[35px]">
            <div class="title_box w-fit py-5 mx-auto">
                <h1 :style="{ color: infoData.titleColor}" class="title text-5xl sm:text-6xl">{{ infoData.title }}</h1>
            </div>
    </div>
</template>

<style scoped>
</style>
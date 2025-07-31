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
            <div class="title_line" :style="{ borderTop: `1px solid ${infoData.titleEnColor}` }"></div>
            <h2 :style="{ color: infoData.titleEnColor}" class="title_en text-3xl sm:text-4xl">{{ infoData.titleEn }}</h2>
        </div>
    </div>
</template>

<style scoped>
    .title_line{
        position: relative;
        display: block;
        width: 30%;
        border-top: 1px solid #5e74f3;
        margin: 1rem auto 0.5rem auto;
    }
    h2{
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.3rem;
    }
</style>
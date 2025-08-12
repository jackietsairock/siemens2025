<script setup>
    import Title from './title.vue'

    const withBase = (p) => (p?.startsWith('/') ? import.meta.env.BASE_URL + p.slice(1) : p)

    defineProps({
        infoData: Object
    });

</script>

<template>
    <div class="content_wrap hidden">
        <Title :infoData="infoData" />
        <div class="logo_box max-w-[1366px] p-10 mx-auto flex flex-row gap-10 flex-wrap lg:gap-18">
            <img :src="withBase('logo1.svg')" class="logo_img" alt="logo_img" />
            <img :src="withBase('logo2.svg')" class="logo_img" alt="logo_img" />
            <img :src="withBase('logo3.svg')" class="logo_img" alt="logo_img" />
            <img :src="withBase('logo4.svg')" class="logo_img" alt="logo_img" />
            <img :src="withBase('logo5.svg')" class="logo_img" alt="logo_img" />
        </div>
    </div>
</template>

<style scoped>
    .logo_box img{
        height: 105px;
        margin: 0 auto;
    }

</style>
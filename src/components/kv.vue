<script setup>
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    import { getWindowWidth, getDivResize } from '../utils/utils'
    import { ref, onMounted, onUnmounted } from 'vue'

    const windowWidth = ref(0);
    const setDivResize = ref({});

    function handleResize() {
        windowWidth.value = getWindowWidth();
        setDivResize.value = getDivResize('.kv_area');

        // console.log('setDivResize:', setDivResize.value.width);
        // console.log('setDivResize:', setDivResize.value.height);
    }

    onMounted(() => {
        AOS.init()
        handleResize();
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

</script>

<template>
    <div :class="['kv_area', { 'pc': windowWidth >= 1024 }, { 'mb': windowWidth < 1024}]">
        <div class="kv_box" :style="{ width: setDivResize.width + 'px', height: setDivResize.height + 'px' }">
            <img class="kv_gold_map" src="/src/assets/image/kv_gold_map.png" alt="kv_gold_map">
            <img class="Bullseye_right" src="/src/assets/image/Bullseye_right.png" alt="Bullseye_right">
            <img class="rise" data-aos="fade-in" data-aos-delay="1400" data-aos-duration="1000" src="/src/assets/image/rise.png" alt="rise">
            <img class="kv_big_title" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" src="/src/assets/image/kv_big_title.png" alt="kv_big_title">
            <img class="kv_right_light" src="/src/assets/image/kv_right_light.png" alt="kv_right_light">
        </div>
    </div>
</template>

<style scoped>
    .kv_area{
        position: relative;
        display: block;
        width: 100%;
        height: calc(100vh - 80px);
        background: url('../assets/image/kv_bg.png') fixed center center no-repeat;
        background-size: cover;
        margin-top: 80px;
    }

    .kv_area.pc{
        min-height: 580px;
    }

    .kv_box{
        position: absolute;
        display: block;
        /* border: 1px solid #000; */
        left: 0;
        right: 0;
        top: 5%;
        bottom: 0;
        margin: auto;
    }

    .kv_big_title{
        position: absolute;
        display: block;
        width: 63%;
        left: -4%;
        top: -1%;
        z-index: 4;
    }

    .rise{
        position: absolute;
        display: block;
        width: 61%;
        top: -62%;
        left: -17%;
        z-index: 2;
        mix-blend-mode: lighten;
    }

    .kv_gold_map{
        position: absolute;
        display: block;
        width: 80%;
        right: -7%;
        top: -31%;
        z-index: 2;
    }

    .Bullseye_right{
        position: absolute;
        display: block;
        z-index: 1;
        width: 149%;
        max-width: none;
        right: -65%;
        top: -107%;
        mix-blend-mode: overlay;
        opacity: .7;
    }

    .kv_right_light{
        position: absolute;
        display: block;
        width: 80%;
        right: -30%;
        top: -50%;
        z-index: 3;
        mix-blend-mode: hard-light;
    }

    @media screen and (max-width:1366px) {
        /* .kv_box {
            top: -10%;
        } */
    }

    @media screen and (max-width:1280px) {
        /* .kv_box {
            top: -5%;
        } */
    }

    @media screen and (max-width:1024px) {
        .kv_area{
            margin-top: 55px;
            height: calc(100vh - 55px);
            background: url('../assets/image/kv_bg.png') center center no-repeat;
            background-size: cover;
        }

        .kv_area.mb{
            min-height: 1355px;
        }

        .kv_box {
            top: -9%;
        }

        .kv_big_title{
            width: 106%;
            max-width: none;
            bottom: 0;
            left: -5%;
            top: -18%;
            margin: auto;
        }

        .rise{
            width: 108%;
            top: -16%;
            left: -27%;
        }

        .kv_gold_map{
            width: 119%;
            right: -9%;
            top: 68%;
            max-width: none;
        }

        .kv_right_light{
            right: -24%;
            top: 72%;
        }

        .Bullseye_right{
            right: -59%;
            top: 54%;
        }
    }

    @media screen and (max-width:820px) {
        .kv_area.mb{
            min-height: 1125px;
        }
    }

    @media screen and (max-width: 768px) {
        .kv_area.mb{
            min-height: 667px;
        }
    }
</style>
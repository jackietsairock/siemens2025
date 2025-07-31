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
            <!-- <img class="kv_gold_map" src="/kv_gold_map.png" alt="kv_gold_map">
            <img class="Bullseye_right" src="/Bullseye_right.png" alt="Bullseye_right">
            <img class="rise" data-aos="fade-in" data-aos-delay="1400" data-aos-duration="1000" src="/rise.png" alt="rise">
            <img class="kv_big_title" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" src="/kv_big_title.png" alt="kv_big_title">
            <img class="kv_right_light" src="/kv_right_light.png" alt="kv_right_light"> -->

            <img class="kv_smart_logo" src="/kv_smart_logo.svg" alt="kv_smart_logo" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
            <img class="kv_title" src="/kv_title.svg" alt="kv_title" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
            <img class="kv_subtitle" src="/kv_subtitle.svg" alt="kv_subtitle" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />

            <div class="kv_logo_area" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                <img class="kv_logo kv_logo5" src="/logo5.svg" alt="kv_logo5" />
                <img class="kv_logo kv_logo2" src="/logo2.svg" alt="kv_logo2" />
                <img class="kv_logo kv_logo1" src="/logo1.svg" alt="kv_logo1" />
                <img class="kv_logo kv_logo3" src="/logo3.svg" alt="kv_logo3" />
                <img class="kv_logo kv_logo4" src="/logo4.svg" alt="kv_logo4" />
            </div>

            <img class="kv_infinity" src="/kv_infinity.svg" alt="kv_infinity" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" />
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
        overflow: hidden;
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
        z-index: 2;
    }

    .kv_smart_logo{
        position: absolute;
        top: -47%;
        left: 9%;
        width: 23%;
    }

    .kv_title{
        position: absolute;
        top: -22%;
        left: 31%;
        width: 61%;
    }

    .kv_subtitle{
        position: absolute;
        top: 5%;
        left: 24%;
        width: 52%;
    }

    .kv_logo_area{
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        width: 100%;
        height: 25%;
    }

    .kv_infinity{
        position: absolute;
        z-index: 1;
        right: -23%;
        bottom: -40%;
        width: 51%;
    }

    .kv_logo{
        height: 100%;
    }

    .kv_logo5{
        height: 70%;
    }

    .kv_logo1{
        height: 140%;
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

        .kv_smart_logo{
            top: -12%;
            left: 0%;
            right: 0%;
            width: 42%;
            margin: 0 auto;
        }

        .kv_title{
            position: absolute;
            top: 10%;
            left: 0%;
            right: 0%;
            width: 100%;
            margin: 0 auto
        }

        .kv_subtitle{
            position: absolute;
            top: 25%;
            left: 0%;
            right: 0%;
            width: 80%;
            margin: 0 auto;
        }

        .kv_logo_area{
            top: 40%;
            width: 100%;
            height: 9%;
        }

        .kv_infinity{
            right: 0%;
            left: 0%;
            bottom: 5%;
            width: 75%;
            margin: 0 auto;
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

    @media screen and (max-width: 560px) {
        .kv_smart_logo{
            top: -27%;
            left: 0%;
            right: 0%;
            width: 50%;
            margin: 0 auto;
        }

        .kv_title{
            top: 0%;
        }

        .kv_subtitle{
            top: 15%;
            width: 90%;
        }

        .kv_logo_area{
            top: 27%;
            height: 28%;
            width: 90%;
            gap: 0%;
            /* border: 1px solid #000; */
            flex-wrap: wrap;
            justify-content: start;
        }

        .kv_logo{
            height: 50%;
            margin-right: 8%;
        }

        .kv_logo5{
            height: 35%;
        }

        .kv_logo1{
            height: 65%;
        }

        .kv_infinity{
            width: 90%;
            bottom: -9%;
        }
    }
</style>
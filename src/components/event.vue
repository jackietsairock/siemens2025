<script setup>
    import Title from './title.vue'

    import { onMounted } from 'vue'

    import AOS from 'aos'
    import 'aos/dist/aos.css'

    const withBase = (p) => (p?.startsWith('/') ? import.meta.env.BASE_URL + p.slice(1) : p)

    defineProps({
        infoData: Object
    });

    onMounted(() => {
        AOS.init()
    });

</script>

<template>
    <div class="content_wrap z-10 ">
        <Title :infoData="infoData" />
        <div class="event_box max-w-[1366px] p-10 mx-auto mb-0 flex flex-col items-center justify-center gap-10 sm:mb-8 lg:flex-row" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <a v-for="(item, idx) in infoData.articles" :key="idx" :href="item.url" class="article_box relative block w-full lg:w-[33.3333%]">
                <div class="mask absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 bg-[rgba(0,0,0,.5)]">
                    <div class="more_box w-fit h-fit px-3 py-2 border-2 border-white bg-[rgba(0,0,0,.8)]">
                        <p class="text-white text-xl sm:text-2xl">了解更多</p>
                    </div>
                </div>
                <img :src="withBase(item.img)" class="industry_img" alt="industry_img" />
            </a>
        </div>
    </div>
    <img :src="withBase('infinity_opacity.png')" class="infinity_opacity infinity_opacity2 absolute w-[50%]" alt="infinity_opacity" />
</template>

<style scoped>
    .article_box{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        overflow: hidden;
        height: 17rem;
    }

    .mask{
       opacity: 0;
    }

    .article_box:hover{
        cursor: pointer;
    }

    .article_box:hover .mask{
        opacity: 1;
        transition: .3s;
    }

    .more_box{
        margin-top: 5rem;
    }

    .article_box:hover .more_box{
        margin-top: 0;
        transition: .5s;
        position: absolute;
        width: auto;
        height: auto;
        object-fit: contain;
    }

    /* 讓圖片絕對置中並鋪滿 */
    .article_box .industry_img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;            /* 填滿但不變形，裁切多餘 */
        transform: translate(-50%, -50%);
    }

    .infinity_opacity{
        z-index: 1;
        right: -18rem;
    }

    .infinity_opacity2{
        bottom: -10rem;
    }

    @media screen and (max-width: 1024px) {
        .article_box{
            height: 27rem;
        }
    }

    @media screen and (max-width: 768px) {
        .article_box{
            height: 13rem;
        }
    }

</style>
<script setup>
    import Title from './Title.vue'

    defineProps({
        infoData: Object
    });

</script>

<template>
    <div class="content_wrap z-10 ">
        <Title :infoData="infoData" />
        <div class="event_box max-w-[1366px]p-10 mx-auto mb-0 flex flex-row items-center justify-center gap-10 sm:mb-8 sm:flex-col">
            <a class="article_box relative block w-full sm:w-[33.3333%]">
                <div class="mask absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 bg-[rgba(0,0,0,.5)]">
                    <div class="more_box w-fit h-fit px-3 py-2 border-2 border-white bg-[rgba(0,0,0,.8)]">
                        <p class="text-white text-xl sm:text-2xl">了解更多</p>
                    </div>
                </div>
                <img src="src/assets/image/industry_img.png" class="industry_img w-full" alt="industry_img" />
            </a>
        </div>
    </div>
    <img src="src/assets/image/infinity_opacity.png" class="infinity_opacity infinity_opacity2 absolute w-[80%]" alt="infinity_opacity" />
</template>

<style scoped>
    .article_box{
        border-radius: 20px;
        overflow: hidden;
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
    }

    .infinity_opacity{
        z-index: 1;
        right: -18rem;
    }

    .infinity_opacity2{
        bottom: -10rem;
    }
</style>
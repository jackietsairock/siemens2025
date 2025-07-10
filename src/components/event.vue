<script setup>
    import Title from './Title.vue'

    defineProps({
        infoData: Object
    });

</script>

<template>
    <div class="content_wrap">
        <Title :infoData="infoData" />
        <div class="event_box max-w-[1366px] p-10 mx-auto mb-0 sm:mb-8">
            <div class="video_wrap w-full max-w-[800px] mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                width="100%"
                height="100%"
                :src="infoData.youtube_src"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>
            </div>
        </div>
        <div class="article_wrap flex flex-col gap-5 max-w-[1200px] mx-auto mb-20 p-10 lg:flex-row">
            <div class="article_img_box w-full lg:w-[25%]">
                <img :src="infoData.article.img" alt="event_img" class="w-full h-full object-cover">
            </div>
            <div class="article_text_box flex flex-col text-justify w-full lg:w-[75%]">
                <a :href="infoData.article.url" class="block text-xl font-bold text-[#231815] pb-5 mb-5 sm:text-3xl" v-html="infoData.article.title"></a>
                <a :href="infoData.article.url" class="text-md font-bold text-[#231815] mb-5 sm:text-xl">{{infoData.article.describe}}</a>
                <a :href="infoData.article.url" class="text-white py-2 px-5 w-fit ml-auto hover:opacity-80 lg:ml-0 mx-auto" style="background-color: #602C88;">
                    閱讀更多
                </a>
            </div>
        </div>
        <div class="logo_wrap flex flex-row gap-8 w-fit mx-auto px-8 sm:gap-10 sm:px-0">
            <div class="btnet_logo_box w-[110px] sm:w-[125px]">
                <img :src="infoData.logo[0].img" alt="event_logo" class="w-full">
            </div>
            <div class="sp_logo_box w-[180px] sm:w-[210px]">
                <img :src="infoData.logo[1].img" alt="event_logo" class="w-full">
            </div>
        </div>
    </div>

</template>

<style scoped>
    .article_text_box{
        letter-spacing: 2px;
    }

    .article_text_box a:nth-child(1){
        border-bottom: 1px solid #602C88;
    }

    .article_text_box a:hover:nth-child(1){
        color:#602C88;
    }

    .article_text_box a:nth-child(2){
        line-height: 2rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;   /* 限制顯示3行 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .article_text_box a:hover:nth-child(2){
        color:#602C88;
    }
</style>
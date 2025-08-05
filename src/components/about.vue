<script setup>

    import { ref, onMounted, onUnmounted } from 'vue'
    
    import Title from './Title.vue'

    import { getWindowWidth } from '../utils/utils'
    

    defineProps(
        {
            infoData: Object
        }
    );

    const width = ref(0);

    function handleResize() {
        width.value = getWindowWidth()
    }

    onMounted(() => {
        window.addEventListener('resize', handleResize)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    });


</script>

<template>
    <div class="content_wrap">
        <Title :infoData="infoData" />
        <div class="intro_box max-w-[1200px] py-10 px-10 sm:px-20 mx-5 xl:mx-auto">
            <div class="intro_text intro_text1">
                <p class="">{{infoData.text[0]}}</p>
            </div>
            <div class="intro_text intro_text1">
                <p class="">{{infoData.text[1]}}</p>
            </div>
            <div class="intro_text intro_text1">
                <p class="">{{infoData.text[2]}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .intro_box{
        border-radius: 30px;
        background: #E8E8E8;
        background: linear-gradient(-35deg,rgba(232, 232, 232, 1) 0%, rgba(255, 255, 255, 1) 100%);
    }
    .intro_text{
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
        letter-spacing: 8px;
        text-align: justify;
    }
    .intro_text:last-child{
        margin-bottom: 0;
    }
    .intro_text p{
        color:#3b4754;
    }
    
    // .intro_text3.pc :deep(br){
    //     display: block;
    // }

    @media screen and (max-width: 1200px) {
        // .intro_text3.mb :deep(br){
        //     display: none;
        // }
        
    }
    @media screen and (max-width: 1024px) {
        .intro_text{
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            letter-spacing: 1px;
        }
        
    }
</style>
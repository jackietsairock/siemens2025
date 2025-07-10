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
        <div class="intro_box max-w-[1200px] p-10 mx-auto">
            <div class="intro_text intro_text1">
                <p class="text-white">{{infoData.text[0]}}</p>
            </div>
            <div class="intro_text intro_text2">
                <span v-for="(item, idx) in infoData.text.slice(1, 16)" :key="idx">{{ item }}</span>
            </div>
            <div :class="['intro_text','intro_text3' , { 'pc': width >= 1200 }, { 'mb': width < 1200}]">
                <p class="text-white" v-html="infoData.text[17]"></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .intro_text{
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        letter-spacing: 8px;
        text-align: justify;
    }
    .intro_text2{
        font-size: 2.5rem;
        letter-spacing: 12px;
    }
    .intro_text2 span{
        background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(244, 226, 178, 1) 59%, rgba(242, 227, 180, 1) 76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }
    .intro_text3.pc :deep(br){
        display: block;
    }

    @media screen and (max-width: 1200px) {
        .intro_text3.mb :deep(br){
            display: none;
        }
        
    }
    @media screen and (max-width: 1024px) {
        .intro_text{
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            letter-spacing: 2px;
        }
        
    }
</style>
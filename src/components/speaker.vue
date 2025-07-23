<script setup>
import Title from './Title.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getWindowWidth } from '../utils/utils'
import 'swiper/css'
import 'swiper/css/navigation'

defineProps({
  speakers: Array,
  infoData: Object
})

const windowWidth = ref(0)

function handleResize() {
    windowWidth.value = getWindowWidth();

    // console.log('setDivResize:', setDivResize.value.width);
    // console.log('setDivResize:', setDivResize.value.height);
}

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const modules = [Navigation]
</script>

<template>
  <div class="content_wrap">
    <Title :infoData="infoData" />
    <div class="speaker_box relative max-w-[1366px] p-12 mx-auto flex flex-col flex-wrap items-center justify-center gap-[55px] sm:flex-row sm:items-start">
      <div class="absolute flex justify-between items-center h-[60%] w-full mb-4">
        <button id="custom-prev" class="swiper-arrow swiper-button-prev-custom">←</button>
        <button id="custom-next" class="swiper-arrow swiper-button-next-custom">→</button>
      </div>
      <Swiper
        :slides-per-view="[windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 3 : 2]"
        :space-between="30"
        :loop="true"
        :navigation="{
          nextEl: '#custom-next',
          prevEl: '#custom-prev'
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(item, idx) in speakers" :key="idx" class="speaker_item flex flex-col items-center w-full sm:w-[33%] md:w-[33%] lg:w-[20%]">
          <div class="speaker_img mb-3">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="speaker_text text-center">
            <h2 class="text-4xl font-bold text-white mb-2">{{ item.name }}</h2>
            <p class="text-2xl text-white" v-html="item.title"></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-arrow{
    cursor: pointer;
  }

</style>

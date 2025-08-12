<script setup>
import Title from './title.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getWindowWidth } from '../utils/utils'
import 'swiper/css'
import 'swiper/css/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

defineProps({
  speakers: Array,
  infoData: Object
})

const windowWidth = ref(0)

const withBase = (p) => (p?.startsWith('/') ? import.meta.env.BASE_URL + p.slice(1) : p)

function handleResize() {
    windowWidth.value = getWindowWidth();

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

const modules = [Navigation]
</script>

<template>
  <div class="content_wrap">
    <Title :infoData="infoData" />
    <div class="speaker_box relative max-w-[1366px] p-18 mx-auto flex flex-col flex-wrap items-center justify-center gap-[55px] sm:flex-row sm:items-start" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
      <div class="absolute flex justify-between items-center h-[60%] w-[95%] sm:w-full mb-4">
        <button id="custom-prev" class="swiper-arrow swiper-button-prev-custom w-10 h-10"><img :src="withBase('arrow_left.png')" alt="arrow_left" /></button>
        <button id="custom-next" class="swiper-arrow swiper-button-next-custom w-10 h-10"><img :src="withBase('arrow_right.png')" alt="arrow_right" /></button>
      </div>
      <Swiper
        :slides-per-view="[windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 3 : 1]"
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
          <div class="speaker_img mb-5">
            <img :src="item.img" :alt="item.name" class="w-full" />
          </div>
          <div class="speaker_text">
            <h2 class="text-4xl font-bold text-stone-700 mb-2">{{ item.name }}</h2>
            <h2 class="text-xl font-bold mb-4">{{ item.nameEn }}</h2>
            <p class="text-xl text-stone-600" v-html="item.title"></p>
            <p class="text-xl text-stone-400" v-html="item.titleEn"></p>
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

  h2:nth-child(2){
    color:#5e74f3;
  }

</style>

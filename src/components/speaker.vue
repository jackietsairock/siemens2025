<script setup>
  import Title from './Title.vue'

  defineProps({
    speakers: Array,
    infoData: Object
  });


</script>

<template>
  <div class="content_wrap">
    <Title :infoData="infoData" />
    <div class="speaker_box max-w-[1366px] p-10 mx-auto flex flex-col flex-wrap items-center justify-center gap-[55px] sm:flex-row sm:items-start">
      <div v-for="(item, idx) in speakers" :key="idx" class="speaker_item flex flex-col items-center w-full sm:w-[33%] md:w-[33%] lg:w-[20%]">
        <div class="speaker_img mb-3">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="speaker_text text-center">
          <h2 class="text-4xl font-bold text-white mb-2">{{ item.name }}</h2>
          <p class="text-2xl text-white" v-html="item.title"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  
</style>

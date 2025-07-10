<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

function handleScroll() {
  show.value = window.scrollY > 200
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});
</script>

<template>
  <button
    v-if="show"
    @click="goToTop"
    class="fixed bottom-8 w-[35px] h-[35px] right-[28px] z-50 bg-[#ffe37f] text-[#602c88] rounded-full shadow-lg text-xl font-bold hover:bg-[#ffe37fcc] transition sm:right-[30px] sm:w-[45px] sm:h-[45px]"
    aria-label="回到頂部"
  >
    <img src="../assets/image/arrow_up.png" alt="arrow_up" class="arrow_up" />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
}

.arrow_up{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 60%;
}
</style>
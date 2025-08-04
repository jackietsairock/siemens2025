<script setup>
  import Title from './Title.vue'

  defineProps({
    infoData: Object
  });

</script>

<template>
    <div class="content_wrap relative hidden">
        <Title :infoData="infoData" />
        <div class="agenda_box max-w-[1366px] py-10 px-5 sm:px-10 mx-5 xl:mx-auto">
            <div class="event_info_box flex flex-col font-bold w-fit mx-auto mb-8 gap-8 sm:gap-5">
               <div class="event_info_item flex flex-col gap-2 sm:gap-5 lg:flex-row">
                    <div class="title_box h-fit w-fit block rounded-lg font-bold py-1 px-3" style="background-color: #5e74f3;">
                        <p class="text-white text-2xl lg:text-4xl">{{infoData.dateTimeTitle}}</p>
                    </div>
                    <div class="text_box flex flex-col items-start gap-1 ml-10 lg:flex-row lg:items-baseline lg:gap-5 lg:ml-0">
                        <p class="text-2xl lg:text-4xl" style="color: #5e74f3;">{{infoData.date}}</p>
                        <p class="text-stone-700 text-2xl lg:text-4xl">{{infoData.time}}</p>
                        <p class="text-stone-700 text-xl lg:text-2xl">{{infoData.dataTimeInfo}}</p>
                    </div>
               </div>
               <div class="event_info_item flex flex-col gap-2 sm:gap-5 lg:flex-row">
                    <div class="title_box h-fit w-fit block rounded-lg font-bold py-1 px-3" style="background-color: #5e74f3;">
                        <p class="text-white text-2xl lg:text-4xl">{{infoData.locationTitle}}</p>
                    </div>
                    <div class="text_box flex flex-col items-start gap-1 ml-10 lg:items-baseline lg:gap-2 lg:ml-0">
                        <p class="text-stone-700 text-2xl lg:text-4xl">{{infoData.location}}</p>
                        <p class="text-stone-700 text-xl lg:text-2xl">{{infoData.locationInfo}}</p>
                    </div>
               </div>
            </div>
            <div class="agenda_table flex flex-col bg-white p-6">
                <div v-for="(item ,idx1) in infoData.agendaInfo" :key="idx1" class="agenda_table_item flex flex-row py-5 gap-3">
                    <div class="time_box w-[20%] text-neutral-700">
                        <p class="text-md font-bold lg:text-xl">{{item.time}}</p>
                        <p class="text-md lg:text-xl">{{item.timeEn}}</p>
                    </div>
                    <div class="right_box w-[80%] flex flex-col gap-3">
                        <div class="title_box w-full text-neutral-700">
                            <p class="text-md font-bold lg:text-xl" v-html="item.topic"></p>
                            <p class="text-md lg:text-xl" v-html="item.topicEn"></p>
                        </div>
                        <div class="speaker_area flex flex-col w-full gap-3">
                            <div v-for="(item ,idx2) in item.speaker" :key="idx2" class="speaker_box flex flex-col text-md w-full lg:text-xl" style="color: #4F4D4D;">
                                <div v-if="idx2" :class="[idx1 === 9 || idx1 === 10 ? 'label_dot pl-5 relative' : '']">
                                    <span v-html="item.speakerTitle"></span>
                                    <span class="whitespace-nowrap ml-1 font-bold" style="color: #787df3;">{{item.speakerName}}</span>
                                </div>
                                <div>
                                    <p :class="['whitespace-normal', 'text-neutral-400', 'text-sm', idx1 === 9 || idx1 === 10 ? 'ml-5 sm:ml-7' : 'ml-0']" v-html="item.speakerNameEN"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="src/assets/image/infinity_opacity.png" class="infinity_opacity infinity_opacity1 absolute w-[80%]" alt="infinity_opacity" />
        <img src="src/assets/image/infinity_opacity.png" class="infinity_opacity infinity_opacity2 absolute w-[80%]" alt="infinity_opacity" />
    </div>
</template>

<style scoped lang="scss">
    .title_box p :deep(br){
        margin-bottom: 1rem;
    }

    .agenda_box{
        position: relative;
        display: block;
        z-index: 10 !important;
    }

    .agenda_table{
        border-radius: 30px;
        background: #E8E8E8;
        background: linear-gradient(-35deg,rgba(232, 232, 232, 1) 0%, rgba(255, 255, 255, 1) 100%);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }

    .agenda_table_item{
        border-bottom: 1px solid #9F9E9F;
    }

    .agenda_table_item:last-child{
        border-bottom: none;
    }

    .label_dot::before{
        content:"•";
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .infinity_opacity{
        z-index: 1;
        right: -18rem;
    }

    .infinity_opacity1{
        top: 40rem;
    }

    .infinity_opacity2{
        bottom: 30rem;
    }


</style>

<script setup>
  import Title from './Title.vue'

  defineProps({
    infoData: Object
  });

</script>

<template>
    <div class="content_wrap">
        <Title :infoData="infoData" />
        <div class="agenda_box max-w-[1366px] p-10 mx-auto ">
            <div class="event_info_box flex flex-col font-bold w-fit mx-auto mb-8 gap-5" style="color: #602C88;">
               <div class="event_info_item flex flex-col lg:flex-row">
                    <div class="title_box">
                        <p class="text-2xl lg:text-4xl">{{infoData.dateTimeTitle}}</p>
                    </div>
                    <div class="text_box flex flex-col items-start gap-1 ml-10 lg:flex-row lg:items-baseline lg:gap-5 lg:ml-0">
                        <p class="text-2xl lg:text-4xl">{{infoData.date}}</p>
                        <p class="text-2xl lg:text-4xl">{{infoData.time}}</p>
                        <p class="text-xl lg:text-2xl">{{infoData.dataTimeInfo}}</p>
                    </div>
               </div>
               <div class="event_info_item flex flex-col lg:flex-row">
                    <div class="title_box">
                        <p class="text-2xl lg:text-4xl">{{infoData.locationTitle}}</p>
                    </div>
                    <div class="text_box flex flex-col items-start gap-1 ml-10 lg:flex-row lg:items-baseline lg:gap-5 lg:ml-0">
                        <p class="text-2xl lg:text-4xl">{{infoData.location}}</p>
                        <p class="text-xl lg:text-2xl">{{infoData.locationInfo}}</p>
                    </div>
               </div>
            </div>
            <div class="agenda_table flex flex-col bg-white p-6">
                <div v-for="(item ,idx) in infoData.agendaInfo" :key="idx" class="agenda_table_item flex flex-col py-5 gap-3 lg:flex-row">
                    <div class="time_box w-full lg:w-[20%]">
                        <p class="text-md font-bold lg:text-xl" style="color: #666866;">{{item.time}}</p>
                    </div>
                    <div class="title_box w-full lg:w-[40%]">
                        <p class="text-md font-bold lg:text-xl" style="color: #666866;" v-html="item.topic"></p>
                    </div>
                    <div class="speaker_area flex flex-col w-full gap-3 lg:w-[40%]">
                        <div v-for="(item ,idx) in item.speaker" :key="idx" class="speaker_box flex flex-row font-bold text-md w-full lg:text-xl" style="color: #4F4D4D;">
                            <p class="whitespace-nowrap">{{item.speakerName}}</p>
                            <p v-html="item.speakerTitle" class="ml-1"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .title_box p :deep(br){
        margin-bottom: 1rem;
    }

    .agenda_table{
        border-top: 5px solid #8A2685;
    }

    .agenda_table_item{
        border-bottom: 1px solid #9F9E9F;
    }

    .agenda_table_item:last-child{
        border-bottom: none;
    }

    @media screen and (max-width: 1024px) {
        .agenda_table_item:nth-child(1){
            display: none;
        }
        
    }
</style>

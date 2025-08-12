<script setup>
    import { ref,onMounted } from 'vue'

    import AOS from 'aos'
    import 'aos/dist/aos.css'

  import Title from './title.vue'

  const withBase = (p) => (p?.startsWith('/') ? import.meta.env.BASE_URL + p.slice(1) : p)

  defineProps({
    infoData: Object
  });

   onMounted(() => {
        AOS.init()
    });

  // 建立表單資料物件
    const form = ref({
        Name: '',
        Mobile: '',
        Email: '',
        Company_name: '',
        Job_title: '',
        Agree: false
    })

    // 驗證規則
    const mobileRegex = /^09\d{8}$/
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const nameRegex = /^.{2,30}$/

    function checkVal() {
        if (!form.value.Name) {
            alert('請輸入姓名');
            return;
        } else if (!nameRegex.test(form.value.Name)) {
            alert('姓名長度請輸入2~30字');
            return;
        } else if (!form.value.Email) {
            alert('請輸入Email');
            return;
        } else if (!emailRegex.test(form.value.Email)) {
            alert('請填寫正確電子郵件');
            return;
        } else if (!form.value.Mobile) {
            alert('請輸入手機');
            return;
        } else if (!mobileRegex.test(form.value.Mobile)) {
            alert('請輸入包含09開頭之連續10碼阿拉伯數字');
            return;
        } else if (!form.value.Company_name) {
            alert('請輸入產業別');
            return;
        } else if (!form.value.Job_title) {
            alert('請輸入職稱');
            return;
        }  else if (form.value.Agree == false) {
            alert('請同意報名條款');
            return;
        } 

        sign_up();

    }

    function sign_up() {
        const data = new FormData();

        // const url = 'https://events.businesstoday.com.tw/backend/siemens2025/sign_up?v=' + new Date().getTime();
        const url = 'https://events.businesstoday.com.tw/backend/siemens2025/sign_up?v=' + new Date().getTime();

        for (const key in form.value) {
            data.append(key, form.value[key]);
        }

        // console.log([...data.entries()]);

        fetch(url, {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(response => {
            if (response['bIsSuccess'] == "0") {
                alert(response['sError'])
            } else {
                alert("本會議為審核制，後續將以簡訊、e-mail通知您是否報名成功，如未收到代表未報名成功。")
                location.href = "./index.html"
            }
            })
            .catch(() => {
            alert("系統忙碌中，請稍後再試！")
            })
    }

</script>

<template>
    <div class="content_wrap">
        <Title :infoData="infoData" />
        <div class="signUp_box max-w-[1200px] p-10 mx-auto bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <form class="flex flex-col gap-6 w-full" @submit.prevent="checkVal">
                <div v-for="(item, idx) in infoData.label" :key="idx" class="flex flex-col w-full sm:flex-row items-center gap-2">
                    <label class="w-full text-black text-lg shrink-0 form_label sm:w-24">{{ item.tagName }}</label>

                    <input v-if="item.type !== 'select'" v-model="form[item.inputName]" :name="item.inputName" :type="item.type" :min="item.type === 'number' ? 0 : undefined" :maxlength="item.inputName === 'Mobile' ? 10 : undefined" :placeholder="item.placeholder" class="w-full flex-1 p-2 bg-white text-black border border-gray-300 focus:outline-none" />
                    
                    <select v-else v-model="form[item.inputName]" :name="item.inputName" class="w-full flex-1 p-2 bg-white text-black border border-gray-300 focus:outline-none">
                        <option v-for="(opt, idx) in item.option" :key="idx" :value="opt.value">{{ opt.optionName }}</option>
                    </select>
                </div>
                <div class="flex items-start gap-2 mt-2 p-5 bg-gray-300">
                    <input v-model="form.Agree" type="checkbox" id="agree" class="mt-1" />
                    <label for="agree" class="text-black text-sm leading-tight">
                        {{infoData.announce.text}}<br />
                        <span class="block text-xs leading-snug mt-1 text-justify" v-html="infoData.announce.detail">
                        </span><br />
                        {{infoData.announce2.text}}<br />
                        <span class="block text-xs leading-snug mt-1 text-justify" v-html="infoData.announce2.detail">
                        </span>
                    </label>
                </div>
                <button type="submit" class="w-fit mx-auto mt-4 p-3 transition hover:cursor-pointer">
                    <img :src="withBase('sign_up_btn.png')" class="w-[15rem]" alt="sign_up_btn">
                </button>
            </form>
        </div>
    </div>

</template>

<style scoped>
    .form_label::before{
        content:'*';
        color: red;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
    button:hover{
        cursor: pointer;
        opacity: 0.8;
    }
</style>
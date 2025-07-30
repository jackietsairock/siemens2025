<script setup>
    import { ref } from 'vue'

    // 定義一個狀態來控制選單的開啟或關閉
    const isMenuOpen = ref(false)

    // 切換選單的開啟狀態
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }

    const handleClick = () => {
        isMenuOpen.value = false;
    }

    defineProps(
        {
            menu: Array
        }
    );
</script>

<template>
    <header>
        <div class="nav_content_wrap">
            <a href="https://www.businesstoday.com.tw/" class="btnet_logo_box btnet_logo_box1">
                <img src="/nav_smart_logo.svg" class="btnet_logo1" alt="btnet_logo">
            </a>

            <nav :class="{ open: isMenuOpen }">
                <a
                    v-for="(item, idx) in menu"
                    :key="idx"
                    :href="item.tagUrl"
                    :class="['text-lg', item.tagClassName,'sm:text-xl','text-center']"
                    @click="handleClick"
                >
                    <p class="nav_text_ch text-black font-bold">{{ item.tagName }}</p>
                    <p class="nav_text_en text-stone-400 text-sm">{{ item.tagNameEn }}</p>
                </a>
            </nav>
        </div>

        <div :class="['menu_icon', {open: isMenuOpen }]" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<style scoped>
    /* Header 基本樣式 */
    header {
        position: fixed;
        display: block;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        height: 100px;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 99;
    }

    .nav_content_wrap{
        position: relative;
        display: block;
        max-width: 1366px;
        margin: 0 auto;
        padding: 50px 0;
    }

    /* Logo 樣式 */
    .btnet_logo_box1 {
        position: absolute;
        display: block;
        width: 140px;
        height: 63px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        z-index: 2;
        left: 25px;
    }

    .btnet_logo_box img {
        max-width: 100%;
        max-height: 100%;
    }

    /* 漢堡選單圖示樣式 */
    .menu_icon {
        position: absolute;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
        cursor: pointer;
        top: 0;
        bottom: 0;
        margin: auto 0;
        right: 25px;
        z-index: 2;
    }

    .menu_icon span {
        display: block;
        height: 3px;
        background-color: #5e74f3;
        border-radius: 2px;
        /* transition: all 0.3s ease; */
    }

    /* 當選單開啟時，改變漢堡圖示的樣式 */
    .menu_icon span:nth-child(1) {
        transform-origin: center;
    }

    .menu_icon span:nth-child(3) {
        transform-origin: center;
    }

    .menu_icon:hover span {
        background-color: #000;
    }

    .menu_icon.open {
       right: 16px;
    }

    .menu_icon.open span:nth-child(1) {
        transform: rotate(45deg) translateY(12px);
    }

    .menu_icon.open span:nth-child(2) {
        opacity: 0;
    }

    .menu_icon.open span:nth-child(3) {
        transform: rotate(-45deg) translateY(-12px);
    }

    /* 選單樣式 */
    nav {
        position: absolute;
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 5px;
        right: 25px;
        background-color: #fff;
        height: fit-content;
        width: fit-content;
    }

    nav.open {
        display: flex;
    }

    nav a {
        position: relative;
        display: block;
        text-decoration: none;
        color: #602C88;
        padding: 0.5rem 1rem;
    }

    nav a:last-child::after{
        display: none;
    }

    nav a:hover {
        color: #000;
    }

    nav .nav_text_ch::after{
        content:'';
        position: relative;
        display: block;
        right: 0;
        left: 0;
        margin: 1px auto 0 auto;
        width: 30%;
        height: 2px;
        background-color: #a6a09b;
    }

    @media screen and (max-width: 1024px) {
        header{
            height: 55px;
        }

        .nav_content_wrap{
            padding: 28px 0;
        }

        .btnet_logo_box1 {
            width: 84px;
            height: 33px;
            left: 25px;
        }

        .menu_icon{
            display: flex;
        }

        nav{
            display: none;
            flex-direction: column;
            width: 100%;
            right: 0;
            top: 55px;
            margin: 0 auto;
            padding: 1rem 0;
        }

        nav a{
            padding: 1.2rem 0;
            border-bottom: 1px solid #d8d8d8;
        }

        nav a::after{
            display: none;
        }

        nav a:last-child{
            border-bottom: 0;
        }

        nav .nav_text_ch::after{
            display: none;
        }

        .nav_text_en{
            display: none;
        }
    }
</style>
<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="pt-10 mx-auto">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <div>
                <button @click="data">oo</button>
            </div>
            <!-- <div class="Homebtn">
                <router-link to="/">Home</router-link>
            </div> -->
            <div class="imgNums mt-40 lg:mt-10 lg:ml-64">
                <h1 class="text-2xl font-bold">Number:</h1>
            </div>
            <div class="imgData mt-5 bg-gray-800 w-20 h-20">
                <h4 class="pt-2 text-white"></h4>
                <h4 class="pt-8 pr-4 text-white">by:{{country}}</h4>
            </div>
            <div class="btnBack bg-gray-400 h-24"></div>
            <button
                class="text-white text-2xl rounded-full download bg-gray-400 h-20"
            >
                Download
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import imgData from "@/components/imgData";
export default defineComponent({
    setup() {
        return {
            imgdata: imgData,
        };
    },
    methods: {
        data() {
            console.log(this.imgdata);
        },
    },
});
</script>

<style scoped="lang">
.backgroundDiv {
    margin-top: -60px;
}
.backImg {
    background-image: url("../assets/mainPage.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 820px;
}
@media screen and (max-width: 768px) {
    .imgData {
        margin-left: auto;
        margin-right: auto;
    }
    .btnBack {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 25rem;
    }
    .download {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 25rem;
    }
}
@media screen and (min-width: 769px) {
    .imgData {
        /* display: flex;
        justify-content: end; */
        margin-left: 920px;
        margin-bottom: -50px;
    }
    .btnBack {
        margin-left: 800px;
        margin-top: 100px;
        width: 25rem;
    }
    .download {
        margin-left: 720px;
        margin-top: 100px;
        width: 25rem;
    }
}
</style>

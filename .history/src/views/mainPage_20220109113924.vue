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
                <h1 class="text-2xl font-bold">Number:{{num}}</h1>
            </div>
            <div class="imgDataDisplay mt-5 bg-gray-800 w-32 h-20">
                <h4 class="pt-2 text-white">{{ name }}</h4>
                <h4 class="pt-8 pr-20 text-white">by:{{ country }}</h4>
            </div>
            <div class="btnBackDisplay bg-gray-400 h-24">
                <button id="one" @click="nums" v-bind:value="one">1</button>
                <button id="two" @click="nums" value="2">2</button>
                <button id="three" @click="nums" value="3">3</button>
                <button id="four" @click="nums" value="4">4</button>
                <button id="five" @click="nums" value="5">5</button>
                <button id="six" @click="nums" value="6">6</button>
                <button id="seven" @click="nums" value="7">7</button>
                <button id="eight" @click="nums" value="8">8</button>
                <button id="nine" @click="nums" value="9">9</button>
                <button id="zero" @click="nums" value="0">0</button>
                <button @click="result">result</button>
            </div>
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
            one:1
        };
    },
    methods: {
        data() {
            console.log(this.imgdata);
        },
        result() {
            console.log(this.one)
        }
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
    .imgDataDisplay {
        margin-left: auto;
        margin-right: auto;
    }
    .btnBackDisplay {
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
    .imgDataDisplay {
        /* display: flex;
        justify-content: end; */
        margin-left: 920px;
        margin-bottom: -50px;
    }
    .btnBackDisplay {
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

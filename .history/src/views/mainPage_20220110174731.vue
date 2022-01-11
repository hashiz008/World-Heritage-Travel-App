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
                <h1 class="text-2xl font-bold">Number:{{ number }}</h1>
            </div>
            <div class="imgDataDisplay mt-5 bg-gray-800 w-32 h-20">
                <!-- <h4 class="pt-2 text-white">{{ names }}</h4> -->
                <h4 class="pt-8 pr-20 text-white">by:{{ country }}</h4>
            </div>
            <div class="btnBackDisplay bg-gray-400 h-24">
                <!-- <input v-model="number" /> -->
                <div class="mr-64">
                    <button class="" @click="number += '1'" value="one">
                        1
                    </button>
                </div>
                <div class="twoBtn mr-40">
                    <button @click="number += '2'" value="2">2</button>
                </div>
                <div class="threeBtn mr-20">
                    <button @click="number += '3'" value="3">3</button>
                </div>
                <div class="fourBtn">
                    <button @click="number += '4'" value="4">4</button>
                </div>
                <div class="fiveBtn ml-32">
                    <button @click="number += '5'" value="5">5</button>
                </div>
                <div class="sixBtn mt-5 mr-64">
                    <button @click="number += '6'" value="6">6</button>
                </div>
                <div class="sevenBtn mr-40">
                    <button @click="number += '7'" value="7">7</button>
                </div>
                <div class="eightBtn mr-20">
                    <button @click="number += '8'" value="8">8</button>
                </div>
                <div>
                    <button @click="number += '9'" value="9">9</button>
                </div>
                <div>
                    <button @click="number += '0'" value="0">0</button>
                </div>
                <div>
                    <button @click="result">result</button>
                </div>
                <div>
                    <button @click="result">delete</button>
                </div>
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
    name: "MainPage",
    data() {
        return {
            imgdata: imgData,
            one: 1,
            number: "",
        };
    },
    methods: {
        result() {
            console.log(this.number);
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
.twoBtn{
    margin-top:-30px;
}
.threeBtn {
    margin-top:-30px;
}
.fourBtn {
    margin-top:-30px;
}
.fiveBtn {
    margin-top: -30px;
}
.sevenBtn {
    margin-top:-25px;
}
.eightBtn{
    margin-top:-25px;
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

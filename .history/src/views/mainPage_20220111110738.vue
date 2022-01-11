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
            <div class="imgNums lg:mt-10 lg:ml-64">
                <h1 class="text-2xl font-bold">Number:{{ number }}</h1>
            </div>
            <div class="imgDataDisplay mt-5 bg-gray-800 w-32 h-20">
                <!-- <h4 class="pt-2 text-white">{{ names }}</h4> -->
                <h4 class="pt-8 pr-20 text-white">by:{{ country }}</h4>
            </div>
            <div class="btnBackDisplay  rounded-3xl bg-gray-400">
                <!-- <input v-model="number" /> -->
                <div class="oneBtn pt-3">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '1'"
                        value="one"
                    >
                        1
                    </button>
                </div>
                <div class="twoBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '2'"
                        value="2"
                    >
                        2
                    </button>
                </div>
                <div class="threeBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '3'"
                        value="3"
                    >
                        3
                    </button>
                </div>
                <div class="fourBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '4'"
                        value="4"
                    >
                        4
                    </button>
                </div>
                <div class="fiveBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '5'"
                        value="5"
                    >
                        5
                    </button>
                </div>
                <div class="sixBtn mr-64">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '6'"
                        value="6"
                    >
                        6
                    </button>
                </div>
                <div class="sevenBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '7'"
                        value="7"
                    >
                        7
                    </button>
                </div>
                <div class="eightBtn mr-1">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '8'"
                        value="8"
                    >
                        8
                    </button>
                </div>
                <div class="nineBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '9'"
                        value="9"
                    >
                        9
                    </button>
                </div>
                <div class="zeroBtn">
                    <button
                        class="text-2xl rounded-full bg-blue-500 w-10 h-10"
                        @click="number += '0'"
                        value="0"
                    >
                        0
                    </button>
                </div>
                <div class="resultBtn mr-32 mt-3">
                    <button
                        class="rounded-lg text-xl bg-blue-500 w-16 h-8"
                        @click="result"
                    >
                        Result
                    </button>
                </div>
                <div class="deleteBtn ml-32">
                    <button
                        class="rounded-lg text-xl bg-blue-500 w-12 h-8"
                        @click="result"
                    >
                        Del
                    </button>
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
.oneBtn {
    margin-right: 16rem;
}
.twoBtn {
    margin-top: -50px;
    margin-right: 8rem;
}
.threeBtn {
    margin-top: -50px;
    margin-left: -1px;
}
.fourBtn {
    margin-top: -50px;
    margin-left: 8rem;
}
.fiveBtn {
    margin-top: -50px;
    margin-left: 16rem;
}
.sixBtn {
    margin-top: 20px;
}
.sevenBtn {
    margin-top: -50px;
    margin-right: 8rem;
}
.eightBtn {
    margin-top: -50px;
    margin-right: 1px;
}
.nineBtn {
    margin-top: -50px;
    margin-left: 8rem;
}
.zeroBtn {
    margin-top: -50px;
    margin-left: 16rem;
}
.deleteBtn {
    margin-top: -40px;
}
@media screen and (max-width: 768px) {
    .imgNums {
        margin-top: 9rem;
    }
    .imgDataDisplay {
        margin-left: auto;
        margin-right: auto;
    }
    .btnBackDisplay {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 23rem;
        height: 10rem;
        box-shadow: inset 0 5px 4px 0 rgba(0, 0, 0, 0.06);
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
        height: 10rem;
    }
    .download {
        margin-left: 720px;
        margin-top: 90px;
        width: 25rem;
    }
}
</style>

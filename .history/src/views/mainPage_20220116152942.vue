<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="pt-10 mx-auto">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <div class="imageDiv imageDives">
                <img v-show="show" class="image images" :src="img" />
            </div>
            <!-- <div class="Homebtn">
                <router-link to="/">Home</router-link>
            </div> -->
            <div
                class="imgNumsDisplay border-4 border-yellow-700 bg-gray-800 w-64 h-12 ml-40 lg:mt-10 lg:ml-64"
            >
                <h1 class="text-white pr-40 pt-1 text-2xl font-bold">
                    Number:{{ number }}
                </h1>
            </div>
            <div
                class="imgDataDisplay border-4 border-yellow-700 mt-5 bg-gray-800 h-20"
            >
                <!-- <div> -->
                <h4 class="font-semibold text-2xl text-white">
                    {{ placeName }}
                </h4>
                <!-- </div> -->
                <div class="nation">
                    <h4
                        v-show="by"
                        class="country font-semibold text-2xl text-white"
                    >
                        by:{{ country }}
                    </h4>
                </div>
                <!-- <div class="mt-8"> -->
                <!-- </div> -->
            </div>
            <div
                class="btnBackDisplay border-4 border-yellow-800 rounded-3xl bg-gray-400"
            >
                <!-- <input v-model="number" /> -->
                <div class="oneBtnDisplay pt-2">
                    <button
                        class="font-medium text-white onesBtn text-3xl text-white border-2 border-blue-600 bg-blue-400 rounded-full w-10 h-10"
                        @click="number += '1'"
                        value="one"
                    >
                        1
                    </button>
                </div>
                <div class="twoBtnDisplay">
                    <button
                        class="twoBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '2'"
                        value="2"
                    >
                        2
                    </button>
                </div>
                <div class="threeBtnDisplay">
                    <button
                        class="threeBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '3'"
                        value="3"
                    >
                        3
                    </button>
                </div>
                <div class="fourBtnDisplay">
                    <button
                        class="fourBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '4'"
                        value="4"
                    >
                        4
                    </button>
                </div>
                <div class="fiveBtnDisplay">
                    <button
                        class="fiveBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '5'"
                        value="5"
                    >
                        5
                    </button>
                </div>
                <div class="sixBtnDisplay mr-64">
                    <button
                        class="sixBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '6'"
                        value="6"
                    >
                        6
                    </button>
                </div>
                <div class="sevenBtnDisplay">
                    <button
                        class="sevenBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '7'"
                        value="7"
                    >
                        7
                    </button>
                </div>
                <div class="eightBtnDisplay mr-1">
                    <button
                        class="eightBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '8'"
                        value="8"
                    >
                        8
                    </button>
                </div>
                <div class="nineBtnDisplay">
                    <button
                        class="nineBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '9'"
                        value="9"
                    >
                        9
                    </button>
                </div>
                <div class="zeroBtnDisplay">
                    <button
                        class="zeroBtn font-medium text-3xl rounded-full text-white border-2 border-blue-600 bg-blue-400 w-10 h-10"
                        @click="number += '0'"
                        value="0"
                    >
                        0
                    </button>
                </div>
                <div class="resultBtnDisplay mr-32 mt-3">
                    <button
                        class="resultBtn rounded-lg font-medium text-2xl text-white border-2 border-blue-600 bg-blue-400 w-20 h-9"
                        @click="result"
                    >
                        Result
                    </button>
                </div>
                <div class="delBtnDisplay ml-32">
                    <button
                        class="delBtn rounded-lg font-medium text-2xl text-white border-2 border-blue-600 bg-blue-400 w-20 h-9"
                        @click="del"
                    >
                        Del
                    </button>
                </div>
            </div>
            <div class="downBtnDisplay">
                <button
                    :disabled="downDisable"
                    @click="download"
                    class="text-white font-bold text-4xl rounded-full downloadBtn border-4 border-indigo-600 bg-indigo-300 h-20"
                >
                    Download
                </button>
            </div>
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
            show: false,
            by: false,
            downDisable: true,
            number: "",
            img: "",
            placeName: "",
            country: "",
            hrefs: "",
            down: "",
        };
    },
    methods: {
        result(): void {
            let image: string | string = "";
            let placeName: string | string = "";
            let nation: string | string = "";

            for (let i in this.imgdata) {
                if (this.imgdata[i].num == Number(this.number)) {
                    image += this.imgdata[i].url;
                    placeName += this.imgdata[i].placeName;
                    nation += this.imgdata[i].country;
                }
            }
            if (placeName == "") {
                this.by = false;
                this.downDisable = true;
                this.show = false;
            } else {
                this.downDisable = false;
                this.by = true;
                this.show = true;
            }
            this.img = image;
            this.placeName = placeName;
            this.country = nation;
            this.slider();
        },
        del(): void {
            this.number = this.number.slice(0, -1);
        },
        download(): void {
            let url: string | string = "";
            let imgPath: string | string = "";
            for (let i in this.imgdata) {
                if (this.imgdata[i].num == Number(this.number)) {
                    url += this.imgdata[i].url;
                    imgPath += this.imgdata[i].imgPath;
                }
            }
            let link: HTMLAnchorElement = document.createElement("a");
            link.download = imgPath;
            link.href = url;
            link.click();
        },
        slider():void {
            let sliderShow = document.createElement("div");
            let main = document.createElement("div");
            let extra = document.createElement("div");

            let mainImg = document.createElement("img")
            let extraimg = document.createElement("img");

            main.classList.add("main", "full-width");
            extra.classList.add("extra", "full-width");
            mainImg.src =  this.imgdata[0].url as string;
            main.append(mainImg);
            sliderShow.append(main)
            sliderShow.append(extra))
            main.setAttribute("data-index","0"))
        },
    },
});
</script>

<style scoped="lang">
@import url("https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=M+PLUS+2:wght@700&family=Playfair+Display&display=swap");
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
.country {
    padding-top: 10px;
}
.oneBtnDisplay {
    margin-right: 16rem;
}
.onesBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.onesBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.twoBtnDisplay {
    margin-top: -50px;
    margin-right: 8rem;
}
.twoBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.twoBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.threeBtnDisplay {
    margin-top: -50px;
    margin-left: -1px;
}
.threeBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.threeBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.fourBtnDisplay {
    margin-top: -50px;
    margin-left: 8rem;
}
.fourBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.fourBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.fiveBtnDisplay {
    margin-top: -50px;
    margin-left: 16rem;
}
.fiveBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.fiveBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.sixBtnDisplay {
    margin-top: 20px;
}
.sixBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.sixBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.sevenBtnDisplay {
    margin-top: -50px;
    margin-right: 8rem;
}
.sevenBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.sevenBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.eightBtnDisplay {
    margin-top: -50px;
    margin-right: 1px;
}
.eightBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.eightBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.nineBtnDisplay {
    margin-top: -50px;
    margin-left: 8rem;
}
.nineBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.nineBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.zeroBtnDisplay {
    margin-top: -50px;
    margin-left: 16rem;
}
.zeroBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.zeroBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.resultBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.resultBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.delBtnDisplay {
    margin-top: -45px;
}
.delBtn {
    box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
}
.delBtn:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: none;
}
.full-width {
    width: 100%;
    flex-shrink: 0;
}
@media screen and (max-width: 768px) {
    .imgNumsDisplay {
        margin-left: auto;
        margin-right: auto;
        font-family: "Luxurious Roman", cursive;
        margin-top: 1rem;
        overflow: hidden;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .full-width {
        width: 100%;
        flex-shrink: 0;
    }
    .imageDiv {
        display: flex;
        display: none;
        justify-content: center;
        margin-top: 1rem;
    }
    .image {
        /* width: 15rem; */
        height: 11rem;
    }
    .imgDataDisplay {
        width: 18rem;
        margin-left: auto;
        margin-right: auto;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .btnBackDisplay {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 23rem;
        height: 205px;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .downloadBtn {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 25rem;
        box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .downloadBtn:active {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        box-shadow: none;
    }
}
@media screen and (min-width: 769px) {
    .imgNumsDisplay {
        font-family: "Luxurious Roman", cursive;
        margin-left: 43rem;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .imgDataDisplay {
        /* display: flex;
        justify-content: end; */
        /* margin-right: 175px; */
        margin-left: 860px;
        margin-bottom: -50px;
    }
    .btnBackDisplay {
        margin-left: 800px;
        margin-top: 100px;
        width: 25rem;
        height: 205px;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .downBtnDisplay {
        margin-top: -40px;
        margin-right: 50px;
    }
    .downloadBtn {
        margin-left: 720px;
        margin-top: 90px;
        width: 25rem;
        box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .downloadBtn:active {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        box-shadow: none;
    }
}
</style>

<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="inStyle">
                <div class="titleDiv mx-auto">
                    <h1 class="title text-4xl text-gray-800 font-bold">
                        World Heritage Travel App
                    </h1>
                </div>
                <div class="imageDiv">
                    <img class="shadow-2xl images rounded-2xl" :src="img" />
                </div>
                <div class="gooleMapDiv">
                    <div
                        id="map"
                        ref="map"
                        class="mapStyle shadow-2xl rounded-2xl"
                    ></div>
                </div>
                <div
                    id="imgNums"
                    class="imgNumsDisplay border-8 border-gray-400 bg-gray-800 w-64 h-12 ml-40 lg:mt-10 lg:ml-64"
                >
                    <h1
                        class="resultNumber text-white pr-40 text-2xl font-bold"
                    >
                        Number:{{ number }}
                    </h1>
                </div>
                <div
                    class="imgDataDisplay border-8 border-gray-400 mt-5 pt-1 bg-gray-800 h-20"
                >
                    <!-- <div> -->
                    <a :href="href" class="font-semibold text-2xl text-white">
                        {{ placeName }}
                    </a>
                    <div class="nation">
                        <h4
                            v-show="by"
                            class="country font-semibold text-2xl text-white"
                        >
                            by:{{ country }}
                        </h4>
                    </div>
                </div>
                <div id="nums" class="btnBackDisplay">
                    <div class="oneBtnDisplay pt-2">
                        <button
                            class="font-medium text-white onesBtn text-3xl text-white bg-blue-700 rounded-full w-10 h-10"
                            @click="number += '1'"
                            value="one"
                        >
                            1
                        </button>
                    </div>
                    <div class="twoBtnDisplay">
                        <button
                            class="twoBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '2'"
                            value="2"
                        >
                            2
                        </button>
                    </div>
                    <div class="threeBtnDisplay">
                        <button
                            class="threeBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '3'"
                            value="3"
                        >
                            3
                        </button>
                    </div>
                    <div class="fourBtnDisplay">
                        <button
                            class="fourBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '4'"
                            value="4"
                        >
                            4
                        </button>
                    </div>
                    <div class="fiveBtnDisplay">
                        <button
                            class="fiveBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '5'"
                            value="5"
                        >
                            5
                        </button>
                    </div>
                    <div class="sixBtnDisplay mr-64">
                        <button
                            class="sixBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '6'"
                            value="6"
                        >
                            6
                        </button>
                    </div>
                    <div class="sevenBtnDisplay">
                        <button
                            class="sevenBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '7'"
                            value="7"
                        >
                            7
                        </button>
                    </div>
                    <div class="eightBtnDisplay mr-1">
                        <button
                            class="eightBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '8'"
                            value="8"
                        >
                            8
                        </button>
                    </div>
                    <div class="nineBtnDisplay">
                        <button
                            class="nineBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '9'"
                            value="9"
                        >
                            9
                        </button>
                    </div>
                    <div class="zeroBtnDisplay">
                        <button
                            class="zeroBtn font-medium text-3xl rounded-full text-white bg-blue-700 w-10 h-10"
                            @click="number += '0'"
                            value="0"
                        >
                            0
                        </button>
                    </div>
                    <div class="resultBtnDisplay mr-32 mt-3">
                        <button
                            class="resultBtn rounded-lg font-medium text-2xl text-white bg-blue-700 w-20 h-9"
                            @click="result"
                            :disabled="resDis"
                        >
                            Result
                        </button>
                    </div>
                    <div class="delBtnDisplay ml-32">
                        <button
                            class="delBtn rounded-lg font-medium text-2xl text-white bg-blue-700 w-20 h-9"
                            @click="del"
                        >
                            Del
                        </button>
                    </div>
                </div>
                <div id="downloadDiv" class="downBtnDisplay">
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import imgData from "@/components/imgData";
declare global {
    interface Window {
        google: any;
    }
}
export default defineComponent({
    name: "MainPage",
    data() {
        return {
            keyword: "" as string,
            href: "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9" as string,
            imgdata: imgData,
            by: true as boolean,
            downDisable: true as boolean,
            number: "0" as string,
            img: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg" as string,
            placeName: "凱旋門" as string,
            country: "フランス共和国" as string,
            hrefs: "" as string,
            down: "" as string,
            myLatLng: { lat: 48.873, lng: 2.295 } as {
                lat: number;
                lng: number;
            },
            to: "/",
            resDis: false,
        };
    },
    mounted() {
        const map: { center: number; zoom: number } =
            new window.google.maps.Map(this.$refs.map, {
                center: this.myLatLng,
                zoom: 12,
            });
        new window.google.maps.Marker({
            position: this.myLatLng,
            map,
        });
    },
    methods: {
        result() {
            let image: string | string = "";
            let placeName: string | string = "";
            let nation: string | string = "";
            let placeData: string | string = "";

            for (let i in this.imgdata) {
                if (this.imgdata[i].num == Number(this.number)) {
                    image += this.imgdata[i].url;
                    placeName += this.imgdata[i].placeName;
                    nation += this.imgdata[i].country;
                    placeData += this.imgdata[i].placeData;
                }
            }
            if (placeName == "") {
                if (
                    window.confirm("今ある数字の範囲以内で選択してください！")
                ) {
                    this.$router.push("/");
                } else {
                    this.by = false;
                    this.resDis = true;
                    this.downDisable = true;
                }
            }
            this.downDisable = false;
            this.img = image;
            this.placeName = placeName;
            this.country = nation;
            initMap();
            this.href = placeData;
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
            link.href = url;
            link.download = imgPath;
            link.click()
        },
    },
});

function initMap(): void {
    let imageNums: HTMLElement | any = document.getElementById("imgNums");
    let btnNums: number | string = Number(
        imageNums.querySelector("h1").textContent.slice(8)
    );
    for (let i in imgData) {
        if (imgData[i].num == btnNums) {
            let opts: { zoom: number; center: number } = {
                zoom: 13,
                center: new window.google.maps.LatLng(
                    imgData[i].lat,
                    imgData[i].lng
                ),
            };
            let map: HTMLElement = new window.google.maps.Map(
                document.getElementById("map"),
                opts
            );
            new window.google.maps.Marker({
                position: new window.google.maps.LatLng(
                    imgData[i].lat,
                    imgData[i].lng
                ),
                map,
            });
        }
    }
}
</script>

<style scoped="lang">
{
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=M+PLUS+2:wght@700&family=Playfair+Display&display=swap");





/* } */
</style>

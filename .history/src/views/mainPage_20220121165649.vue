<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="titleDiv mx-auto">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <div class="imageDiv">
                <img class="images" :src="img" />
            </div>
            <div class="gooleMapDiv">
                <!-- <input
                    id="search-bar"
                    class="controls"
                    type="text"
                    placeholder="キーワード検索"
                    v-model="keyword"
                    @change="placeAutocomplete"
                /> -->
                <!-- <div @click="getlatlng"></div> -->
                <input
                    id="pac-input"
                    class="controls"
                    type="text"
                    v-model="address_search"
                    v-on:click="getlatlng"
                />
                <div ref="map" style="height: 400px; width: 400px"></div>
                <!-- <google-map :myLatLng="{lat: -25.344, lng: 131.036}" :zoom="4"></google-map> -->
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
// import GoogleMapsApiLoader from 'google-maps-api-loader';
declare global {
    interface Window {
        google: any;
        mapLoadStarted: any;
        mapLoaded: any;
        initMap: any;
    }
}
export default defineComponent({
    name: "MainPage",
    props: ["map", "google"],
    //     props: {
    //     mapConfig: Object,
    //     apiKey: String,
    //   },
    data() {
        return {
            //         google: null,
            //   map: null,
            // props: {
            //     myLatLng: {
            //         type: Object,
            //         required: true,
            //     },
            //     zoom: {
            //         type: Number,
            //         required: true,
            //     },
            // },
            keyword: "",
            imgdata: imgData,
            // show: false,
            by: true,
            downDisable: true,
            number: "0",
            img: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg",
            placeName: "凱旋門",
            country: "フランス",
            hrefs: "",
            down: "",
            myLatLng: { lat: -32.397, lng: 151.644 },
            address_search: "",
            adrs_list: [],
            // myLatLng: { lat: -34.397, lng: 150.644 },
            // myLatLng: { lat:this.imgdata,lng:this.imgdata},
        };
    },
    mounted() {
        const map = new window.google.maps.Map(this.$refs.map, {
            center: this.myLatLng,
            zoom: 8,
        });
        new window.google.maps.Marker({
            position: this.myLatLng,
            map,
        });
        // this.initAutocomplete()
    },
    methods: {
        result() {
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
                // this.by = false;
                this.downDisable = true;
                // this.show = false;
            } else {
                this.downDisable = false;
                // this.by = true;
                // this.show = true;
            }
            this.img = image;
            this.placeName = placeName;
            this.country = nation;
            this.getlatlng();
            // ths mounted();
            // console.log(a)
            // console.log(map);
            // this.initAutocomplete()
            // console.log(navigator.geolocation.getCurrentPosition(success,error,option))
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
    },
});

function initAutocomplete() {
    //マップの初期設定です。
    const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap",
    });
    const input = document.getElementById("pac-input");
    const searchBox = new window.google.maps.places.SearchBox(input);
    ////"SearchBoxクラス"はPlacesライブラリのメソッド。引数はinput(ドキュメント上ではinputFieldとある)。
    ////[https://developers.google.com/maps/documentation/javascript/reference/places-widget#SearchBox]

    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
    ////"ControlPosition"クラスはコントローラーの位置を定める。
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/ControlPosition/
    ////https://developers.google.com/maps/documentation/javascript/examples/control-positioning

    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
    ////"bound_changed"イベントは(見えてる範囲の地図･ビューポートに変化があったときに発火)
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/bounds_changed/
    ////"getBounds"メソッドはビューポートの境界を取得。Mapクラスのメソッド。
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/getBounds/

    let markers: any[] = [];
    searchBox.addListener("places_changed", () => {
        ////"place_chaged"イベントはAutoCompleteクラスのイベント.
        ////https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.place_changed

        const places = searchBox.getPlaces();
        ////"getPlaces"メソッドはクエリ(検索キーワード)を配列(PlaceResult)で返す。
        ////https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.place_changed

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach((marker) => {
            //"forEach"メソッドは引数にある関数へ、Mapオブジェクトのキー/値を順に代入･関数の実行をする。
            //Mapオブジェクト:
            //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
            marker.setMap(null);
            ////setMapメソッドはMarker(Polyline,Circleなど)クラスのメソッド。Markerを指定した位置に配置する。引数nullにすると地図から取り除く。
        });
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new window.google.maps.LatLngBounds();
        ////"LatLngBounds"クラスは境界を作るインスンタンスを作成。引数は左下、右上の座標。
        ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/#:~:text=LatLngBounds%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AF%E5%A2%83%E7%95%8C(Bounding,%E4%BD%9C%E3%82%8B%E3%81%93%E3%81%A8%E3%82%82%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82
        places.forEach((place: any) => {
            if (!place.geometry) {
                ////"geometry"はplaceライブラリのメソッド。

                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                ////"icon"はアイコンを表すオブジェクト。マーカーをオリジナル画像にしたいときなど。
                ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Icon/
                size: new window.google.maps.Size(71, 71),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(17, 34),
                ////"Point"クラスはマーカーのラベルなどの位置を決めるインスタンスメソッド。
                ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Point/

                scaledSize: new window.google.maps.Size(25, 25),
            };
            // Create a marker for each place.
            markers.push(
                new window.google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                ////viewport"メソッド
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
                ////"union"メソッドはLatLngBoundsクラスのメソッド。自身の境界に指定した境界を取り込んで合成する。
                ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/union/
            } else {
                bounds.extend(place.geometry.location);
                ////"extend"メソッドはLatLngBoundsクラスのメソッド。自身の境界に新しく位置座標を追加する。
                ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/extend/
            }
        });
        map.fitBounds(bounds);
        ////"fitBounds"メソッドはmapクラスのメソッド。指定した境界を見えやすい位置にビューポートを変更する。
        ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/fitBounds/#:~:text=Map.fitBounds()%E3%81%AFMap,%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82
    });
}
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
    cursor: pointer;
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
    .titleDiv {
        padding-top: 1rem;
    }
    .imgNumsDisplay {
        margin-left: auto;
        margin-right: auto;
        font-family: "Luxurious Roman", cursive;
        margin-top: 1rem;
        overflow: hidden;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .imageDiv {
        display: flex;
        justify-content: center;
        /* width:100px;; */
    }
    .images {
        width: 12rem;
        height: 9rem;
        margin-top: 1rem;
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
    .backImg {
        padding-left: 50px;
    }
    .imgNumsDisplay {
        margin-top: -17rem;
        /* margin-top:10%; */
        font-family: "Luxurious Roman", cursive;
        margin-left: 60%;
        /* margin-left: 43rem; */
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .imgDataDisplay {
        /* margin-left: 840px; */
        margin-left: 60%;
        margin-bottom: -10px;
        width: 16rem;
    }
    .imageDiv {
        /* margin-left: 50%; */
        margin-left: 1rem;
        /* margin-bottom: -90px; */
    }
    .images {
        /* width: 12rem; */
        width: 380px;
        /* height: 7rem; */
        height: 270px;
        margin-top: 5rem;
    }
    .resultBtn {
        box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
        /* cursor:pointer; */
    }
    .resultBtn:active {
        -webkit-transform: translateY(5px);
        transform: translateY(5px);
        box-shadow: none;
    }
    .btnBackDisplay {
        margin-left: 50%;
        /* margin-left: 800px; */
        /* margin-top: 50px; */
        margin-top: 50px;
        width: 22rem;
        height: 205px;
        box-shadow: inset 8px 8px 8px 8px rgba(0, 0, 0, 0.06);
    }
    .downBtnDisplay {
        /* width:100%; */
        display: flex;
        justify-content: start;
        margin-top: -60px;
        /* margin-right: 50px; */
    }
    .downloadBtn {
        /* margin-left: 720px; */
        margin-left: 50%;
        margin-top: 90px;
        width: 25rem;
        box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .downloadBtn:active {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        box-shadow: none;
    }
    .delBtn {
        box-shadow: 1px 15px 5px -5px rgba(0, 0, 0, 0.25);
    }
    .delBtn:active {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        box-shadow: none;
    }
}
</style>

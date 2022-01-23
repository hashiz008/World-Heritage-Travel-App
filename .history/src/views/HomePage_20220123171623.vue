<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="menu bg-blue-300 opacity-60 pr-10 flex justify-end">
                <input id="nav-input" type="checkbox" class="input invisible" />
                <a href="https://github.com/hashiz008"><img class="cursor-pointer pr-8 pt-1 w-20 h-13" src="../img//githubIcon.png" alt="githubIcon" /></a>
                <a href = "https://twitter.com/hashiz008"><img
                    class="cursor-pointer w-20 h-14 pr-10 pt-2"
                    src="../img//twitterIcon2.png"
                    alt="twitter"
                /></a>
                <label for="nav-input"
                    ><img
                        class="cursor-pointer mt-3 w-10 h-10"
                        src="../img/menuIcon.png"
                        alt="menuIcon"
                /></label>
                <div class="detail pt-10 text-white">
                    <h2 class="text-4xl">世界遺産アプリの紹介</h2>
                    <p class="pt-5 text-2xl">
                        このアプリは好きな数字を入力してshowボタンを押すと世界遺産の画像と名前、国名が表示されます。
                    </p>
                    <p class="pt-5 text-2xl">
                        また,それと連動してGoogleMapにピンポイントでその遺産がある場所にMarkerされます。そしてダウンロードボタンを押すと画像がダウンロードされます。
                    </p>
                    <ul class="pt-5">
                        <li class="text-2xl">ヨーロッパ編: 0~10</li>
                        <li class="text-2xl">アメリカ編: 11~20</li>
                        <li class="text-2xl">アジア編: 21~30</li>
                    </ul>
                    <p class="text-2xl pt-3">いずれデータを追加する予定です。</p>
                </div>
            </div>
            <div class="titleDiv flex justify-center pt-32">
                <h1 class="title text-5xl">Wrorld Hertige App</h1>
            </div>
            <div class="startBtn flex justify-center">
                <router-link
                    class="shadow-2 text-white hover:opacity-70 hover:border-blue-800 hover:bg-blue-600 rounded-full py-2 px-4 border-2 border-blue-500"
                    to="/mainPage"
                    >さあ、世界の旅の始まりですよ！</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Home"
};
</script>

<style scoped="lang">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@700&family=Playfair+Display:wght@500&display=swap");
.backImgDiv {
    margin-top: -60px;
}
.backImg {
    background-image: url("../assets/startPage.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 825px;
}
.menu {
    position:fixed;
    width: 100%;
    height: 10%;
}
.detail {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    /* margin-top: 30px; */
    margin-top: 75px;
    display: none;
    background-color: #112129;
}
#nav-input:checked ~ .detail {
    display: block;
    animation: 1s fadeIn; /*追加*/
}
#input:checked ~ .titleDiv {
    display: none;
}
.title {
    font-family: "Libre Baskerville", serif;
}
.startBtn {
    font-size: 30px;
    margin-top: 15rem;
}
</style>

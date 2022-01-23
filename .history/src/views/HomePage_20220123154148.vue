<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="menu bg-purple-700 opacity-70 pr-10 flex justify-end">
                <input id="nav-input" type="checkbox" class="input invisible" />
                <label for="nav-input"><img src="../img//twitterIcon.jpeg" alt=""><img
                        class="menuIcon mt-3 w-10 h-10"
                        src="../img/menuIcon.png"
                        alt="menuIcon"
                /></label>
                <div class="detail pt-14 text-white">
                    <h2 class="text-4xl">世界遺産アプリの紹介</h2>
                    <p class="pt-5 text-2xl">
                        このアプリは好きな数字を入力してshowボタンを押すと世界遺産の画像と名前、国名が表示されます。
                    </p>
                    <p class="pt-5 text-2xl">
                        また,それと連動してGoogleMapにピンポイントでその遺産がある場所にMarkerされます。そしてダウンロードボタンを押すと画像がダウンロードされます。
                    </p>
                </div>
            </div>
            <div class="titleDiv flex justify-center pt-20">
                <h1 class="title text-4xl">Wrorld Hertige App</h1>
            </div>
            <div class="startBtn flex justify-center">
                <router-link
                    class="text-gray-100 hover:text-gray-400 hover:opacity-50 hover:bg-gray-300 rounded-full py-2 px-4 border border-white"
                    to="/mainPage"
                    >さあ！世界の旅の始まりです！</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Home",
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
.menuIcon {
    cursor: pointer;
}
.menu {
    /* pa-top:10px; */
    width: 100%;
    height: 10%;
}
.detail {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    margin-top: 80px;
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
    margin-top: 20rem;
}
</style>

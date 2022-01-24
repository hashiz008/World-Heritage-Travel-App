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
                    class="shadow-2xl text-white hover:opacity-70 hover:border-blue-800 hover:bg-blue-600 rounded-full py-2 px-4 border-2 border-blue-500"
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

.gnavi li{
    /*線の基点とするためrelativeを指定*/
  position: relative;
    margin:0 10px;
}

/*線の基点位置*/
.gnavi li::before,
.gnavi li::after{
    content:"";
    /*絶対配置で線の位置を決める*/
    position: absolute;
    background:#0481A2;
    /*線の形状*/
    width: 0;
    height:2px;
    /*アニメーションの指定*/
    transition: all 0.2s linear;
}

.gnavi li::before{
  right: 0;
  bottom: 0;
}

.gnavi li::after{
  left: 0;
  top: 0;
}

/*線の基点位置2 spanタグ*/

.gnavi li span{
    display: block;
}

.gnavi li span::before,
.gnavi li span::after{
  content:"";
    /*絶対配置で線の位置を決める*/
  position: absolute;
  background: #0481A2;
    /*線の形状*/
  width:2px;
  height:0;
/*アニメーションの指定*/
  transition: all 0.1s linear;
}

.gnavi li span::before{
  left: 0;
  bottom: 0;
}

.gnavi li span::after{
  right: 0;
  top: 0;
}

/*現在地とhoverした際の線の変化*/
.gnavi li.current::before,
.gnavi li.current::after,
.gnavi li:hover::before,
.gnavi li:hover::after{
  width: 100%;
}

.gnavi li:hover::after{
  transition-delay: 0s;/*すぐ線を出現させる*/
}

.gnavi li:hover::before{
  transition-delay: 0.3s;/*線の出現を0.3秒遅らせる*/
}

.gnavi li.current span::before,
.gnavi li.current span::after,
.gnavi li:hover span::before,
.gnavi li:hover span::after{
  height: 100%;
}

.gnavi li:hover span::before{
  transition-delay: 0.5s;/*線の出現を0.5秒遅らせる*/
}

.gnavi li:hover span::after{
  transition-delay: 0.2s;/*線の出現を0.2秒遅らせる*/
}

</style>

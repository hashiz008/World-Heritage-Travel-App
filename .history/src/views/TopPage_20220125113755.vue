<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="menu bg-blue-300 opacity-60 pr-10 flex justify-end">
                <input id="nav-input" type="checkbox" class="input invisible" />
                <div
                    class="rounded-full hover:bg-blue-100 hover:opacity-80 w-14 h-14 mt-1 mr-7 pt-2 pl-2"
                >
                    <a href="https://github.com/hashiz008"
                        ><img
                            class="cursor-pointer githubIcon"
                            src="../img//githubIcon.png"
                            alt="githubIcon"
                    /></a>
                </div>
                <div
                    class="rounded-full hover:bg-blue-100 hover:opacity-80 w-14 h-14 mr-7 mt-1 pt-2 pl-2"
                >
                    <a href="https://twitter.com/hashiz008"
                        ><img
                            class="cursor-pointer twitterIcon"
                            src="../img//twitterIcon2.png"
                            alt="twitter"
                    /></a>
                </div>
                <label for="nav-input"
                    ><img
                        class="cursor-pointer mt-4 w-9 h-9"
                        src="../img/menuIcon.png"
                        alt="menuIcon"
                /></label>
                <div class="detail pt-10 text-white">
                    <h2 class="text-4xl">世界遺産探検アプリの紹介</h2>
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
                    <p class="text-2xl pt-3">
                        いずれデータを追加する予定です。
                    </p>
                </div>
            </div>
            <div class="titleDiv flex justify-center pt-40">
                <h1 class="title text-5xl">World Hertige Quest App</h1>
            </div>
            <div class="startBtn startBtns flex justify-center">
                <!-- <router-link
                    class="shadow-2xl text-white hover:opacity-70 hover:border-blue-800 hover:bg-blue-600 rounded-full py-2 px-4 border-2 border-blue-500"
                    to="/mainPage"
                    >さあ、世界の旅の始まりですよ！</router-link
                > -->
                <router-link class="router shadow-2xl text-white" to="/mainPage"
                    >さあ、世界の旅の始まりですよ！</router-link
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
@import url("https://fonts.googleapis.com/css?family=Raleway:200");
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
    position: fixed;
    width: 100%;
    height: 80px;
}
.detail {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    margin-top: 80px;
    display: none;
    background-color: #112129;
    animation: detail 2s;
}
@keyframes detail {
    0% {
        transform-origin: bottom;
        transform: scaleY(0);
    }
}
#nav-input:hover ~ .detail {
    display: block;
}
#input:hover ~ .titleDiv {
    display: none;
}
.titleDiv {
    animation: title 2s;
}
@keyframes title {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.title {
    font-family: "Libre Baskerville", serif;
}
.githubIcon {
    width: 50px;
    height: 50px;
}
.twitterIcon {
    width: 50px;
    height: 50px;
}
.startBtn {
    font-size: 30px;
    margin-top: 15rem;
}
.startBtn {
     --borderWidth: 3px;
     background: #1d1f20;
     position: relative;
     border-radius: var(--borderWidth);
}
.router:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(8 * var(--borderWidth));
    top: calc(-1 * var(--borderWidth));
    left: calc(8 * var(--borderWidth));
    height: calc(10% + var(--borderWidth) * 2);
    width: calc(50% + var(--borderWidth) * 2);
    background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: 1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
}

@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

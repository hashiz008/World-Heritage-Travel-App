<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="menu bg-purple-700 opacity-70 pr-10 flex justify-end">
                <input id="nav-input" type="checkbox" class="input invisible" />
                <label for="nav-input"
                    ><img
                        class="mt-3 w-10 h-10"
                        src="../img/menuIcon.png"
                        alt="menuIcon"
                /></label>
                <div class="nav">
                    <nav>
                        <ul>
                            <li>アバウト</li>
                            <li>メイン</li>
                            <li>ポリシー</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- <div class=""> -->
            <!-- </div> -->
            <div class="titleDiv flex justify-center pt-20">
                <h1 class="title text-4xl">Wrorld Hertige</h1>
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
.menu {
    /* pa-top:10px; */
    width: 100%;
    height: 10%;
}
.nav {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 100;
    /* z-index: 11; */
    margin-top: 80px;
    display: none;
    background-color: #3584bb;
}
#nav-input:checked ~ .nav {
    display: block;
    animation: 1s fadeIn; /*追加*/
}
.title {
    font-family: "Libre Baskerville", serif;
}
.startBtn {
    font-size: 30px;
    margin-top: 20rem;
}
</style>

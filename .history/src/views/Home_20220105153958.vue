<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="titleDiv flex justify-center pt-20">
                <h1 class="title text-3xl">Wrorld Hertige</h1>
            </div>
            <div class="startBtn flex justify-center">
                <router-link
                    class="text-gray-100 hover:text-gray-400 hover:opacity-50 hover:bg-gray-300 rounded-full py-2 px-4 border border-white"
                    to="/about"
                    >さあ！世界の旅の始まりです！</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        // HelloWorld
    },
};
</script>

<style scoped="lang">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=M+PLUS+2:wght@700&display=swap');
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
.title {
    font-family: "Libre Baskerville", serif;
    font-family: "M PLUS 2", sans-serif;
}
.startBtn {
    font-size: 30px;
    margin-top: 20rem;
}
</style>
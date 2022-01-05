<template>
    <div class="backImgDiv">
        <div class="backImg">
            <div class="titleDiv flex justify-center pt-20">
                <h1 class="text-3xl font-normal">Wrorld Hertige</h1>
            </div>
            <div class="startBtn w-10 opacity-3 rounded-full py-2 px-4 bg-white flex justify-center">
                <router-link class="text-white" to="/about"
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
.startBtn {
    font-size: 30px;
    margin-top:20rem;
}
</style>
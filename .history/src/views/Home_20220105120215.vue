<template>
    <div class="backImgDiv vh-100 vw-100 mb-10">
        <div class="backImg h-20">
            <div class="test">
                <router-link to="/about"
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
.backImg {
    background-image: url("../assets/startPage.png");
    /* width:1000px;
    height:700px; */
}
.test {
    font-size: 30px;
}
</style>

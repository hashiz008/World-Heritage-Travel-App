<template>
    <div class="backImgDiv">
        <div class="backImg">
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
    background-image: url("../assets/startPage.png")
    width
}
.test {
    font-size: 30px;
}
</style>

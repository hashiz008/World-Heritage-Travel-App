<template>
    <div class="backImgDiv">
        <div class="backImg">
          <div class="title">
            <h1>Wrorld Hertige</h1>
          </div>
            <div class="test flex">
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
.backImgDiv {
  margin-top:-60px;
}
.backImg {
    background-image: url("../assets/startPage.png");
    width: 100%;
    height: 820px;
}
.test {
    font-size: 30px;
}
</style>

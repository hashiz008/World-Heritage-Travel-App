<template>
    <div class="backgroundDiv">
        <div class="backImg vw-100">
            <div class="pt-16">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <div class="Homebtn">
                <router-link to="/">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped="lang">
.backgroundDiv {
    margin-top: -60px;
}
.backImg {
    background-image: url("../assets/mainPage.png");
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center;
    width: 100%;
    height: 820px;
}
</style>

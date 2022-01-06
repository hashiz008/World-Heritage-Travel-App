<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="pt-5">
                <h1 class="text-2xl">Images of World Heritage</h1>
            </div>
            <div class="about">
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
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 820px;
}
</style>

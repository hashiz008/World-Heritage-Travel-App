<template>
    <div class="backgroundDiv vw-100">
        <div class="flex backImg">
            <div class="pt-10 mx-auto">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <!-- <div class="Homebtn">
                <router-link to="/">Home</router-link>
            </div> -->
            <div class="imgNums  flex justify-center ">
                <h1 class="text-2xl font-bold">Number:</h1>
            </div>
            <!-- <div class="imgNums mt-56 lg:mt-10 lg:ml-56">
                <h1 class="text-2xl font-bold">Number:</h1>
            </div> -->
            <!-- <div class="imgData ml-56 lg:ml-64 mt-10 bg-blue-400 w-5 h-5">

            </div> -->
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
    background-position: center;
    width: 100%;
    height: 820px;
}
</style>

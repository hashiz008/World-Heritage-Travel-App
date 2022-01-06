<template>
    <div class="backgroundDiv vw-100">
        <div class="backImg">
            <div class="pt-10 mx-auto">
                <h1 class="text-4xl font-normal">Images of World Heritage</h1>
            </div>
            <!-- <div class="Homebtn">
                <router-link to="/">Home</router-link>
            </div> -->
            <div class="imgNums mt-40 lg:mt-10 lg:ml-56">
                <h1 class="text-2xl font-bold">Number:</h1>
            </div>
            <div class="imgData mt-10 bg-gray-800 w-20 h-20">
                <h4 class="pt-10 text-white">by:</h4>
            </div>
            <div class="btnBack bg-gray-500 h-24"></div>
            <div class="download bg-gray-500 h-24"></div>
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
@media screen and (max-width: 768px) {
    .imgData {
        margin-left: auto;
        margin-right: auto;
    }
    .btnBack {
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
        width:25rem;
    }
    .download {
        margin-left: auto;
        margin-right: auto;
        margin-top:20px;
        width:25rem;
    }
}
@media screen and (min-width: 769px) {
    .imgData {
        margin-left: 800px;
        margin-bottom: -50px;
    }
    .btnBack {
        margin-left: 600px;
        /* margin-bottom: -150px; */
        margin-top:100px;
        width:25rem;
    }
}
</style>

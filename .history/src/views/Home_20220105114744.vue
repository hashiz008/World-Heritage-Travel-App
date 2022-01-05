<template>
    <div class="test">
        <router-link to="/about">さあ！世界の旅の始まりですよ！</router-link>
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
.test {
  font-size
}
</style>
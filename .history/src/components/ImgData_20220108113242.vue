<template>
    <div v-on></div>
</template>

<script>
export default {
    data() {
        const books = [
            {num:1,name:"凱旋門"},
            {num:2,name:"凱旋門"}
        ];
    },
    methods: {
        data() {
            console.log(this.books)
        }
    }

    // name: "ImgData",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    // data: () => ({
    //     img1: {
    //         num:0,
    //         name:"凱旋門",
    //     },
    //     img2: {
    //         num:1,
    //         name:"凱旋門",
    //     }
    // }),
};
</script>

<style></style>

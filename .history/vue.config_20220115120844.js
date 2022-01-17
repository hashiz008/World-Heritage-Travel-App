module.exports = {
    plugins: [{ src: '../plugins/vue-awesome-swiper.js', ssr: false }],
    build: {
        vendor: ["vue-awesome-swiper"],
    },
};

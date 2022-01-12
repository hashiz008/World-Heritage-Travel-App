const imgData: ({
    num: number;
    name: string;
    country: string;
    img: string;
} | {
    num: number;
    name: string;
    country?: undefined;
    img?: undefined;
})[] = [
        { num: 1, name: "凱旋門", country: "フランス共和国", img: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg" },
        { num: 2, name: "サグラダファミリア", country: "スペイン王国", img: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg" },
        { num: 3, name: "モン・サン＝ミッシェル", country: "フランス共和国", img: "https://stworld.jp/feature/FR/montsaintmichel/images/img02.jpg" },
        { num: 4, name: "ケルン大聖堂", country: "ドイツ連邦共和国", img: "https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg" },
        { num: 5, name: "ストーンヘンジ", country: "イギリス", img: "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg" },
        { num: 6, name: "パルテノン神殿", country: "ギリシャ共和国", img: "https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg" },
        { num: 7, name: "ドブロブニク旧市街", country: "🇭🇷", img: "https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg" },
        { num: 8, name: "赤の広場", country: "Russia", img: "https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg" },
        { num: 9, name: "サン・ピエトロ大聖堂", country: "Vatican City", img: "https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg" },
        { num: 10, name: "コロッセオ", country: "Italy", img: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg" },
    ]

export default imgData;
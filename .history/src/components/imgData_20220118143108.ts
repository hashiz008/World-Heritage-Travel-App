const imgData: ({
    num: number;
    placeName: string;
    country: string;
    url: string;
    imgPath: string;
    latitude: number; //緯度
    longitude: number; //経度
} | {
    num: number;
    placeName: string;
    country?: undefined;
    url?: undefined;
    imgPath?: undefined;
    latitude: undefined;
    longitude: undefined;
})[] = [
        { num: 0, placeName: "凱旋門", country: "フランス共和国", url: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg", imgPath: '../img/arcDeTriomphe.jpeg',latitude:2,longitude:3},
        { num: 1, placeName: "サグラダファミリア", country: "スペイン王国", url: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg", imgPath: '../img//sagradaFamilia.jpeg',longitude:2,latitude:3},
        // { num: 2, placeName: "モン・サン＝ミッシェル", country: "フランス共和国", url: "https://stworld.jp/feature/FR/montsaintmichel/images/img02.jpg", imgPath: '../img//montsaintmichel.jpeg' },
        // { num: 3, placeName: "ケルン大聖堂", country: "ドイツ連邦共和国", url: "https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg", imgPath: '../img//cologneCathedral.webp' },
        // { num: 4, placeName: "ストーンヘンジ", country: "イギリス", url: "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg", imgPath: '../img/stonehenge.jpeg' },
        // { num: 5, placeName: "パルテノン神殿", country: "ギリシャ共和国", url: "https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg", imgPath: '../img/acropolis.jpeg' },
        // { num: 6, placeName: "ドブロブニク旧市街", country: "クロアチア共和国", url: "https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg", imgPath: '../img/dubrovnik.webp' },
        // { num: 7, placeName: "赤の広場", country: "ロシア連邦", url: "https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg", imgPath: '../img/redSquare.jpeg' },
        // { num: 8, placeName: "サン・ピエトロ大聖堂", country: "バチカン市国", url: "https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg", imgPath: '../img/sanPietroCathedral.jpeg' },
        // { num: 9, placeName: "コロッセオ", country: "イタリア共和国", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp' },
    ]

export default imgData;
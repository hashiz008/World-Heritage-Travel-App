const imgData: ({
    num: number;
    placeName: string;
    country: string;
    wiki: string;
    url: string;
    imgPath: string;
    lat: number; //緯度
    lng: number; //経度
} | {
    num: number;
    placeName: string;
    country?: undefined;
    wiki?: undefined;
    url?: undefined;
    imgPath?: undefined;
    lat: undefined;
    lng: undefined;
})[] = [
        { num: 0, placeName: "凱旋門", country: "フランス共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9", url: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg", imgPath: '', lat: 48.873, lng: 2.295 },
        { num: 1, placeName: "サグラダファミリア", country: "スペイン王国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3", url: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg", imgPath: '../img/sagradaFamilia.jpeg', lat: 41.403, lng: 2.174 },
        { num: 2, placeName: "モン・サン＝ミッシェル", country: "フランス共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9", url: "https://stworld.jp/feature/FR/montsaintmichel/images/img02.jpg", imgPath: '../img/montsaintmichel.jpeg',lat:48.636,lng: -1.511},
        { num: 3, placeName: "ケルン大聖堂", country: "ドイツ連邦共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%A4%E3%83%84", url: "https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg", imgPath: '../img/cologneCathedral.webp',lat: 50.941,lng: 6.958},
        { num: 4, placeName: "ストーンヘンジ", country: "イギリス", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%AE%E3%83%AA%E3%82%B9", url: "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg", imgPath: '../img/stonehenge.jpeg',lat:51.178,lng: -1.826},
        { num: 5, placeName: "パルテノン神殿", country: "ギリシャ共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%AE%E3%83%AA%E3%82%B7%E3%83%A3", url: "https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg", imgPath: '../img/acropolis.jpeg',lat:37.971,lng: 23.726},
        { num: 6, placeName: "ドブロブニク旧市街", country: "クロアチア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%A2%E3%83%81%E3%82%A2", url: "https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg", imgPath: '../img/dubrovnik.webp',lat:42.641,lng: 18.107},
        { num: 7, placeName: "赤の広場", country: "ロシア連邦", wiki:"https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%B7%E3%82%A2", url: "https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg", imgPath: '../img/redSquare.jpeg',lat: 55.753,lng:37.620},
        { num: 8, placeName: "サン・ピエトロ大聖堂", country: "バチカン市国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%81%E3%82%AB%E3%83%B3", url: "https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg", imgPath: '../img/sanPietroCathedral.jpeg',lat:41.904,lng: 12.448},
        { num: 9, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
    ]

export default imgData;
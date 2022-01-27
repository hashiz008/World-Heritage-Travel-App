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
        { num: 0, placeName: "凱旋門", country: "フランス共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9", url: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg", imgPath: '../img/arcDeTriomphe.jpeg', lat: 48.873, lng: 2.295 },
        { num: 1, placeName: "サグラダファミリア", country: "スペイン王国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3", url: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg", imgPath: '../img/sagradaFamilia.jpeg', lat: 41.403, lng: 2.174 },
        { num: 2, placeName: "モン・サン＝ミッシェル", country: "フランス共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9", url: "https://stworld.jp/feature/FR/montsaintmichel/images/img02.jpg", imgPath: '../img/montsaintmichel.jpeg',lat:48.636,lng: -1.511},
        { num: 3, placeName: "ケルン大聖堂", country: "ドイツ連邦共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%A4%E3%83%84", url: "https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg", imgPath: '../img/cologneCathedral.webp',lat: 50.941,lng: 6.958},
        { num: 4, placeName: "ストーンヘンジ", country: "イギリス", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%AE%E3%83%AA%E3%82%B9", url: "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg", imgPath: '../img/stonehenge.jpeg',lat:51.178,lng: -1.826},
        { num: 5, placeName: "パルテノン神殿", country: "ギリシャ共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%AE%E3%83%AA%E3%82%B7%E3%83%A3", url: "https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg", imgPath: '../img/acropolis.jpeg',lat:37.971,lng: 23.726},
        { num: 6, placeName: "ドブロブニク旧市街", country: "クロアチア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%A2%E3%83%81%E3%82%A2", url: "https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg", imgPath: '../img/dubrovnik.webp',lat:42.641,lng: 18.107},
        { num: 7, placeName: "赤の広場", country: "ロシア連邦", wiki:"https://ja.wikipedia.org/wiki/%E3%83%AD%E3%82%B7%E3%82%A2", url: "https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg", imgPath: '../img/redSquare.jpeg',lat: 55.753,lng:37.620},
        { num: 8, placeName: "サン・ピエトロ大聖堂", country: "バチカン市国", wiki:"https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%81%E3%82%AB%E3%83%B3", url: "https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg", imgPath: '../img/sanPietroCathedral.jpeg',lat:41.904,lng: 12.448},
        { num: 10, placeName: "ウィーン歴史地区", country: "オーストリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%82%B9%E3%83%88%E3%83%AA%E3%82%A2", url: "https://media.istockphoto.com/photos/vienna-capital-city-cityscape-in-austria-picture-id1060594420?k=20&m=1060594420&s=612x612&w=0&h=vqKd6Aw1lW2PYh_RABKdy9YqMs2Dhzm6c7Du71elQ-Y=", imgPath: '../img/viennaHistoricalDistrict.jpeg',lat:48.208,lng: 16.372},
        { num: 11, placeName: "イエローストーン国立公園", country: "アメリカ合衆国(ワイオミング州)", wiki:"https://ja.wikipedia.org/wiki/%E3%83%AF%E3%82%A4%E3%82%AA%E3%83%9F%E3%83%B3%E3%82%B0%E5%B7%9E", url: "https://cdn.pixabay.com/photo/2019/07/06/03/26/yellowstone-4319675__340.jpg", imgPath: '../img/yellowstone.webp',lat:44.427,lng:-110.588},
        { num: 12, placeName: "自由の女神像", country: "アメリカ合衆国(ニューヨーク州)", wiki:"https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E5%B7%9E", url: "https://cdn.pixabay.com/photo/2016/05/14/18/23/statue-of-liberty-1392273_1280.jpg", imgPath: '../img/statueOfLiberty.jpeg',lat:40.689,lng: -74.044},
        { num: 13, placeName: "グランドキャニオン国立公園", country: "アメリカ合衆国(アリゾナ州)", wiki:"https://ja.wikipedia.org/wiki/アリゾナ州", url: "https://cdn.pixabay.com/photo/2016/12/15/07/54/horseshoe-bend-1908283__480.jpg", imgPath: '../img/grandCanyon.jpeg',lat:36.054,lng: -112.140},
        { num: 14, placeName: "カナディアンロッキー", country: "カナダ", wiki:"https://ja.wikipedia.org/wiki/カナダ", url: "https://cdn.pixabay.com/photo/2012/06/27/18/58/peyto-lake-50853_1280.jpg", imgPath: '../img/canadianRockies.jpeg',lat:51.725,lng: -116.522},
        { num: 15, placeName: "ハワイ火山国立公園", country: "アメリカ合衆国(ハワイ州）", wiki:"https://ja.wikipedia.org/wiki/ハワイ", url: "https://cdn.pixabay.com/photo/2018/01/17/17/48/kilauea-3088675_1280.jpg", imgPath: '../img/kilauea.jpeg',lat:19.406,lng: -155.283},
        { num: 16, placeName: "ヨセミテ国立公園", country: "アメリカ合衆国(カリフォルニア州)", wiki:"https://ja.wikipedia.org/wiki/カリフォルニア州", url: "https://cdn.pixabay.com/photo/2016/11/10/10/03/nature-1813903_1280.jpg", imgPath: '../img/yosemiteNationalPark.jpeg',lat:37.739,lng:-119.564},
        { num: 17, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 18, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 19, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 20, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 21, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 22, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 23, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 24, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 25, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 26, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 27, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 28, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 29, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
        { num: 30, placeName: "コロッセオ", country: "イタリア共和国", wiki:"https://ja.wikipedia.org/wiki/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/colosseum.webp',lat:41.890,lng: 12.492},
    ]

export default imgData;



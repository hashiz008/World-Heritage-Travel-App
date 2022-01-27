const imgData: ({
    num: number;
    placeName: string;
    country: string;
    placeData: string;
    url: string;
    imgPath: string;
    lat: number; //緯度
    lng: number; //経度
} | {
    num: number;
    placeName: string;
    country?: undefined;
    placeData?: undefined;
    url?: undefined;
    imgPath?: undefined;
    lat: undefined;
    lng: undefined;
})[] = [
        { num: 0, placeName: "凱旋門", country: "フランス共和国", placeData:"https://www.travelwith.jp/area/europe/france/paris/topics/post-10418/", url: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg", imgPath: '../img/arcDeTriomphe.jpeg', lat: 48.873, lng: 2.295 },
        { num: 1, placeName: "サグラダファミリア", country: "スペイン王国", placeData:"https://ja.wikipedia.org/wiki/サグラダ・ファミリア", url: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg", imgPath: '../img/sagradaFamilia.jpeg', lat: 41.403, lng: 2.174 },
        { num: 2, placeName: "モン・サン＝ミッシェル", country: "フランス共和国", placeData:"https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B9", url: "https://stworld.jp/feature/FR/montsaintmichel/images/img02.jpg", imgPath: '../img/montsaintmichel.jpeg',lat:48.636,lng: -1.511},
        { num: 3, placeName: "ケルン大聖堂", country: "ドイツ連邦共和国", placeData:"https://worldheritagesite.xyz/cologne-cathedral/", url: "https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg", imgPath: '../img/cologneCathedral.webp',lat: 50.941,lng: 6.958},
        { num: 4, placeName: "ストーンヘンジ", country: "イギリス", placeData:"https://ja.wikipedia.org/wiki/ストーンヘンジ",url: "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg", imgPath: '../img/stonehenge.jpeg',lat:51.178,lng: -1.826},
        { num: 5, placeName: "パルテノン神殿", country: "ギリシャ共和国", placeData:"https://worldheritagesite.xyz/acropolis-of-athens/", url: "https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg", imgPath: '../img/acropolis.jpeg',lat:37.971,lng: 23.726},
        { num: 6, placeName: "ドブロブニク旧市街", country: "クロアチア共和国", placeData:"https://worldheritagesite.xyz/dubrovnik/#:~:text=%E3%83%89%E3%82%A5%E3%83%96%E3%83%AD%E3%83%B4%E3%83%8B%E3%82%AF%E6%97%A7%E5%B8%82%E8%A1%97%E3%81%AF%E3%80%81%E3%82%AF%E3%83%AD%E3%82%A2%E3%83%81%E3%82%A2,%E6%8B%A0%E7%82%B9%E3%81%A8%E3%81%97%E3%81%A6%E6%A0%84%E3%81%88%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82", url: "https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg", imgPath: '../img/dubrovnik.webp',lat:42.641,lng: 18.107},
        { num: 7, placeName: "赤の広場", country: "ロシア連邦", placeData:"https://worldheritagesite.xyz/moscow/", url: "https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg", imgPath: '../img/redSquare.jpeg',lat: 55.753,lng:37.620},
        { num: 8, placeName: "サン・ピエトロ大聖堂", country: "バチカン市国", placeData:"https://worldheritagesite.xyz/contents/st-peters-basilica/", url: "https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg", imgPath: '../img/sanPietroCathedral.jpeg',lat:41.904,lng: 12.448},
        { num: 10, placeName: "ウィーン歴史地区", country: "オーストリア共和国", placeData:"https://www.travelbook.co.jp/topic/14038", url: "https://media.istockphoto.com/photos/vienna-capital-city-cityscape-in-austria-picture-id1060594420?k=20&m=1060594420&s=612x612&w=0&h=vqKd6Aw1lW2PYh_RABKdy9YqMs2Dhzm6c7Du71elQ-Y=", imgPath: '../img/viennaHistoricalDistrict.jpeg',lat:48.208,lng: 16.372},
        { num: 11, placeName: "イエローストーン国立公園", country: "アメリカ合衆国(ワイオミング州)", placeData:"https://ja.wikipedia.org/wiki/%E3%83%AF%E3%82%A4%E3%82%AA%E3%83%9F%E3%83%B3%E3%82%B0%E5%B7%9E", url: "https://cdn.pixabay.com/photo/2019/07/06/03/26/yellowstone-4319675__340.jpg", imgPath: '../img/yellowstone.webp',lat:44.427,lng:-110.588},
        { num: 12, placeName: "自由の女神像", country: "アメリカ合衆国(ニューヨーク州)", placeData:"https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E5%B7%9E", url: "https://cdn.pixabay.com/photo/2016/05/14/18/23/statue-of-liberty-1392273_1280.jpg", imgPath: '../img/statueOfLiberty.jpeg',lat:40.689,lng: -74.044},
        { num: 13, placeName: "グランドキャニオン国立公園", country: "アメリカ合衆国(アリゾナ州)", placeData:"https://ja.wikipedia.org/wiki/アリゾナ州", url: "https://cdn.pixabay.com/photo/2016/12/15/07/54/horseshoe-bend-1908283__480.jpg", imgPath: '../img/grandCanyon.jpeg',lat:36.054,lng: -112.140},
        { num: 14, placeName: "カナディアンロッキー", country: "カナダ", placeData:"https://ja.wikipedia.org/wiki/カナダ", url: "https://cdn.pixabay.com/photo/2012/06/27/18/58/peyto-lake-50853_1280.jpg", imgPath: '../img/canadianRockies.jpeg',lat:51.725,lng: -116.522},
        { num: 15, placeName: "ハワイ火山国立公園", country: "アメリカ合衆国(ハワイ州）", placeData:"https://ja.wikipedia.org/wiki/ハワイ", url: "https://cdn.pixabay.com/photo/2018/01/17/17/48/kilauea-3088675_1280.jpg", imgPath: '../img/kilauea.jpeg',lat:19.406,lng: -155.283},
        { num: 16, placeName: "ウユニ塩湖", country: "ボリビア共和国", placeData:"https://ja.wikipedia.org/wikiボリビア共和国", url: "https://m.media-amazon.com/images/I/81cnnYC3XSL._AC_SX679_.jpg",imgPath:"../img/uyuniSaltLake.jpeg",lat:-20.133,lng:-67.489},
        { num: 17, placeName: "ナスカの地上絵", country: "ペルー共和国", placeData:"https://ja.wikipedia.org/wiki/ペルー共和国", url: "https://cdn.pixabay.com/photo/2015/12/12/10/58/nasca-1089342__480.jpg", imgPath: '../img/nasca.jpeg',lat:-14.739,lng:-75.130},
        { num: 18, placeName: "コルコバードの丘", country: "ブラジル連邦共和国", placeData:"https://ja.wikipedia.org/wiki/ブラジル連邦共和国", url: "https://d1d37e9z843vy6.cloudfront.net/jp/images/3261511/0ed65452c931b790ba2b922bd8ca0d712a792874_p.jpeg", imgPath: '../img/corcovado.jpeg',lat: -22.952,lng: -43.211},
        { num: 19, placeName: "イグアスの滝", country: "アルゼンチン共和国", placeData:"https://ja.wikipedia.org/wiki/アルゼンチン共和国", url: "https://cdn.pixabay.com/photo/2014/09/21/21/39/iguazu-falls-455610__480.jpg", imgPath: '../img/iguazuFalls.jpeg',lat:-25.695,lng: -54.436},
        { num: 20, placeName: "古代都市ウシュマル", country: "メキシコ合衆国", placeData:"https://ja.wikipedia.org/wiki/メキシコ合衆国", url: "https://cdn.pixabay.com/photo/2015/12/15/09/19/pyramid-1093924__480.jpg", imgPath: '../img/uxmal.jpeg',lat:20.359,lng: -89.768},
        { num: 21, placeName: "万里の長城", country: "中華人民共和国", placeData:"https://www.his-j.com/theme/world-heritage/asia/china/great-wall/", url: "https://cdn.pixabay.com/photo/2015/06/18/21/09/great-wall-of-china-814143_1280.jpg", imgPath: '../img/greatWallOfChina.jpeg',lat:40.431,lng: 116.570},
        { num: 22, placeName: "アユタヤ歴史公園", country: "タイ王国", placeData:"https://www.his-j.com/theme/world-heritage/asia/thailand/ayutthaya/", url: "hoto/2017/02/02/19/14/ayutthaya-2033589_1280.jpg", imgPath: '../img/ayutthaya.webp',lat:14.369,lng: 100.587},
        { num: 23, placeName: "アンコールワット", country: "カンボジア王国", placeData:"https://www.knt.co.jp/holiday/sp/angkorwat/spot.html", url: "https://cdn.pixabay.com/photo/2015/09/10/05/54/angkor-wat-temple-934094_1280.jpg", imgPath: '../img/angkorwatTemple.jpeg',lat:13.412,lng: 103.866},
        { num: 24, placeName: "タージ・マハル", country: "インド共和国", placeData:"https://worldheritagesite.xyz/taj-mahal/", url: "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg", imgPath: '../img/tajMahal.webp',lat:27.174,lng: 78.042},
        { num: 25, placeName: "ボロブドゥール", country: "インドネシア共和国", placeData:"https://www.his-j.com/tyo/zekkei/borobudur/", url: "https://cdn.pixabay.com/photo/2015/08/12/15/57/asia-886001__480.jpg", imgPath: '../img/borobudur.jpeg',lat:-7.607,lng: 110.203},
        { num: 26, placeName: "景福宮", country: "大韓民国", placeData:"https://www2.jhc.jp/contents/others/women/sel/spot/sightseeing/001.php", url: "https://cdn.pixabay.com/photo/2021/04/22/21/41/gyeongbokgung-6200276_1280.jpg", imgPath: '../img/gyeongbokgung.jpeg',lat:37.579,lng: 126.976},
        { num: 27, placeName: "イマーム広場", country:"イラン・イスラム共和国", placeData:"https://worldheritagesite.xyz/meidan-emamesfahan/", url: "https://www.sekaken.jp/wp-content/uploads/e494b582d05f5ebcf63b216ba3c17d9d-scaled.jpg", imgPath: '../img/meidanEmam.jpeg',lat:32.657,lng: 51.677},
        { num: 28, placeName: "ペトラ遺跡", country:"ヨルダン・ハシミテ王国", placeData:"https://worldheritagesite.xyz/petra/", url: "https://youimg1.tripcdn.com/target/10060g0000007qh9aB677_C_640_320_Q70.jpg_.webp?proc=source%2Ftrip", imgPath: '../img/petora.jpeg',lat:30.328,lng:35.444},
        { num: 29, placeName: "イスタンブール歴史地域", country: "トルコ共和国", placeData:"https://turkish.jp/tourguide/%E3%82%A4%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%96%E3%83%BC%E3%83%AB/", url: "https://cdn.pixabay.com/photo/2017/12/11/12/14/colosseum-3012088_1280.jpg", imgPath: '../img/İstanbul.jpeg',lat:41.007,lng: 28.979},
        { num: 30, placeName: "富士山", country: "日本国", placeData:"https://www.yamanashi-kankou.jp/fujisan/fujisan001.html", url: "https://cdn.zekkei-japan.jp/images/areas/db284a40bc008c81929eea5101690368.jpg", imgPath: '../img/colosseum.webp',lat:,lng: 12.492},
    ]

export default imgData;


3
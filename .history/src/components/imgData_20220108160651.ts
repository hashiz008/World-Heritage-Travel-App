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
        { num: 1, name: "凱旋門", country: "France", img: "https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392_1280.jpg" },
        { num: 2, name: "サグラダファミリア",country:"Spanish", img:"https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg"},
        { num: 3, name: "モン・サン＝ミッシェル",country:"France", img:"https://cdn.pixabay.com/photo/2015/09/20/11/48/mont-948186_1280.jp"},
        { num: 4, name: "ケルン大聖堂",country:"Germany", img:"https://cdn.pixabay.com/photo/2019/06/13/19/05/europe-4272297_1280.jpg"},
        { num: 5, name: "ストーンヘンジ",country:"British", img:"https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__480.jpg"},
        { num: 6, name: "パルテノン神殿",country:"Greek", img:"https://cdn.pixabay.com/photo/2012/11/28/09/51/acropolis-67579_1280.jpg"},
        { num: 7, name: "ドブロブニク旧市街",country:"Croatia", img:"https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg"},
        { num: 8, name: "赤の広場",country:"Russia", img:"https://cdn.pixabay.com/photo/2020/06/11/16/20/red-square-5287334_1280.jpg"},
        { num: 9, name: "サン・ピエトロ大聖堂",country:"Spanish", img:"https://cdn.pixabay.com/photo/2013/09/06/09/15/peter-179389_1280.jpg"},
        { num: 10, name: "サグラダファミリア",country:"Spanish", img:"https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084__480.jpg"},
    ]

export default imgData;
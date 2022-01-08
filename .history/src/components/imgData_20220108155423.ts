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
    ]

export default imgData;
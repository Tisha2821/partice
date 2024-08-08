const earbuds = [
    {
        id:1,
        title:"boat",
        price:4500,
        discount:78,
        gty:3
    },
    {
        id:2,
        title:"noise",
        price:4000,
        discount:18,
        gty:1
    },
    {
        id:3,
        title:"oppo",
        price:1000,
        discount:8,
        gty:10
    },
    {
        id:4,
        title:"real-me",
        price:1800,
        discount:15,
        gty:7
    },
    {
        id:5,
        title:"air-bass",
        price:2500,
        discount:8,
        gty:9
    },
];

function findEarbudsByName(title) {
    return earbuds.find(user => user.title === title);

}
const user = findEarbudsByName('boat');
console.log(user);
console.log(earbuds);

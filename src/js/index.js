/*jshint esversion: 6 */
var mymap = L.map('mapid',{
    crs: L.CRS.Simple,
    zoom: 2,
    maxZoom: 4,
    zoomControl: false,
    minZoom: 2,
    maxBounds: [[144,144],[0,0]]
}).setView([72, 72], 14);

var imageUrl = 'images/almscliffe.jpg',
    imageBounds = [[144,0], [0,144]];
L.imageOverlay(imageUrl, imageBounds).addTo(mymap);

var boulderIcon = L.icon({
    iconUrl: 'images/circle-solid.svg',
    iconSize: [24,24],
    iconAnchor: [12,12],
    popupAnchor: [12,12]
});

var boulders = [
    {
        id: 1,
        location: [30,34],
        name: "End Boulder",
        routes: [
            {name: "Finite Field", grade: "F3+", link: ""},
            {name: "End Wall", grade: "F4", link: ""},
            {name: "Field Fair", grade: "F5", link: ""},
            {name: "The High Step", grade: "F5+", link: ""},
            {name: "Morrell's Wall", grade: "F6a", link: "https://youtu.be/L2DC5NAukUw?t=25"},
            {name: "Morrell's Wall Left", grade: "F6a", link: ""},
            {name: "Fall In", grade: "F6a", link: ""},
            {name: "Swampy Arete", grade: "F6c+", link: ""},
            {name: "Morrell's Wall Traverse", grade: "F7a", link: ""},
            {name: "Fieldside Traverse", grade: "F7b", link: ""},
            {name: "Slopey Traverse", grade: "F7c", link: ""},
        ]
    },
    {
        id: 2,
        location: [40,26],
        name: "Overhanging Nose",
        routes: [
            {name: "Slap &amp; Traction", grade: "Font 6a+", link: "https://youtu.be/L2DC5NAukUw?t=70"}
        ]
    },
    {
        id: 3,
        location: [49,36],
        name: "West Cave Group",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 4,
        location: [45,46],
        name: "Everest Man Boulder",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 5,
        location: [38,49],
        name: "The Flying Arete",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 6,
        location: [47.5,62],
        name: "The Virgin",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 7,
        location: [59,61.5],
        name: "The Big Roof",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 8,
        location: [48.5,69],
        name: "The Keel",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 9,
        location: [56,70],
        name: "Wedge Boulder",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 10,
        location: [44,82.5],
        name: "Ed's Dyno",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 11,
        location: [44,91],
        name: "The Matterhorn",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 12,
        location: [54,104.5],
        name: "MK Wall",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 13,
        location: [23,115.5],
        name: "The Wall Boulder",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 14,
        location: [43.5,114],
        name: "Pinnacle Boulder",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 15,
        location: [53,112.5],
        name: "The Egg",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 16,
        location: [76,20],
        name: "Z Climb",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 17,
        location: [76.3,34.8],
        name: "Great Western",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 18,
        location: [80,46.3],
        name: "Zig Zag Direct",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 19,
        location: [85.5,54.4],
        name: "The Rift",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },
    {
        id: 20,
        location: [79.8,69.5],
        name: "Demon Wall",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    },

]

function getBoulders(boulders){
    var boulderList = "";
    boulders.forEach(boulder => {
        boulderList = boulderList +
        `
        <tr>
        <td>${boulder.grade}</td>
        <td>${boulder.name}</td>
        <td>
            <a target="_blank"  href="${boulder.link}">
                ${boulder.link == "" ? "" : '<i class="fab fa-youtube"></i>'}
            </a> 
        </td>
        </tr>`;
    });
    return boulderList;
}

boulders.forEach(boulder => {
    L.marker(boulder.location, {icon: boulderIcon}).bindPopup(`
    <h1>${boulder.name}</h1>
    <div class="row route-list">
        <table>
        `+
        getBoulders(boulder.routes)
        +`
        </table>
    </div>
    `).addTo(mymap);
});

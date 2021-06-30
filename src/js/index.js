/*jshint esversion: 6 */
navigator.serviceWorker.register('service-worker.js');
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
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
        ]
    },
    {
        id: 2,
        location: [40,26],
        name: "Overhanging Nose",
        routes: [
            {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
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
        id: 11,
        location: [44,91],
        name: "The Matterhorn",
        routes: [
            {name: "Matterhorn Ridge", grade: "Font 5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"}
        ]
    }

]

function getBoulders(boulders){
    var boulderList = "";
    boulders.forEach(boulder => {
        boulderList = boulderList + `<li>${boulder.grade} - ${boulder.name} <a target="_blank" href="${boulder.link}"><i class="fab fa-youtube"></i></a> </li>`;
    });
    return boulderList;
}

boulders.forEach(boulder => {
    L.marker(boulder.location, {icon: boulderIcon}).bindPopup(`
    <h1>${boulder.name}</h1>
    <div class="row route-list">
        <ul>
        `+
        getBoulders(boulder.routes)
        +`
        </ul>
    </div>
    `).addTo(mymap);
});

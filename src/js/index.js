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

var boulderOne = {
    location: [30,34],
    name: "Boulder one",
    boulders: [
        {name: "Boulder", grade: "Font 5+", link: "https://youtube.com"}
    ]
}

var boulderEleven = {
    name: "The Matterhorn",
    location: [50,50]
}

var boulders = [
    {
        id: 1,
        location: [30,34],
        name: "Boulder one",
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

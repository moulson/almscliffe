/*! danmoulson.com v1.0.0 | (c) 2021  | ISC License | git+https://github.com/moulson/portfolio.git */
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
            {name: "Bungle Traverse", grade: "F3", link: ""},
            {name: "Jemima", grade: "F3", link: ""},
            {name: "Hamble's Arete", grade: "F3+", link: ""},
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
            {name: "Slap &amp; Traction", grade: "F6a+", link: "https://youtu.be/L2DC5NAukUw?t=70"},
            {name: "Overhanging Nose", grade: "F6a", link: ""},
            {name: "Grape Strain", grade: "F7b+", link: ""},
            {name: "Tumbledown", grade: "F5", link: ""},
            {name: "Lasting Satisfaction", grade: "F7c+", link: ""},
            {name: "I Am A Walrus", grade: "F6c+", link: ""},
        ]
    },
    {
        id: 3,
        location: [49,36],
        name: "West Cave Group",
        routes: [
            {name: "Left Rib", grade: "F5", link: ""},
            {name: "Barley Mow", grade: "F7a", link: ""},
            {name: "Hammill's Rib", grade: "F7a", link: ""},
            {name: "West Cave Wall", grade: "F3", link: ""},
            {name: "Three Swings Traverse", grade: "F5+", link: ""},
            {name: "The Chimney Flake", grade: "F5", link: ""},
            {name: "The Postman", grade: "F4", link: ""},
            {name: "Hanging Rib", grade: "F6a", link: ""},
            {name: "Rib Right", grade: "F5+", link: ""},
            {name: "Pork Chop Slab", grade: "F5+", link: ""},
        ]
    },
    {
        id: 4,
        location: [45,46],
        name: "Everest Man Boulder",
        routes: [
            {name: "The North Ridge", grade: "F5+", link: ""},
            {name: "The Hillary Step", grade: "F5", link: ""},
            {name: "The Lhotse Face", grade: "F4", link: ""},
            {name: "The South-West Face", grade: "F6a", link: ""},
            {name: "The South Col", grade: "F3+", link: ""},
            {name: "The East Face", grade: "F4", link: ""},
        ]
    },
    {
        id: 5,
        location: [38,49],
        name: "The Flying Arete",
        routes: [
            {name: "Flying Arete", grade: "F6b", link: ""},
            {name: "The Right Wing", grade: "F6b", link: ""},
        ]
    },
    {
        id: 6,
        location: [47.5,62],
        name: "The Virgin",
        routes: [
            {name: "The Virgin Traverse", grade: "F6c", link: ""},
            {name: "Identity Crisis", grade: "F8a", link: ""},
            {name: "Cherry Falls", grade: "F8a+", link: ""},
            {name: "Crucis", grade: "F7b", link: ""},
            {name: "The Gypsy", grade: "F6b+", link: ""},
            {name: "Gypus", grade: "F6c+", link: ""},
            {name: "Central Route", grade: "F4", link: ""},
            {name: "North Top Corner", grade: "F4", link: ""},
            {name: "The Scoop", grade: "F5+", link: ""},
            {name: "The Full Virgin Traverse", grade: "F8a", link: ""},
            {name: "Canine", grade: "F8a", link: ""},
            {name: "Sewer Rat Connection", grade: "F7b+", link: ""},
            {name: "Top Cat Traverse", grade: "F7b+", link: ""}
        ]
    },
    {
        id: 7,
        location: [59,61.5],
        name: "The Big Roof",
        routes: [
            {name: "Snappy Roof", grade: "F5+", link: ""},
            {name: "Underhand", grade: "F7b+", link: ""},
            {name: "Off Campus", grade: "F5", link: ""},
        ]
    },
    {
        id: 8,
        location: [48.5,69],
        name: "The Keel",
        routes: [
            {name: "C and A Traverse", grade: "F7a", link: ""},
            {name: "In Limbo", grade: "F6c", link: ""},
            {name: "The Crack", grade: "F6b+", link: ""},
            {name: "The Keel", grade: "F7c", link: ""},
            {name: "The Bulb", grade: "F7c+", link: ""},
            {name: "Bulbhaul", grade: "F8b+", link: ""},
            {name: "Sloper Patrol", grade: "F6c+", link: ""},
        ]
    },
    {
        id: 9,
        location: [56,70],
        name: "Wedge Boulder",
        routes: [
            {name: "Pocket Watch", grade: "F5", link: ""},
            {name: "Nose Bag", grade: "F6a", link: ""},
            {name: "Pebble Frog", grade: "F5", link: ""}
        ]
    },
    {
        id: 10,
        location: [44,82.5],
        name: "Ed's Dyno",
        routes: [
            {name: "Charlie Sheen", grade: "Font 5", link: ""},
            {name: "Ed's Dyno", grade: "F6c+", link: ""},
            {name: "Teflon Traverse", grade: "F6c", link: ""},
            {name: "Scuff", grade: "F5+", link: ""},
        ]
    },
    {
        id: 10.5,
        location: [60,96],
        name: "Low Man",
        routes: [
            {name: "Groove On", grade: "F3", link: ""},
            {name: "Hop Scotch", grade: "F3", link: ""},
            {name: "Stroll", grade: "F3", link: ""},
            {name: "Well Worn", grade: "F3", link: ""},
            {name: "Toe Poke", grade: "F4+", link: ""},
            {name: "Pond Life", grade: "F4", link: ""},
        ]
    },
    {
        id: 11,
        location: [43.5,91],
        name: "The Matterhorn",
        routes: [
            {name: "Matterhorn Ridge", grade: "F5", link: "https://www.youtube.com/watch?v=ROc-Ca8tYgM"},
            {name: "Fractal", grade: "F7b", link: ""},
            {name: "Chiasmata", grade: "F8a", link: ""},
        ]
    },
    {
        id: 12,
        location: [54,104.5],
        name: "MK Wall",
        routes: [
            {name: "Short Arse", grade: "F6a+", link: ""},
            {name: "Puncture Repair", grade: "F3+", link: ""},
            {name: "Cracking Yarn", grade: "F4", link: ""},
            {name: "Pistol Whip", grade: "F7b", link: ""},
            {name: "Making Shapes", grade: "F7c+", link: ""},
            {name: "MK Original", grade: "F5", link: ""},
        ]
    },
    {
        id: 13,
        location: [23,115.5],
        name: "The Wall Boulder",
        routes: [
            {name: "Bit of a Jerk", grade: "F7b", link: ""},
            {name: "Que Fastidio", grade: "F6a+", link: ""},
        ]
    },
    {
        id: 14,
        location: [43.5,114],
        name: "Pinnacle Boulder",
        routes: [
            {name: "Worn Down", grade: "F3", link: ""},
            {name: "JP's Problem", grade: "F6a", link: ""},
            {name: "Askance", grade: "F4+", link: ""},
            {name: "Leverage", grade: "F4+", link: ""},
            {name: "Pick Pocket", grade: "F3+", link: ""},
            {name: "The Long Slab", grade: "F5+", link: ""},
        ]
    },
    {
        id: 15,
        location: [53,112.5],
        name: "The Egg",
        routes: [
            {name: "Matt's Roof", grade: "F7b+", link: ""},
            {name: "Streaky's Traverse", grade: "F7b+", link: ""},
            {name: "Silver Trout", grade: "F7b", link: ""},
            {name: "Pipping Arete", grade: "F6c+", link: ""},
            {name: "Cuticula", grade: "F6c", link: ""},
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
        <table class="table table-striped table-bordered">
        `+
        getBoulders(boulder.routes)
        +`
        </table>
    </div>
    `).addTo(mymap);
});

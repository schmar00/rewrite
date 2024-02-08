//*****START********************************************************************************************

let USER_LANG = 'en';
let BASE = location.protocol + '//' + location.host + location.pathname;




$(document).ready(function () {


    $('#text').append(window.location.href);


    let urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('search')) {
        $('#text').append('<br>' + urlParams.get('search'));



    } else if (urlParams.has('uri')) {
        $('#text').append('<br>' + urlParams.get('uri'));
        let baseURIs = ['https://data.geoscience.earth/ncl/geoera', 'https://voc.europe-geology.eu'];
        let uri = decodeURI(urlParams.get('uri').replace(/["';><]/gi, '')); //avoid injection
        let voc_uri = uri.includes(baseURIs[0]) != uri.includes(baseURIs[1]);


        if (voc_uri) {

 
        }

    } else {


    }



});
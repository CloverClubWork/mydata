const body = document.querySelector('.main-body');
const lazy = document.querySelector('.lazy-loader-effect');
const errorCon = document.querySelector('.error-con');

function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
    
// Example of how to use it
const dataID = getQueryParam('watchId');
const provider = getQueryParam('provider');
const providerId = getQueryParam('providerId');
const episodeNumber = getQueryParam('episodeNumber');
const subType = getQueryParam('subType');
const server = getQueryParam('server');

const urlParam = "https://api.anify.tv/sources?providerId="+episodeProvider+"&watchId="+watchId+"&episodeNumber="+episodeNumber+"&id="+dataID+"&subType=sub&server=gogocdn";

console.log(urlParam)
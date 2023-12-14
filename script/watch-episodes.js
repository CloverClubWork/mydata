const body = document.querySelector('.main-body');
const lazy = document.querySelector('.lazy-loader-effect');
const errorCon = document.querySelector('.error-con');

function getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
    
// Example of how to use it
const dataID = getQueryParam('id');

const urlParam = "https://api.anify.tv/episodes/"+dataID;

console.log(urlParam)
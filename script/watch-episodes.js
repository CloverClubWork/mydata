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

async function getEpisodes(){
  const response = await fetch(urlParam);
  body.style.display = 'none';
  lazy.style.display = 'flex';
  errorCon.style.display = "none";
  
  if(!response.ok){
    const error = "Failed to fetch data from server";
    throw new Error(error);
    body.style.display = 'none';
    lazy.style.display = 'none';
    errorCon.style.display = "flex";
  }
  const data = await response.json();
  return data;
}

getEpisodes()
.then(data => {
  body.style.display = 'block';
  lazy.style.display = 'none';
  errorCon.style.display = "none";
  
  console.log(data)
  
})
.catch(error => {
  errorCon.textContent = error;
});
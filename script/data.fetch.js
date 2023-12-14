async function fetchAnimeData(){
  const response = await fetch("https://api.anify.tv/seasonal/anime?fields=[id,title,coverImage,bannerImage,rating]");
  
  if(!response.ok){
    const error = "Failed to fetch data from server.";
    throw new Error(error);
  }
  
  const data = await response.json();
  return data;
  
}
fetchAnimeData()
.then(data => {
  
  const seasonalList = document.getElementById("seasonalList");
  const trendingList = document.getElementById("trendingList");
  const popularList = document.getElementById("popularList");
  const dataSeasonal = data.seasonal;
  const dataTrending = data.trending;
  const dataPopular = data.popular;
  for(const items in dataSeasonal){
    const listLi = document.createElement("li");
    const listLink = document.createElement("a");
    const listCover = document.createElement("img");
    const listTitle = document.createElement("p");
    
    listLink.setAttribute("href","");
    listLink.setAttribute("rel","stylesheet");
    listCover.setAttribute("class","cover");
    listCover.setAttribute("src","");
    listTitle.setAttribute("id","title");
  
    listTitle.textContent = dataSeasonal[items].title.romaji;
    listCover.src = dataSeasonal[items].coverImage;
    const id = dataSeasonal[items].id;
    listLink.href = "/pages.html?id="+id;
    
    listLink.appendChild(listCover);
    listLink.appendChild(listTitle);
    listLi.appendChild(listLink);
    
    seasonalList.appendChild(listLi);
    
  }
  for(const items in dataTrending){
    const listLi = document.createElement("li");
    const listLink = document.createElement("a");
    const listCover = document.createElement("img");
    const listTitle = document.createElement("p");
    
    const id = dataTrending[items].id;
    
    listLink.setAttribute("href","");
    listLink.setAttribute("rel","stylesheet");
    listCover.setAttribute("class","cover");
    listCover.setAttribute("src","");
    listTitle.setAttribute("id","title");
  
    listTitle.textContent = dataTrending[items].title.romaji;
    listCover.src = dataTrending[items].coverImage;
    listLink.href = "/pages.html?id="+id;
    
    listLink.appendChild(listCover);
    listLink.appendChild(listTitle);
    listLi.appendChild(listLink);
    
    trendingList.appendChild(listLi);
    
  }
  for(const items in dataPopular){
    const listLi = document.createElement("li");
    const listLink = document.createElement("a");
    const listCover = document.createElement("img");
    const listTitle = document.createElement("p");
    
    listLink.setAttribute("href","");
    listLink.setAttribute("rel","stylesheet");
    listCover.setAttribute("class","cover");
    listCover.setAttribute("src","");
    listTitle.setAttribute("id","title");
    
    const id = dataPopular[items].id;
    
    listTitle.textContent = dataPopular[items].title.romaji;
    listCover.src = dataPopular[items].coverImage;
    listLink.href = "/pages.html?id="+id;
    
    listLink.appendChild(listCover);
    listLink.appendChild(listTitle);
    listLi.appendChild(listLink);
    
    popularList.appendChild(listLi);
    
  }
  
})
.catch(error => console.log(error));
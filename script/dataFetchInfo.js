var page = document.querySelector('.main-body');
      const lazy = document.querySelector('.lazy-loader-effect');
      const errorCon = document.querySelector('.error-con');
      
      function getQueryParam(key) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(key);
      }
    
      // Example of how to use it
      var dataID = getQueryParam('id');
      var provider = getQueryParam('provider');
      const urlParam = "https://api.anify.tv/media/"+provider+"/"+dataID;
      
      async function fetchData(){
        const response = await fetch(urlParam);
        
        page.style.display = 'none';
        lazy.style.display = 'flex';
        errorCon.style.display = "none";
  
        if(!response.ok){
          const error = "Failed to fetch data from server";
          throw new Error(error);
          page.style.display = 'none';
          lazy.style.display = 'none';
          errorCon.style.display = "flex";
        }
        const data = await response.json();
        return data;
      }
      
      fetchData()
      .then(data => {
        
        page.style.display = 'block';
        lazy.style.display = 'none';
        errorCon.style.display = "none";
        document.getElementById("banner-details").style.backgroundImage = "url('"+data.bannerImage+"')";
        document.getElementById("cover").src = data.coverImage;
        document.getElementById("title").textContent = data.title.romaji;
        
        document.getElementById("titleEnglish").textContent = data.title.english;
        document.getElementById("titleRomaji").textContent = data.title.romaji;
        document.getElementById("titleNative").textContent = data.title.native;
        document.getElementById("ratings").textContent = data.rating.anilist;
        document.getElementById("popularity").textContent = data.popularity.anilist;
        document.getElementById("status").textContent = data.status;
        document.getElementById("type").textContent = data.type;
        document.getElementById("format").textContent = data.format;
        document.getElementById("duration").textContent = data.duration +" min";
        document.getElementById("year").textContent = data.year;
        document.getElementById("season").textContent = data.season;
        document.getElementById("description").textContent = data.description;
        
        const genresList = document.getElementById("genresList");
        const tagsList = document.getElementById("tagsList");
        const genre = data.genres;
        const tag= data.tags;
        
        for(let i = 0; i < genre.length; i++){
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.setAttribute("href","");
          a.textContent = genre[i];
          li.appendChild(a);
          genresList.appendChild(li);
        }
        for(let x = 0; x < tag.length; x++){
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.setAttribute("href","");
          a.textContent = tag[x];
          li.appendChild(a);
          tagsList.appendChild(li);
        }
        
      })
      .catch(error => {
        errorCon.textContent = error;
      });
      
      document.querySelector('.watch-btn').addEventListener('click', function(){
        window.location.href = "watch.html?id="+dataID;
      });
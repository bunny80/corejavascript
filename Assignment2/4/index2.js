async function fetchAsync () {
    
    let response = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');
    
    let data = await response.json();
 
    return data;
  }
  
  fetchAsync()
      .then(data =>{
          movie=data
        let cast=[]
        let genre=[]
        for(i in movie)
        {
            for(j in movie[i].cast)
            {    
                cast.push(movie[i].cast[j])
            }
            for(j in movie[i].genres)
            genre.push(movie[i].genres[j])
        }
        var genreMovies=[]
        var uniqueCast = cast.filter((v, i, a) => a.indexOf(v) === i);
        var uniqueGenre = genre.filter((v, i, a) => a.indexOf(v) === i);
        //console.log(uniqueGenre)
        var genreArray=[]
        for(i in uniqueGenre)
        {
            var temp2=[]
            for(j in movie)
            {
                if(movie[j].genres==[]||movie[i].cast==[])
                continue
                if(movie[j].genres.includes(uniqueGenre[i]))
                temp2.push(movie[j].cast)
                temp2.filter(n => n) 
            }
            if(temp2==[])
            continue
            genreArray.push(temp2)
        }
        genreArray.flat(3);
        console.log(genreArray)
      })
      .catch(reason => console.log(reason.message))
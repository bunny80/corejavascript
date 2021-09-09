const movie = require("./movie.json")
//const func=require("./modules/functions")
//dataSource.data.fetchAsync()
//noble=JSON.parse(noble)
//var prize=noble.prizes
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
        if(movie[j].genres.includes(uniqueGenre[i]))
        temp2.push(movie[j].cast) 
    }
    genreArray.push(temp2)
}

console.log(genreArray)



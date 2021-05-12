


// one specific movie: "http://www.omdbapi.com/?i=tt3896198&apikey=a79f43b6"




async function getMovie({title}) {
    let infoUrl = `http://www.omdbapi.com/?s=${title}&page=1&apikey=a79f43b6`;
    let posterUrl = '';

    try {
        let response = await fetch(infoUrl);
        let info = await response.json();
        posterUrl = info.Search[0].Poster;
        return {
            info: info.Search[0],
            poster: posterUrl
        };
    }
    catch(error) {
        console.log("error")
    }
}
export default getMovie;
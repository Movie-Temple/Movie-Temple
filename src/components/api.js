





async function getMovie(title) {
    let infoUrl = `http://www.omdbapi.com/?t=${title}&plot=full&apikey=a79f43b6`;


    try {
        let response = await fetch(infoUrl);
        let data = await response.json();
        data['rented'] = 0;
        data["rentExpires"] = 0;
        data['purchased'] = 0;
        data['addedToWatchlist'] = 0;
        return data;

    }
    catch(error) {
        console.log("error")
    }
}
export default getMovie;
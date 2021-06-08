





async function getMovie(title) {
    let infoUrl = `http://www.omdbapi.com/?t=${title}&plot=full&apikey=a79f43b6`;


    try {
        let response = await fetch(infoUrl);
        let data = await response.json();
        data["rentalExpiry"] = 0;
        return data;

    }
    catch(error) {
        console.log("error")
    }
}
export default getMovie;
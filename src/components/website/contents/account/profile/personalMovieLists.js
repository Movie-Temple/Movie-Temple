


import {db} from '../../../../../firebase';


const userID = "vSwz4kNz0gPxZbhD8ugqToGLwyx1";

const rentMovie = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {

            console.log(doc.data());
            
            const rented = doc.data().rented;
            console.log(rented);

            const timestamp = Date.now();
            rented[movieID] = timestamp;
            console.log(rented);

            db.collection("CUSTOMERS").doc(userID).update({
              rented
            })
            .then(() => {
                console.log('Movie added to rented in firestore')
            })
            
        } else {
            console.log("no such document")
        }
    }).catch((error) => {
        console.log("error: ", error)
    });
});

const buyMovie = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {

            console.log(doc.data());
            
            const purchased = doc.data().purchased;
            console.log(purchased);

            const timestamp = Date.now();
            purchased[movieID] = timestamp;
            console.log(purchased);

            db.collection("CUSTOMERS").doc(userID).update({
              purchased
            })
            .then(() => {
                console.log('Movie added to purchased in firestore')
            })
            
        } else {
            console.log("no such document")
        }
    }).catch((error) => {
        console.log("error: ", error)
    });
});

const addToWatchlist = ((movieID) => {
    db.collection("CUSTOMERS").doc(userID).get().then((doc) =>{
        if (doc.exists) {

            console.log(doc.data());
            
            const watchlist = doc.data().watchlist;
            console.log(watchlist);

            const timestamp = Date.now();
            watchlist[movieID] = timestamp;
            console.log(watchlist);

            db.collection("CUSTOMERS").doc(userID).update({
              watchlist
            })
            .then(() => {
                console.log('Movie added to watchlist in firestore')
            })
            
        } else {
            console.log("no such document")
        }
    }).catch((error) => {
        console.log("error: ", error)
    });
});


//create a timestamp in unix time format:
const timestamp = Date.now()
//format timestamp to date and time in Sweden corrected for daylight saving changes (to show date/time on screen):
const formattedTime = Intl.DateTimeFormat('sv-SE', {dateStyle: 'full', timeStyle: 'short'}).format(timestamp)



if (currentUserUid) {
    db.collection("CUSTOMERS").doc(currentUserUid).set({
        card: cardRef.current.value,
    }, { merge: true })
    .then(() => {
        console.log("card details successfully added");
    })
    .catch((error) => {
        console.error("error saving card details: ", error);
    }); 
} else {
    console.log('no useruid, one have to log in to add card details')
}

export {rentMovie, buyMovie, addToWatchlist};
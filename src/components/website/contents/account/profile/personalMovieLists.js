


import {db} from '../../../../../firebase';


const userID = "vSwz4kNz0gPxZbhD8ugqToGLwyx1";

const rentAMovie = ((movieID) => {
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




//create a time in a universal system of milliseconds since 1970/01/01:
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

export default rentAMovie;
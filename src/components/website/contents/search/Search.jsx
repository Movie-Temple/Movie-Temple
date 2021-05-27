import React, { Component } from 'react';
import { db } from '../../../../firebase';
const Search = () => {

    const addFriestore = () => {
        console.log("Clicked !");

        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        console.log("Clicked 2!");
    };
    
        return (
            <div>
                <h2>Search Component</h2>
                <button onClick={addFriestore}> Firestore!!! </button>
                
            </div>
        )
    
}

export default Search
//import '../profileSettings.css'

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../../../firebase';

const ProfileSettings = () => {

    const [cardDetails, setCardDetails] = useState('');
    const [showCardDetails, setShowCardDetails] = useState(false);
    const cardRef = useRef();
    const currentUserUid = useSelector(state => state.currentUserUid);

    const toggleShowCardDetails = () => {
        setShowCardDetails(!showCardDetails);
    }

    useEffect(() => {
        db.collection("CUSTOMERS").doc(currentUserUid)
            .onSnapshot((doc) => {
                const result = doc.data().card;
                setCardDetails(result);
            });
    }, []);

    const save = () => {

        if (currentUserUid) {
            db.collection("CUSTOMERS").doc(currentUserUid).set({
                card: cardRef.current.value,
            }, { merge: true })
            .then(() => {
                console.log("card details successfully added");
                setShowCardDetails(false);
            })
            .catch((error) => {
                console.error("error saving card details: ", error);
            }); 
        } else {
            console.log('no useruid, one have to log in to add card details')
        }
    }

    return (
        <div className='profile-settings'>
            <p>Change password</p>
            <p>Change e-mail</p>
            <p onClick={toggleShowCardDetails}>Add/edit payment details</p>
            {showCardDetails 
            ? 
            <div>
                <input type='number' id='card-details' name='card-details' ref={cardRef} defaultValue={cardDetails}/>
                <button onClick={save}>Save</button> 
            </div>
            : 
            ''}
            <br/>
        </div>
    )
}

export default ProfileSettings;
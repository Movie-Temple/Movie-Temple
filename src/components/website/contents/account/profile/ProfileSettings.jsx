//import '../profileSettings.css'

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../../../firebase';

const ProfileSettings = () => {

    const [cardDetails, setCardDetails] = useState('');
    const cardRef = useRef();
    const currentUserUid = useSelector(state => state.currentUserUid);

    const addEditCardDetails = () => {
        console.log('click')
        //  toggle input field here...
    }

    const save = () => {

        //setCardDetails(cardRef);

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
    }

    return (
        <div className='profile-settings'>
            <p>Change password</p>
            <p>Change e-mail</p>
            <p onClick={addEditCardDetails}>Add/edit payment details</p>
            <input type='number' id='card-details' name='card-details' ref={cardRef}/><button onClick={save}>Save</button><br/>
        </div>
    )
}

export default ProfileSettings;
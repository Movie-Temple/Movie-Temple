import '../profile/profileSettings.css';

import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../../../firebase';
import { current } from 'immer';

const ProfileSettings = () => {

    const [cardDetails, setCardDetails] = useState('');
    const [showCardDetails, setShowCardDetails] = useState(false);
    const cardRef = useRef();
    const currentUserUid = useSelector(state => state.currentUserUid);
    const bankCard = useSelector(state => state.bankCard);

    const toggleShowCardDetails = () => {
        setShowCardDetails(!showCardDetails);
    }

    /*useEffect(() => {
        if (currentUserUid) {
            db.collection("CUSTOMERS").doc(currentUserUid)
            .onSnapshot((doc) => {
                const result = doc.data().bankCard;
                if (result) {
                    setCardDetails(result);
                }
            });
        }
    }, []); */

    const save = () => {

        if (currentUserUid) {
            db.collection("CUSTOMERS").doc(currentUserUid).set({
                bankCard: cardRef.current.value,
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
            <p className='profile-settings-change-password'>Change password</p>
            <p className='profile-settings-change-email' >Change e-mail</p>
            <p className='profile-settings-change-card' onClick={toggleShowCardDetails}>Add/edit payment details</p>
            {showCardDetails 
            ? 
            <div>
                <input type='number' id='card-details' name='card-details' placeholder={bankCard} ref={cardRef} defaultValue={cardDetails}/>
                <button className='profile-settings-save-card-button' onClick={save}>Save</button> 
            </div>
            : 
            ''}
            <br/>
        </div>
    )
}

export default ProfileSettings;
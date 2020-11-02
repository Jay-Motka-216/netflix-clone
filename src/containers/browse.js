import React, { useContext, useEffect, useState } from 'react';

import SelectProfileContainer from './profiles';
import { Header, Loading } from '../components';

import { FirebaseContext } from '../context/firebase';

function BrowseContainer({slides}) {

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [ profile, setProfile ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return(
            profile.displayName ? ( <>
                {loading ? (<Loading src={user.photoURL} /> ) : (<Loading.ReleaseBody />)}
                
                <Header src='joker1'><p>Hello</p> </Header>
                </>
            ) 
            : <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}

export default BrowseContainer;
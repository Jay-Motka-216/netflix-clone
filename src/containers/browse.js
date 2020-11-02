import React, { useContext, useEffect, useState } from 'react';

import SelectProfileContainer from './profiles';
import { Header, Loading } from '../components';

import * as ROUTES from '../constants/route';
import logo from '../logo.svg';

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
                
                <Header src='joker1'>
                    <Header.Frame>
                        <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netlix" />
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Movies</Header.TextLink>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>Forever alone in a crowd, failed comedian Arthur Fleck seekd connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world.</Header.Text>
                    </Header.Feature>
                </Header>
                </>
            ) 
            : (<SelectProfileContainer user={user} setProfile={setProfile} />)
    );
}

export default BrowseContainer;
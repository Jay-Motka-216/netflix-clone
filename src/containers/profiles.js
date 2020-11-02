import React from 'react';

import { Header, Profiles } from '../components';

import * as ROUTES from '../constants/route';
import logo from '../logo.svg';

function SelectProfileContainer({ user, setProfile }){
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netlix" />
                </Header.Frame>

                <Profiles>
                    <Profiles.Title>Who's watching?</Profiles.Title>
                    <Profiles.List>
                        <Profiles.Item onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL,})}>
                            <Profiles.Picture src={user.photoURL} />
                            <Profiles.Name>{user.displayName}</Profiles.Name>
                        </Profiles.Item>
                    </Profiles.List>
                </Profiles>
            </Header>
        </>
    );
}

export default SelectProfileContainer;
import React from 'react';

import * as ROUTES from '../constants/route';
import  logo from '../logo.svg';

import { Header } from '../components';

function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}

export default HeaderContainer;
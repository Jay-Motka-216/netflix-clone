import React from 'react';

import FooterContainer from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';

function Home() {
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited fils, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancle at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default Home;
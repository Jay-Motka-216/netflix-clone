import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Logo, Button, Background, Feature, Text, FeatureCallOut, TextLink, Group } from './styles/header';

export default function Header({bg = true, children, ...props}){
    return(
        bg ? <Background {...props}>{children}</Background> : children
    );
}

Header.Feature = function HeaderFeature({children, ...props}) {
    return <Feature {...props}>{children}</Feature>;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...props}) {
    return <FeatureCallOut {...props}>{children}</FeatureCallOut>;
}

Header.TextLink = function HeaderTextLink({children, ...props}) {
    return <TextLink {...props}>{children}</TextLink>;
}

Header.Text = function HeaderText({children, ...props}) {
    return <Text {...props}>{children}</Text>;
}

Header.Frame = function HeaderFrame({children, ...props}){
    return <Container {...props} >{children}</Container>;
}

Header.Group = function HeaderGroup({children, ...props}){
    return <Group {...props} >{children}</Group>;
}

Header.Logo = function HeaderLogo({to, ...props}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...props} />
        </ReactRouterLink>
    );
}

Header.ButtonLink = function HeaderButtonLink({to,children, ...props}){
    return (
        <Button to={to} {...props} >{children}</Button>
    );
}
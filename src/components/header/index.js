import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Logo, Button, Background } from './styles/header';

export default function Header({bg = true, children, ...props}){
    return(
        bg ? <Background {...props}>{children}</Background> : children
    );
}

Header.Frame = function HeaderFrame({children, ...props}){
    return <Container {...props} >{children}</Container>;
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
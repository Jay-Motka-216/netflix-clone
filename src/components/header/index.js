import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Logo, Button, Background, Feature, Text, FeatureCallOut, TextLink, Group, Picture, Dropdown, Profile, Search, SearchIcon, SearchInput, PlayButton } from './styles/header';

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

Header.PlayButton = function HeaderPlayButton({children, ...props}){
    return (
        <PlayButton {...props} >{children}</PlayButton>
    );
}

Header.Profile = function HeaderProfile({children, ...props}){
    return (
        <Profile {...props} >{children}</Profile>
    );
}

Header.Picture = function HeaderPicture({ src, ...props }) {
    return ( <Picture src={`images/users/${src}.png`} {...props} /> );
}

Header.Dropdown = function HeaderDropdown({ children, ...props}) {
    return( <Dropdown {...props}>{children}</Dropdown> );
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...props}) {
    const [ sactive, setActive ] = useState(false);
    return ( 
        <Search {...props}>
            <SearchIcon onClick={() => setActive((sactive) => !sactive)}>
                <img src='images/icons/search.png' alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search" active={sactive} />
        </Search>
     );
}
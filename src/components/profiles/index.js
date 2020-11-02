import React from 'react';

import { Container, Title, Picture, Item, Name, List, User } from './styles/profiles';

export default function Profiles({ children, ...props }) {
    return(
        <Container {...props}>{children}</Container>
    );
}

Profiles.Title = function ProfileTitle({ children, ...props}) {
    return <Title {...props}>{children}</Title>;
}

Profiles.Item = function ProfileItem({ children, ...props}) {
    return <Item {...props}>{children}</Item>;
}

Profiles.User = function ProfileUser({ children, ...props}) {
    return <User {...props}>{children}</User>;
}

Profiles.List = function ProfileList({ children, ...props}) {
    return <List {...props}>{children}</List>;
}

Profiles.Picture = function ProfilePicture({ src, ...props}) {
    return <Picture {...props} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />;
}

Profiles.Name = function ProfileName({ children, ...props}) {
    return <Name {...props}>{children}</Name>;
}
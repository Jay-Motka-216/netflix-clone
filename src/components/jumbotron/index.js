import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

function Jumbotron({children, direction = 'row', ...props }) {
    return(
        <Item direction={direction} >
            <Inner>
                {children}
            </Inner>
        </Item>
    );
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
    return <Pane {...props}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
    return <SubTitle {...props}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronImage({ ...props }) {
    return <Image {...props} />;
}
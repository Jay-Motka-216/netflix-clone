import React from 'react';
import { Inner, Container } from './styles/jumbotron';

function Jumbotron({children, direction = 'row', ...props }) {
    return(
        <Inner direction={direction} >
            {children}
        </Inner>
    );
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}
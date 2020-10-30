import React from 'react';
import { Container, Base, Error, Title, Text, SmallText, Link, Input, Submit } from './styles/form';

export default function Form({children, ...props}){
    return(
        <Container {...props}>{children}</Container>
    );
}

Form.Base = function FormBase({children, ...props}){
    return(<Base {...props}>{children}</Base>);
}

Form.Error = function FormError({children, ...props}){
    return(<Error {...props}>{children}</Error>);
}

Form.Title = function FormTitle({children, ...props}){
    return(<Title {...props}>{children}</Title>);
}

Form.Text = function FormText({children, ...props}){
    return(<Text {...props}>{children}</Text>);
}

Form.SmallText = function FormSmallText({children, ...props}){
    return(<SmallText {...props}>{children}</SmallText>);
}

Form.Input = function FormInput({children, ...props}){
    return(<Input {...props}>{children}</Input>);
}

Form.Submit = function FormSubmit({children, ...props}){
    return(<Submit {...props}>{children}</Submit>);
}

Form.Link = function FormLink({to, children, ...props}){
    return(<Link to={to} {...props}>{children}</Link>);
}
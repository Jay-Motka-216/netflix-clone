import React from 'react';
import { Container, Text, Input, Button, Break } from './styles/opt-form';

export default function OptForm({children, ...props}) {
    return (<Container {...props} >{children}</Container>);
}

OptForm.Input = function OptFormInput({...props}){
    return <Input {...props} />;
}

OptForm.Button = function OptFormButton({children, ...props}){
    return(
        <Button {...props}>
            {children} <img src="images/icons/chevron-right.png" alt="Try Now!" />
        </Button>
    );
}

OptForm.Text = function OptFormText({children, ...props}){
    return <Text {...props} >{children}</Text>;
}

OptForm.Break = function OptFormBreak({...props}){
    return <Break {...props} />;
}
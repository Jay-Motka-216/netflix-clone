import React from 'react';

import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading';

export default function Loading({ src, ...props }) {
    return(
        <Spinner {...props}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    );
}

Loading.ReleaseBody = function LodingReleaseBody(){
    return <ReleaseBody />;
}
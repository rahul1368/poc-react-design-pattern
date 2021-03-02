import React, { lazy, Suspense } from 'react';

const loadable = (importFunc) => {
    const LazyComponent = lazy(importFunc);

    return props => (
        <Suspense fallback={<Loading />}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

function Loading(props){
    return(
        <p>Loading...</p>
    )
}

export default loadable;
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const SubPage = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {props.children}
        </main>
    );
};

export default SubPage;
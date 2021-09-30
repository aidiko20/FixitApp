import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <div>
            <h1>Main page</h1>
            <Form />
            <Posts />
        </div>
    )
}

export default App;

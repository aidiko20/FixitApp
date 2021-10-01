import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';

function App() {
    const [ currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <div>
            <h1>Main page</h1>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Posts setCurrentId={setCurrentId}/>
        </div>
    )
}

export default App;

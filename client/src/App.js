import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import useStyles from './styles';

function App() {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h5" align="center">Fixit</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={2}>
                        <Grid item sm={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid items sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;

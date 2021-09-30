import React, { useState } from 'react';
import { TextField, Typography, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../actions/posts';

function Form() {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        location: '',
        createdAt: '',
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {
        setPostData({title: '', description: '', location: '', createdAt: ''})
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6" gutterBottom>Please fill out the form</Typography>
            <TextField name="title" variant="outlined" fullWidth value={postData.title} onChange={(e) => {setPostData({...postData, title: e.target.value})}} label="Title" />
            <TextField name="description" multiline rows={4} variant="outlined" fullWidth value={postData.description} onChange={(e) => {setPostData({...postData, description: e.target.value})}} label="Description" />
            <TextField name="location" type="number" variant="outlined" fullWidth value={postData.location} onChange={(e) => {setPostData({...postData, location: e.target.value})}} label="Please enter zip code" />
            <TextField name="createdAt" variant="outlined" type="date" fullWidth value={postData.createdAt} onChange={(e) => {setPostData({...postData, createdAt: e.target.value})}} label="Posted On" InputLabelProps={{shrink: true,}}/>
            <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>

    )
}

export default Form;

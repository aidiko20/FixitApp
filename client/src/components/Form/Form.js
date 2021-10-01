import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import FileBase from 'react-file-base64';

function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        location: '',
        createdAt: '',
        selectedFile: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if(post) setPostData(post)
    }, [post]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
            clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({title: '', description: '', location: '', createdAt: '', selectedFile: ''})
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6" gutterBottom>Please fill out the form</Typography>
            <TextField name="title" variant="outlined" fullWidth value={postData.title} onChange={(e) => {setPostData({...postData, title: e.target.value})}} label="Title" />
            <TextField name="description" multiline rows={4} variant="outlined" fullWidth value={postData.description} onChange={(e) => {setPostData({...postData, description: e.target.value})}} label="Description" />
            <TextField name="location" type="number" variant="outlined" fullWidth value={postData.location} onChange={(e) => {setPostData({...postData, location: e.target.value})}} label="Please enter zip code" />
            <TextField name="createdAt" variant="outlined" type="date" fullWidth value={postData.createdAt} onChange={(e) => {setPostData({...postData, createdAt: e.target.value})}} label="Posted On" InputLabelProps={{shrink: true,}}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>

    )
}

export default Form;

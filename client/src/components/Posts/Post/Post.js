import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';


function Post({ post, setCurrentId }) {

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <Typography variant="h6" color="textPrimary">{post.title}</Typography>
            <CardContent varaint="body2" color="textSecondary" component="p">{post.description}</CardContent>
            <Typography variant="body2" color="textSecondary"><RoomOutlinedIcon fontSize="small"/>{post.location}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            <CardActions>
            <Button size="small" color="secondary" fontSize="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" />Delete</Button>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
            </CardActions>
        </Card>
    )
}

export default Post

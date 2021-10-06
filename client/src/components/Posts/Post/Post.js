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
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
            <Typography variant="body1">{post.title}</Typography>
            </div>
            <CardContent>
                <Typography varaint="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <div className={classes.details}>
            <Typography variant="subtitle2" color="textSecondary"><RoomOutlinedIcon fontSize="small"/>{post.location}</Typography>
            <Typography variant="subtitle2">Posted: {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <CardActions>
            <Button size="small" color="secondary" fontSize="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" />Delete</Button>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
            </CardActions>
        </Card>
    )
}

export default Post

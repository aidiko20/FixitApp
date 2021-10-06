import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },

    paper: {
        padding: theme.spacing(1),
        width: '100%' ,
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      buttonSubmit: {
        marginBottom: 10,
      },

      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
}))
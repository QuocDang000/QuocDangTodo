import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import useStyles from './style';

function TodoItems(props) {
    const classes = useStyles();

    const {title ,handleDelete} = props

    return (
        <div className={classes.item}>
            <DeleteIcon onClick={handleDelete}/>
            <CheckBoxOutlinedIcon />
            <p>{title}</p>
        </div>
    )
}

export default TodoItems
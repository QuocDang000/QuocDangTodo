// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import useStyles from '../style'


function Pagination(props) {
    const classes = useStyles();

    const { pageCount ,handleClickNext ,handleClickPrev } = props

    return(
        <div className={classes.controlBtn}>
            <button
                disabled={pageCount <= 1}
                onClick={handleClickPrev}
            >       
                <NavigateBeforeOutlinedIcon/>
            </button>

            <button
                onClick={handleClickNext}
            >
                <NavigateNextOutlinedIcon/>  
            </button>
        </div>
    )
}

export default Pagination
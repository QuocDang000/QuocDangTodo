import { Margin } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    header: {
        textAlign: "center",
        alignItems: "center",
    },

    body: {
        height: "650px",
        overflow: "auto"
    },

    modal: {
        backgroundColor: "#dcd4d4",
        position: "fixed",
        height: "100%",
        width: "100%",
    },

    content: {

    },

    taskState: {
        color: "#df0606",
        fontWeight: "400",
        fontSize: "17px",
    },

    title: {
        fontWeight: "bolder",
        fontSize: "xxx-large",
        opacity: "0.6",
    },

    wrapper: {
        position: "relative"
    },

    logOutBtn: {
        border: "none",
        background: "#fff"
    },

    logOut: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#d146cf",
    },

    addBtn: {
        display: "flex",
        alignItems: "center",
        border: "none",
        background: "#fff"
    },

    item: {
        display: "flex",
        alignItems: "center"
    },

    li: {
        listStyle: "none"
    },

    controlPage: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    loadingBtn: {
        // marginTop: "30px",
        position: "fixed",
        zIndex: "2",
        // alignItems: "center",
        border: "none",
        width: "100vw",
        height: "100vh",
        margin: "20px"
    },

    itemNumber: {
    //    position: "fixed",
    //     zIndex: "1",
        // marginBottom: "40px"
    },

    controlBtn: {
        marginRight: "15px"
    },

    notiContent: {
        color: "#e01010"
    }

}))

export default useStyles
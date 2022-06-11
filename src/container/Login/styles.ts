import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";
import { wrap } from "module";

const useStyles = makeStyles(() => ({
    wrapper: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },

    wrapperColumn: {
        maxWidth: "1024px",
        margin: "auto"
    },

    columnLeft: {
        margin: "auto"
    },

    wrapper_content: {

    },

    title: {
        marginBottom: "40px"
    },

    content: {
        opacity: "0.5",
        fontSize: "small",
    },

    introduce: {
        textAlign: "left"
    },

    formInput: {

    },

    mailInput: {
        width: "231px",
        // backgroundColor: "#e280cc78",
        marginBottom: "20px"
    },

    passwordInput: {
        // backgroundColor: "#e280cc78",
        width: "231px"
    },

    submitBtn: {
        padding: "12px 92px",
        // borderRadius: "5px",
        // border: "1px solid",
    },

    contentPassword: {
        opacity: "0.5",
        fontSize: "small",
    },

    notiContent: {
        color: "#e01010"
    },

    
    // submitBtn: {
    //     fontSize: "18px",
    //     color: "#fff",
    // }

}));

export default useStyles
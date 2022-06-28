import { makeStyles } from "@mui/styles";

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
        marginBottom: "20px"
    },

    passwordInput: {
        width: "231px"
    },

    submitBtn: {
        padding: "12px 92px",
    },

    contentPassword: {
        opacity: "0.5",
        fontSize: "small",
    },

    notiContent: {
        color: "#e01010"
    },
}));

export default useStyles
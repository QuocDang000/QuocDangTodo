import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  header: {
    textAlign: "center",
    alignItems: "center",
  },

  body: {
    height: "650px",
    overflow: "auto",
  },

  modal: {
    backgroundColor: "#dcd4d4",
    position: "fixed",
    height: "100%",
    width: "100%",
  },

  content: {},

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
    position: "relative",
  },

  logOutBtn: {
    border: "none",
    background: "#fff",
  },

  logOut: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#d146cf",
  },

  addBtn: {
    color: "#333",
    display: "flex",
    padding: "0px 10px",
    background: "#fff",
    alignItems: "center",
    border: "solid 1px #000",
    marginTop: "10px",
    backgroundColor: "#f9f9f9",
    '&:hover': {
        backgroundColor: "#3e90df"
    }
  },

  item: {
    display: "flex",
    alignItems: "center",
  },

  li: {
    marginTop: "150px"
  },

  liItem: {
    listStyle: "none",

  },

  controlPage: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loadingBtn: {
    position: "fixed",
    zIndex: "2",
    border: "none",
    width: "100vw",
    height: "100vh",
    margin: "20px",
  },

  itemNumber: {},

  controlBtn: {
    marginRight: "15px",
  },

  notiContent: {
    color: "#e01010",
  },

  iconDelete: {
    color: "#000",
    '&:hover': {
        color: "red"
    }
  },

  status: {

  },

  textFieldBox: {
    position: "fixed",
    zIndex: 1,
    top: "140px",
    left: "50px",
  },

  textField: {
    backgroundColor: "#f9f9f9"
  }


}));

export default useStyles;

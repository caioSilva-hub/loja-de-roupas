import { makeStyles } from "@material-ui/core";

const headerStyle = makeStyles(() => ({
  container: {
    maxWidth: "1290px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "24px",
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "sans-serif",
  },

  header: {
    height: "100px",
    display: "flex",
    backgroundColor: "#ebab8f",
    marginBottom: "10px",
    "& input": {
      outline: 0,
      width: "450px",
      border: "0px",
      height: "30px",
      borderRadius: "8px",
      backgroundColor: "#ead9d1"
    }
  },
  input:{
    display:"flex",
    alignItems:"center"
  },

  headerCompra: {
    height: "50%",
    cursor: "pointer"
  },

  logo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& img": {
      height: "55%",
      marginRight: "5px"
    }
  },

  modalCompras: {
    width: "24%",
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    background: "#1f1f1f",
    zIndex: 2000,
    borderLeft: "0.3rem double #ebab8f",
    borderRadius: "15px",
    "& img": {
      width: "430px",
      opacity: "30%",
      padding: "10%"
    }
  },

  closeModal: {
    cursor: "pointer",
    margin: "20px"
  },
}))
export { headerStyle }

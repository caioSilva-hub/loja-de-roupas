import { makeStyles } from "@material-ui/core";

const carrinhoStyle = makeStyles(() => ({

  modalCompras: {
    width: "24%",
    height: "100%",
    position: "fixed",
    top: 0,
    right: 0,
    background: "#1f1f1f",
    zIndex: 2000,
    borderLeft: "0.3rem double #ebab8f",
    borderRadius: "15px 0 0 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow:"scroll"
  },
  tittle: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color:"#ebab8f",
    fontSize:"24px"
  },

  imgCarVazio: {
    width: "100%",
    opacity: "30%",
    padding: "10%"
  },

  closeModal: {
    cursor: "pointer",
    margin: "20px"
  },
}))
export { carrinhoStyle }

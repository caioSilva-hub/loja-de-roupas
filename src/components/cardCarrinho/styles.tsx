import { makeStyles } from "@material-ui/core";

const cardCarrinhoStyle = makeStyles(() => ({
    blococar:{
        display: 'flex',
        borderBottom: '1px solid #ebab8f',
        alignItems: "center",
    },

    titlecar: {
        fontSize: "14px",
        color: "#ebab8f",
    },
    imgcar:{
        width: "20%",
        margin: "20px"
    },

    precocar:{
        color: "white",
        fontWeight: 500,
        fontSize: "14px",
    },

    finalizar:{
        borderRadius: "5px",
        height: "45px",
        fontSize: "14px",
        marginTop: "30px",
        border:"2px solid #ebab8f",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#ebab8f",
        width:"220px",
        cursor: "pointer",
        marginBottom:"25px",
        "&:hover": {
          opacity: "80%",
        }
    }


}))
export { cardCarrinhoStyle }



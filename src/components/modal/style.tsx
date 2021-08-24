import { makeStyles } from "@material-ui/core";

const ModalStyles = makeStyles(() => ({
    modal: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.1)",
        zIndex: 2000,
      },
    
      modalInterno: {
        width: "50%",
        height: "60%",
        top: 0,
        left: 0,
        background: "#1f1f1f",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column"
      },
    
      closeModal: {
        alignSelf: "flex-end",
        margin: "15px",
        cursor: "pointer"
      },
      modalContent: {
        display: "flex",
        height: "90%",
        alignItems: "center"
      },
      divImageModal:{
        width: "50%", 
        height: "90%",
        display:"flex",
        marginLeft: "5%",
        "& img":{
          height:"93%"
        }
      },
      divInfoModal:{
        color:"#ebab8f",
        width: "50%", 
        height: "60%",
      },
      titulo:{
        fontSize:"24px",
        fontWeight: "bold",
      },
      preco:{
        fontSize:"22px",
        color:"white",
        marginBottom: "0px"
      },
      vezes:{
        marginTop: "0px",
        color:"white", 
      },
    
      tamanho:{
        marginBottom: "0px",
        fontSize: "12px",
      },
      addcar:{
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
        "&:hover": {
          opacity: "80%",
        }
      },

      desconto:{
        backgroundColor: "red",
        position: "absolute", 
        color: "white",
        width: "50px",
        textAlign: "center",
    
        marginTop: "30px",  
        "& p":{
          margin: "10%",
        }  
      },
      "@media (max-width:1366px)":{
        divInfoModal:{
          height:"100%"
        }
      }
}))
export { ModalStyles }

import { makeStyles } from "@material-ui/core";

const ItenStyles = makeStyles(() => ({
    content:{
        display:"flex"
    },
    button:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"35px",
        padding:"5px",
        border:"2px solid #ebab8f",
        margin:"5px",
        cursor:"pointer",
        "&:hover":{
            background:"#ebab8f",
            color: "white",
        }
    },
    active:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"35px",
        padding:"5px",
        border:"2px solid #ebab8f",
        margin:"5px",
        cursor:"pointer",
        background:"#ebab8f",
        color: "white"
    },
    buttoDisable:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"35px",
        padding:"5px",
        border:"2px solid #747474",
        margin:"5px",
        color:"#747474",
        cursor:"context-menu"
    }
}))
export { ItenStyles }

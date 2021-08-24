import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core";

const ItenStyles = makeStyles(() => ({
  container: {
    maxWidth: "1290px",
    width: "100%",
    margin: "0 auto",
  },

  contentCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "0 30px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "#1f1f1f",
    fontWeight: "bold",
    cursor: "pointer",
    "& :after": {
      content: "",
      flex: "auto"
    }
  },

  image: {
    height: "460px",
    marginBottom: "10px",
    backgroundColor: "#ebab8f",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "300px",
    cursor: "pointer",
    "& img": {
      height: "400px",
      borderRadius: "20px 20px 0 0",
      width: "100%"
    }
  },

  txt: {
    marginTop: "15px",
    marginBottom: 0,
  },

  txtPrice: {
    marginTop: 0,
    color: "#9e6246"
  },

  desconto:{
    backgroundColor: 'red',
    position: 'absolute', 
    color: 'white',
    width: '50px',
    textAlign: 'center',

    marginTop: '30px',  
    '& p':{
      margin: '10%',
    }  
  },

  blocotxt:{
    textAlign:'center'
  }
}))
export { ItenStyles }

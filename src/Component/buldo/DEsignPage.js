import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardDev from '../elements/cardDev';
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";



const DEsignPage =(props)=> {

   
  
        return <Grid container  item xs={12} xl={12}  alignItems="center" >


            <Grid container xs={12}  md={6}  xl={6}
                  >
                <Grid item xs={12}  md={7} xl={7}>
                    <h1 style={{fontSize:"3em"}}> {props.titre} </h1>
                    <h2 style={{fontSize:"2em"}}> {props.subtitre} </h2>
                    <h3> {props.content}</h3>
                </Grid>
                <Grid item xs={12} md={10} xl={10} bgcolor="background.paper"
                      color="text.primary"
                      textAlign="left">
                    <Typography textAlign="left">

                    </Typography>
                </Grid>
            </Grid>

            <Grid item container md={5} xl={5}
                  
                  direction="row"
                  justify="center"
                  alignItems="center"

                  style={{ borderColor: "#F27127",
                      borderRadius: "8px" }}>
                <CardDev datas={props.datas}/>
            </Grid>

        </Grid>

 

}
export default DEsignPage;

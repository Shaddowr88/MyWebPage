import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardDev from '../../cardDev';
import Typography from "@material-ui/core/Typography";



const DEsignPage =(props)=> {

   
  
        return <Grid container
                     direction="row-reverse"
                     spacing={3} item xs={12} sm={12} alignItems="center" >
            <Grid container sm={12}  md={6} justify="flex-start" alignItems="center"
                  style={{paddingLeft: "1em", marginLeft:"3em", marginTop:"3em"}}>
                <Grid item xs={12} sm={12} md={9} xl={12}>
                    <h1 style={{fontSize:"3em"}}> {props.titre} </h1>
                    <h2 style={{fontSize:"2em"}}> {props.subtitre} </h2>
                    <h3> {props.content}</h3>
                </Grid>
                <Grid item xs={12} sm={9} md={10} bgcolor="background.paper"
                      color="text.primary"
                      textAlign="left" style={{marginRight: "4em", marginBottom: "1em", }}>
                    <Typography textAlign="left">

                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={5} spacing={3} container zIndex="modal"
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ borderColor: "#F27127",
                      borderRadius: "8px", display:"flex" }}>
                <CardDev datas={props.datas}/>
            </Grid>

        </Grid>

 

}
export default DEsignPage;

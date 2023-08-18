import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardGrid from "../../card";
import Typography from "@material-ui/core/Typography";

class DEsignPage extends React.Component {
    render() {
        return <Grid container
                     direction="row-reverse"
                     spacing={4} item xs={12} sm={12} >
            <Grid container sm={12}  md={8} justify="flex-start" alignItems="center"
                  style={{paddingLeft: "1em", color: "white", marginLeft:"3em", marginTop:"3em"}}>
                <Grid item xs={12} sm={12} md={9} >
                    <h1 style={{fontSize:"4em"}}> Graphiste freelance </h1>
                    <h3> depuis trois ans, je collabore à la création de votre identité de marque
                        et conçois les outils print et digitaux (logo, papeterie, packaging, siteWeb) nécessaires
                        à la communication de vos projets.</h3>
                </Grid>
                <Grid item xs={12} sm={9} md={10} bgcolor="background.paper"
                      color="text.primary"
                      textAlign="left" style={{marginRight: "4em", marginBottom: "1em", }}>
                    <Typography textAlign="left">

                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={3} spacing={3} container zIndex="modal"
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ borderColor: "#F27127", color: "#f5f5f5",
                      borderRadius: "8px" }}>
                <h1 >Projets récent</h1 ><br/> <br/>
                <CardGrid/>
            </Grid>

        </Grid>

    }

}
export default DEsignPage;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

class PresentationPage extends React.Component {
    render ({image}){

      return  <Grid container spacing={2}>

            <Grid xs={12} sm={12}>
                <h1>{image.textes}</h1>
                <h2>  Quam ob rem id primum videamus, si placet, quatenus amor in amicitia
                    progredi debeat. Numne,</h2>
            </Grid>
            <Grid xs={12} sm={12}>
                <Typography>
                    Quam ob rem id primum videamus, si placet, quatenus amor in amicitia
                    progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam
                    arma illi cum Coriolano debuerunt?
                </Typography>

            </Grid>
            {/*  <Grid item xs={12} sm={6} container spacing={1}>
                   <CardGrid/>
                   <CardGrid/>
            </Grid>
            */}
        </Grid>

    }
}
export default PresentationPage;

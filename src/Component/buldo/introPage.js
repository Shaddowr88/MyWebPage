import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carddyn from '../elements/carddyn'


const IntroPage =()=>{
        return <Grid container spacing={2} item xs={12} sm={12} style={{marginBottom:"2em"}}>
            <Grid item xs={12} sm={12}  container
                  direction="row" >
                <Grid item xs={12} sm={7}>
                    <h1 style={{fontSize:"4em"}}> Innover, Accomplir, Exceller  </h1>
                </Grid>
                <Grid item xs={12} sm={7} >
                    <p style={{fontSize:"2em"}}>
                    Graphiste et développeur web, je vous accompagne dans vos projets de création.
                    Expert en design, développement. Ensemble nous releverons le défis qu'est la création 
                    de solutions percutantes.
                    </p>
                </Grid>
            </Grid>
           
                    <Carddyn/>
           
        </Grid>
    
}
export default IntroPage;

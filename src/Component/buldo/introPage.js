import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carddyn from '../../carddyn'


class IntroPage extends React.Component {
    render (){
        return <Grid container spacing={2} item xs={12} sm={12}>
            <Grid item xs={12} sm={12} container
                  direction="row" >
                <Grid item xs={12} sm={7} style={{borderBottom:"solid"}}>
                    <h1 style={{fontSize:"4em"}}> SKILL's </h1>
                    <h2>
                        À votre service
                    </h2>
                </Grid>
                {/*  <Grid item xs={12} sm={7} >
                    <p>
                        Quam ob rem id primum videamus, si placet, quatenus amor in amicitia
                        progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam
                        arma illi cum Coriolano debuerunt? num Vecellinum amici regnum adpetentem,
                        num Maelium debuerunt iuvare?

                        Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii
                        montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus
                        Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae
                        coniunxit.

                    </p>
                </Grid> */}
            </Grid>
            <Grid item xs={12} sm={12} container direction="row">
                    <Carddyn/>
                {/*  <Grid xs={12} sm={12} md={3} style={{padding:"1em",backgroundColor:"#F2A922", margin:"1em", borderRadius:"8px",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h3>SOFT SKILL'S</h3>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Créatif</li><br/>
                        <li>Curiosité intellectuelle</li><br/>
                        <li>Capacité à résoudre les problèmes</li><br/>
                        <li>Sens du travail en équipe</li><br/>
                        <li>Esprit critique</li><br/>
                        <li>Bon communicant</li><br/>
                    </ol>

                </Grid>*/}
            </Grid>
        </Grid>
    }
}
export default IntroPage;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import B4S from "./static/images/B4S/B4S copie.png";
import BIZON from "./static/images/Bizon/bizon.png";
import '../src/App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        
        marginTop: 100,
        overflow:"hidden",
        display: 'flex',
        //flexDirection: 'column',
        flexWrap: 'wrap',
        //justifyContent: "space-around",
    },

}));




const CardDev=(props)=> {
    const IMAGES = props.datas;


    const classes = useStyles();
    return (
        <Grid className={classes.root} >
            {IMAGES.map(i => (
            <Grid container xl={5} md={3} xs={12} className="script-car-box" 
                style={{marginBottom: "2em", display: 'flex', alignContent:'center',justifyContent: "center" }}>
               
                        <Link
                            style={{textDecoration: "none"}}
                            key={i.id} to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                            <img color={i.color} src={i.src} className= "imgIcones" alt="complex"  />
                        </Link>
               
                <Grid item md={9} xs={12} sm container style={{display: 'flex',
                        flexWrap: 'wrap', justifyContent: "center", alignItems:"center"}}>
                    <Grid item xs container direction="column" >
                        <Grid item xs>
                            <Link
                                style={{textDecoration: "none"}}
                                key={i.id}
                                to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                                <Typography gutterBottom variant="subtitle1" style={{fontSize:'2em', fontWeight: 'bolder'}} >
                                    {i.title}
                                </Typography> </Link>
                            <Typography variant="body2" gutterBottom style={{fontSize:'1em', fontWeight:'bold'}} >
                                {i.textes}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
           ))}
        </Grid>
    );
}

export default CardDev;

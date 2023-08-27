import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        height:100,
        //overflow:"hidden",
        display: 'flex',
        //flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: "space-around",
    },

}));




const CardDev=(props)=> {
    const IMAGES = props.datas;


    const classes = useStyles();
    return (
        <Grid className={classes.root} >
            {IMAGES.map(i => (
            <Grid item xl={4} md={4} xs={5} className="script-car-box" 
               >
               
                        <Link
                            style={{textDecoration: "none"}}
                            key={i.id} to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                            <img color={i.color} src={i.src} className= "imgIcones" alt="complex"  />
                        </Link>
               
                       
                            <Link
                                style={{textDecoration: "none"}}
                                key={i.id}
                                to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                                <Typography gutterBottom variant="subtitle1" style={{fontSize:'1.5em', fontWeight: 'bolder'}} >
                                    {i.title}
                                </Typography> 
                            </Link>
                            <Typography variant="body2" gutterBottom style={{fontSize:'0.9em', fontWeight:'bold'}} >
                                {i.textes}
                            </Typography>
             </Grid>
           ))}
        </Grid>
    );
}

export default CardDev;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import B4S from "./static/images/B4S/B4S copie.png";
import MSWW from "./static/images/msww/msww.png";
import '../src/App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 600,
        alignContent: 'center',

    },

    image: {
        width: 50,
        height: 50,
        marginTop: 10,
    },

    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const IMAGES = [
    { id: 0, title: "MS WOODWORK",textes: "Artisan Menuisier", color: "DarkOrchid", src:MSWW },
    { id: 3, title: "delilce", textes: "presentation de delilce", color: "Tomato", src:B4S },
  //  { id: 4, title: "SAMOVAR", textes: "presentation de SAMOVAR", color: "Tomato", src:B4S },
];


export default function CardGrid() {
    const classes = useStyles();
    return (
        <div   className={classes.root} style={{paddinTop:"6em"}} >
            {IMAGES.map(i => (
            <Grid container spacing={2} className="script-car-box" style={{margin: "2em"}} >
                    <Grid item xs={3}>
                        <div className={classes.image} >
                            <Link
                                style={{textDecoration: "none", color:"white"}}
                                key={i.id} to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                                <img color={i.color} src={i.src} className={classes.img} alt="complex"  />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={9} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Link
                                    style={{textDecoration: "none", color:"white"}}
                                    key={i.id}
                                    to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                                <Typography gutterBottom variant="subtitle1">
                                    {i.title}
                                </Typography> </Link>
                                <Typography variant="body2" gutterBottom style={{marginBottom:"2em"}} >
                                    {i.textes}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
             </Grid>
           ))}
        </div>
    );
}

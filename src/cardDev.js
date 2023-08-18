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
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 600,
        marginTop: 100,
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
    { id: 1, title: "BIZON", textes: "Gestionnaire de copropriété",  color: "LimeGreen", src:BIZON },
    { id: 2, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
];


export default function CardDev() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {IMAGES.map(i => (
            <Grid container spacing={2} className="script-car-box" style={{marginBottom: "2em"}}>
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
                                <Typography gutterBottom variant="subtitle1" >
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

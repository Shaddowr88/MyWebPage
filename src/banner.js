import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


class BannerGrid extends React.Component {


    render() {
        return <div className={this.styles.root}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm container>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={this.styles.paper}>
                        <ButtonBase className={this.styles.image}>
                            <img className={this.styles.img} alt="complex" src="/static/images/grid/complex.jpg"/>
                        </ButtonBase>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }

    styles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 90,
            height: 90,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));
}

export default BannerGrid;

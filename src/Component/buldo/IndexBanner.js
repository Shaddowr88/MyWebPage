import React from 'react';
import Grid from '@material-ui/core/Grid';
import INTRO from "../../static/images/Banner.png";
import Hidden from "@material-ui/core/Hidden";
import BannerIll from "../../bannerIllus";

    class   BannerIndex extends React.Component {
        render() {
            return <div style={{"height": "50em", justifyContent: "center", paddingBottom:"2em"}}>



                <Grid>
                    <Grid md={4} xs={2} style={{}}>
                        <Hidden only={['xs','sm']}>
                            <div style={{position:"relative"}}>
                            </div><BannerIll/>
                        </Hidden>


                        <Hidden only={['xl','md','lg']}>
                            <div style={{position:"relative", width:"4em", border:"black",}}>
                                <img className="img" src={INTRO} alt="" style={{position:"absolute",
                                    filter: "blur(4px)","height": "15em", marginTop:"3em",top: "30em", left:"3em" }}/>
                                <img className="img" src={INTRO} alt="" style={{position:"absolute",
                                    height:"15em", marginTop:"3em",top: "30em", left:"3em" }} />
                            </div>
                        </Hidden>
                    </Grid>
                    <Grid md={8} xs={4}>
                        <div style={{paddingLeft: "5em"}}>
                            <Grid container spacing={1} xs={12} lg={12}
                                  >
                                <Hidden only={['xs','sm']}>
                                    <Grid container lg={5} xs={2} style={{fontSize: "9em", paddinTop: "1em", marginTop: "1em", color: "white"}}>
                                        Loic <span >SUNVÉ</span> <br/>
                                    </Grid>
                                    <Grid  lg={10} xs={14} style={{fontSize: "4em", color: "white"}}>
                                        <span> DESIGN & DEVELOPPEMENT WEB </span>
                                    </Grid>
                                </Hidden>
                                <Hidden only={['xl','md','lg']}>
                                    <Grid container lg={5} xs={2}
                                          style={{fontSize: "6em", paddinTop: "2em", marginTop: "1em", color: "white"}}>
                                        Loic <span >SUNVÉ</span> <br/>
                                    </Grid>
                                    <Grid container lg={5} xs={12} style={{fontSize: "2em", color: "white"}}>
                                        <span style={{color: "white"}}> DESIGN & DEVELOPPEMENT WEB </span>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        }
    }
export default BannerIndex;

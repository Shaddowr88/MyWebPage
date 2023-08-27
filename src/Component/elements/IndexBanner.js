import React from 'react';
import Grid from '@material-ui/core/Grid';
import INTRO from "../../static/images/Banner.png";
import Hidden from "@material-ui/core/Hidden";
import BannerIll from "./bannerIllus";

    const BannerIndex =()=> {
       
            return <div style={{
                height: "50em", 
                display: 'flex', 
                justifyContent: 'flex-start', 
                }}>



                <Grid style={{ display: 'flex', alignContent: 'space-around',marginTop:"5em"  ,flexWrap:"wrap"}}>
                  
                    <Grid md={4} xs={3}>
                        <div style={{paddingLeft: "5em"}}>
                            <Grid container spacing={1} xs={12} lg={12} >
                                    <Grid container 
                                    lg={12} 
                                    xs={2} 
                                    style={{
                                       
                                        color: "white"}} 
                                        sx={{ display: 'flex', 
                                        alignContent: 'space-around' 
                                        }}>
                                       <h1 style={{fontSize:"7vh" }}> Loic <span > SUNVÉ</span> <br/></h1>
                                    </Grid>
                                    <Grid  lg={12} xs={12} style={{fontSize:"4vh", display: 'flex', alignItems:'center'  }}>
                                       <a> DESIGN & DEVELOPPEMENT WEB </a> 
                                    </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid xxl={2} md={4} xs={2} sx={{ display: 'flex', flexWrap: 'wrap'  }}>
                        <Hidden only={['xs','sm']}>
                            <div style={{position:"relative"}}>
                            </div><BannerIll/>
                        </Hidden>

                        <Hidden only={['xl','md','lg']}>
                            <div >
                                <img className="img" src={INTRO} alt="" style={{
                                    filter: "blur(3px)","height": "15em", marginTop:"3em",top: "30em", left:"3em" }}/>
                               
                            </div>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        }
    
export default BannerIndex;

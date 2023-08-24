import React, { Component } from "react";
import IntroPage from "./Component/buldo/introPage";
import Container from "@material-ui/core/Container";
import ProjectPage from "./Component/buldo/projectPage";
import ToolBarApp from "./Component/ Steering/toolBar";
import $ from "jquery";
import BannerIndex from "./Component/buldo/IndexBanner";
import Hidden from "@material-ui/core/Hidden";
import BottomToolBarApp from "./Component/ Steering/bottumToolBar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DEsignPage from "./Component/buldo/DEsignPage";
import B4S from "./static/images/B4S/B4S copie.png";
import MSWW from "./static/images/msww/msww.png";
import BIZON from "./static/images/Bizon/bizon.png";
import BannerIll02 from "./bannerIllus02";

const DESIGN= [
    { id: 0, title: "MS WOODWORK",textes: "Artisan Menuisier", color: "DarkOrchid", src:MSWW },
    { id: 3, title: "delilce", textes: "presentation de delilce", color: "Tomato", src:B4S },
  //  { id: 4, title: "SAMOVAR", textes: "presentation de SAMOVAR", color: "Tomato", src:B4S },
];

const DEV = [
    { id: 1, title: "BIZON", textes: "Gestionnaire de copropriété",  color: "LimeGreen", src:BIZON },
    { id: 2, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
    { id: 3, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
    { id: 4, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },

];

class App extends Component {
    componentDidMount() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() < 40) {
                   // console.log ($(document).scrollTop());
                    $(".Welcome").hide();
                    $(".NavName").css("color", "white");
                } else{
                    $(".Welcome").fadeIn( 200 ).css({background: "#102D40", boxShadow: "-1px 8px 17px 6px rgba(0,0,0,0.28)"});
                    $(".NavName").css("font-weight", "bold");
                }
                if ($(document).scrollTop() > 550) {
                    $(".mydiv2").fadeIn( "slow" );
                } else {
                    $(".mydiv2").fadeOut( "slow" );
                }

               
                /*if ($(document).scrollTop() > 1890) {
                    $(".mydiv").show( 500 );
                    $(".mydiv").fadeIn( 1000 );
                } else {
                    $(".mydiv").fadeOut( "slow" );
                }*/
                if ($(document).scrollTop() < 450) {
                    $(".img").fadeIn( 1500 );
                }else{
                    $(".img").fadeOut( 500 );}

            });
        });
    }

    render() {
        return (
            <div>
                    {/* -------------------------------------------------- Nav Component -------------------------------------------------- */}
                <ToolBarApp />
             
  
                <div style={{ overflow:"hidden",display: 'flex',flexWrap: 'wrap'}}>
            <Grid item xl={6} md={12} xs={12}>
                        {/* -------------------------------------------------- introduction Component -------------------------------------------------- */}
                    <BannerIndex/>
                   
                    {/* -------------------------------------------------- Skill component -------------------------------------------------- */}
                    <Container  id="section_1" style={{  paddingLeft:"3em", }}>
                        <IntroPage/>
                    </Container>
                    </Grid>
                    {/* -------------------------------------------------- animate div 01 -------------------------------------------------- */}
                  
           <Grid item xl={6} md={12}  xs={12} style={{overflow: "auto", margingBottom:"10em"}} className="block01">
                    <Container id="section_2" >
                        <Hidden only={'xs'}>
                            <div md={12} xs={4} style={{height: "20em",
                                borderRadius:"5px", marginLeft:"1em", marginTop:"1em", backgroundSize:"cover", paddingTop:"3em"}}>
                                <Grid item  md={12} xs={4}></Grid>
                                <Typography variant="h4"  gutterBottom style={{fontStyle: "italic", fontWeight:"lighter",paddingTop:"1em"}}>« Les bons  </Typography>
                                <Grid md={12} xs={1}>
                                    <Typography variant="h2" component="h2" > DESIGNS</Typography>
                                </Grid>
                                <Grid md={12} xs={12} >
                                    <p style={{fontStyle: "italic", fontWeight:"lighter", fontSize:"2em"}}>
                                ne dépendent pas du support que l’on utilise. Pour créer un design de qualité,
                                il faut bien réfléchir à ce que l’on veut faire et au cadre dans lequel cela s’inscrit, avant même de commencer. »
                                        - Susan Kare   </p>
                                </Grid>

                                
                            </div>
                        </Hidden>
                        {/*-------------------------------------------------- Design component --------------------------------------------------*/}
                        <div item xl={12}  md={12} xs={4} style={{height: "20em",color:"white",
                                borderRadius:"5px", backgroundSize:"cover", paddingTop:"3em"}}>
                                
                        <Grid item xl={12}  md={12} xs={12} style={{ borderRadius:"5px",
                            backgroundSize:"cover"}}>
                            <Hidden only={['sm', 'lg', 'md','xl']}>
                                <Grid>
                                    <Typography variant="h2" component="h2" > DEV.</Typography>
                                </Grid>
                            </Hidden>
                            <Hidden only={['xs']}>
                                <Grid item xl={12} md={12} xs={12}>
                                    <h1 style={{fontSize:"5em"}} variant="h2" component="h2" > GRAPHISME & COMMUNICATION</h1>
                                </Grid>
                            </Hidden>
                            {/* -------------------------------------------------- Dev component -------------------------------------------------- */}
                            
                            <DEsignPage titre= "Créativité Envolutive : " subtitre=" 4 Ans de Fusion Design-Marketing pour Sublimer Votre Identité "
                        content = "Sculpté l'identité de marque et élaboré des outils print et digitaux percutants – logos captivants, papeteries élégantes, packagings ingénieux et sites web interactifs. Mon approche fusionne design et marketing pour catalyser la communication de vos projets vers de nouveaux sommets visuels et stratégiques."
                        datas={DESIGN}/>
                        </Grid></div>
                    </Container>
                    <Container  id="section_3" style={{ color:"white", paddingTop:"1em", marginTop:"15em"}} >
                    <div item  md={12} xs={4} style={{height: "20em",color:"white",
                                borderRadius:"5px", marginLeft:"1em", backgroundSize:"cover", paddingTop:"3em"}}>
                                
                        <Grid item  md={12} xs={12} style={{ borderRadius:"5px",
                            backgroundSize:"cover"}}>
                            <Hidden only={['sm', 'lg', 'md','xl']}>
                                <Grid>
                                    <Typography variant="h2" component="h2" > DEV.</Typography>
                                </Grid>
                            </Hidden>
                            <Hidden only={['xs']}>
                                <Grid item  md={12} xs={12}>
                                    <h1 style={{fontSize:"5em"}} variant="h2" component="h2" > DEVELOPPEMENT</h1>
                                </Grid>
                            </Hidden>
                            {/* -------------------------------------------------- Dev component -------------------------------------------------- */}
                             
                            <DEsignPage titre= "Forgeur d'Expériences Digitales : " subtitre= "Du Concept à la Réalité, Mon Parcours au Cœur de Vos Projets "
                        content = "De la conception à la réalité, je mais en œuvre des projets numériques diversifiés. En tant que développeur web, taillé des sites vitrines, e-commerces et applications iOS/Android est ma passion. La fusionne du design et développement pour façonner des expériences digitales mémorables qui laissent une empreinte sur vos utilisateurs."
                        datas={DEV}/>
                        </Grid></div>
                    </Container>
            </Grid>

                   
                  {/* ----------------------------------------------- Footer component -------------------------------------------------- */}
                    
                  
                </div>
                <BottomToolBarApp/>
            </div>
        );
    }
}
export default App;

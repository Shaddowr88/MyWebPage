import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CardDev from "../elements/cardDev";
import ILLUS2 from "../../static/images/illustration02.png";
import Hidden from "@material-ui/core/Hidden";
import BannerIll02 from "../elements/bannerIllus02";
import B4S from "../../static/images/B4S/B4S copie.png";
import BIZON from "../../static/images/Bizon/bizon.png";





const ProjectPage = ()=>{

    const IMAGES = [
        { id: 1, title: "BIZON", textes: "Gestionnaire de copropriété",  color: "LimeGreen", src:BIZON },
        { id: 2, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
        { id: 3, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
        { id: 4, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
        { id: 5, title: "B4S", textes: "Application cross plateforme", color: "Tomato", src:B4S },
    
    ];
  
        return <Container direction="row" >
            <Grid container spacing={2} >
                <Grid  l={6} md={12} xs={12}  >
                    <h3>
                        Je participe à la création de votre projet numérique.
                        Qu’il s’agisse d’un site vitrine, e-commerce ou une application ios/android
                    </h3>
              
                    <Grid className="mydiv" xs={12}
                          style={{  color: "#f5f5f5", padding: "2em",
                              borderRadius: "8px", marginTop:"1em",overflow:"hidden",display: 'flex',flexWrap: 'wrap'}}>
                        <CardDev datas={IMAGES}/>
                    </Grid>

                  
                </Grid>


            </Grid>

        </Container>
    
}
export default ProjectPage;

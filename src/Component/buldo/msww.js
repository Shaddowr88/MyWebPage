import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router-dom";
import FLORAL from "../../static/images/Flora.jpg";
import MSWW01 from "../../static/images/msww/Flora.jpg";
import MSWW02 from "../../static/images/msww/Captu01.jpg";
import MSWW03 from "../../static/images/msww/Captu02.jpeg";
import Bison01 from "../../static/images/Bizon/imacbizon.png";
import Bison02 from "../../static/images/Bizon/Bizzon.png";
import Bison03 from "../../static/images/Bizon/Mokebizoniphone.png";
import Lima from "../../static/images/Banner02.png";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import {useTheme} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import SvgIcon from '@material-ui/core/SvgIcon';
import ImageGridZoom from "../elements/ImageGridZoom"


export default function MswwPage() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event,newValue) => { setValue(newValue)};
    const handleChangeIndex = (index) => { setValue(index)};

    const IMAGES = [

        { id: 0,
            title: "MS WOODWORK",
            textes: "Menuisier Spécialiste dans la création et l'agencement de meubles sur-mesure. ",
            texte01: "Projet combine texture et courbe naturel du bois aux mathématiques et à la géométrie. ",
            label01:" Intro",
            label02:"Design",
            label03:"Aperçu",
            title02: "MS WOODWORK Menuisier",
            texte02: "Identité visuelle de pme spécialiser dans l'agencement et la conception de meuble sur mesure\n" +
                "    de fonctionnalité Gestion des utilisateurs, rôle et autorisation par utilisateur.",
            tdescribe02: "Espace de gestion des contacts.\n" +
                "        Un Dashboard pour visualiser rapidement des événements et dépenses.\n" +
                "        Interfaces Multi compte.",
            techno02: "Laravel : mySQL",
            color: "DarkOrchid",
            src:FLORAL,
            sample00:"John",
            sample01:MSWW01 ,
            sample02:MSWW02 ,
            sample03:MSWW03 ,
            sample05:"Jones",
        },

        { id: 1,
            title: "BIZON",
            textes: "CRM en mode SAAS",
            label01:" intro",
            label02:" DEv",
            label03:"aperçus",
            texte01: "Le CRM Bizon, est un Gestionnaire de co-propriété ",
            texte010: " Il a pas objectif de permettre aux poriétaires de gérer et certaines actions de la copropriété. Aux gestionnaire de copropriété, de se focaliser sur la gestion ministre à tous ",
            title02: "Laravel",
            texte02: " Née au cour d'un",
            title03: "Bizon Un CRM en mode SAAS",
            texte03: "Le CRM bizon , est un gestionnaire de biens immobiliers qui permet de bénéficier de fonctionnalité Gestion des utilisateurs, rôle et autorisation par utilisateur.",
            tdescribe02: "Espace de gestion des contacts. Un Dashboard pour visualiser rapidement des événements et dépenses.\n" +
                "        Interfaces Multi compte.",
            techno02: "Laravel : mySQL",
            color: "DarkOrchid",
            src:Lima,
            pict: [
            Bison01 ,
            Bison02 ,
            Bison03 ,
            ]
        },

        { id: 2,
            title: "B4S",
            textes: "Application mobile de gestion de la réputation numérique",
            label01:" label01",
            label02:" label02",
            label03:"label03",
            texte01: "Connexion et interactions aux différents réseaux sociaux . Espace de gestion des contenus . Dashboard pour visualiser les KPI",
            title02: " ……B4S" ,
            texte02: "Gestion des utilisateurs, rôle et autorisation par utilisateurs. Espace de gestion des contacts. Un Dashboard pour visualiser rapidement des événements et dépenses. Interfaces Multi compte",
            title03: "Bizon Un CRM en mode SAAS",
            texte03: "Connexion et interactions aux différents réseaux sociaux . Espace de gestion des contenus. Dashboard pour visualiser les KPI",
            techno02: "Laravel : mySQL",
            color: "DarkOrchid",
            src:Lima,
            pict: [
                "John" , "Bison02" ,"Bison03" , "Jones"
        ]
           
        },

    ];

   /* function Image(props) {
        return (
            <div>
                <img style={{ width: "100%", height: 400, }} color={image.color} src={image.src}  alt="complex"  />
            </div>
        );
    }

    */

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
    if (!image) return <div style={{ height:"100vh",}}>
        <Grid>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a style={{  height:"5em",  }}> En cours de construction</a>
        </Grid>
        </div>;


    return (
        <div style={{ paddinTop:"4em", height:"120vh"}}>
            <Grid>
                <div>

                        <Grid container spacing={1} xs={12} lg={12} >
                            <Container>
                             <h2 container style={{fontSize:"4em", paddingTop:"1em"}}>  {image.title} </h2>
                            </Container>
                        </Grid>


                    <Grid md={4} style={{fontSize:"1em",padding:"1em"}} >
                        <a href="/" > <HomeIcon  style={{paddingLeft:"3em"}} /> </a>
                        {/*<a href="/" variant="h6" color="inherit" style={{}}>
                            <div  style={{color: "red",}}> HOME</div>
                        </a>*/}
                    </Grid>

                    {/* menus de navigation pour affichage de type medium à large */}

                   <Grid container>
                    <Grid spacing={1} xs={12} sm={3} lg={2} fixed  >
                        <Hidden only={['sm', 'lg', 'md','xl']}>
                            <div  color="default" style={{ padding:"1em"}}>
                                <Tabs  value={value} onChange={handleChange}  indicatorColor="secondary"
                                       textColor="primary" variant="fullWidth" aria-label="full width tabs example">
                                    <Tab label="Présentation"   {...a11yProps(0)} />
                                    <Tab label="Fonctionalités" {...a11yProps(1)} />
                                    <Tab label="appercus" {...a11yProps(2)} />
                                </Tabs>
                            </div>
                        </Hidden >


                        {/* menus de navigation pour affichage de type smartphone */}

                        <Hidden only={['xs']}>
                            <div position="static" color="default" style={{ marginTop:"2em", padding:"1em"}}>
                                <Tabs  value={value} onChange={handleChange}  indicatorColor="secondary"
                                       textColor="light" orientation="vertical"  variant="fullWidth" aria-label="full width tabs example"
                                 >
                                    <Tab label={image.label01}   {...a11yProps(0)} />
                                    <Tab label={image.label02} {...a11yProps(1)} />
                                    <Tab label={image.label03} {...a11yProps(2)} />
                                </Tabs>
                            </div>
                        </Hidden >
                    </Grid>


                       {/* comptenue des rubriques*/}

                    <Grid xs={12} sm={4} lg={10}>
                    <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value} onChangeIndex={handleChangeIndex} >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Grid container md={11} lg={11} xs={12}
                                  style={{fontSize:"2em",padding:"1em"}}>
                                <h1>{image.textes}</h1>
                                <p>{image.texte01}</p>
                            </Grid>
                            <Grid xs={12} sm={8} style={{fontSize:"2em",paddingLeft:"1em"}}>
                                <p>
                                    {image.texte010}
                                </p>
                            </Grid>
                        </TabPanel>

                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container spacing={2} >

                                <Grid xs={12} sm={12} style={{fontSize:"2em",}}>
                                    <h1>{image.title02}</h1>
                                    {image.title02}
                                </Grid>
                                <Grid xs={12} sm={8}>
                                    <p>
                                        {image.texte02}
                                    </p>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value={value} index={2} dir={theme.direction}>

                        <ImageGridZoom images={image.pict} />

                           
                        </TabPanel>
                    </SwipeableViews>
                    </Grid>
            </Grid>
                </div>
            </Grid>
</div>
    );}

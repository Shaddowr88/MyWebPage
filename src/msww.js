import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router-dom";
import FLORAL from "./static/images/Flora.jpg";
import MSWW01 from "./static/images/msww/Flora.jpg";
import MSWW02 from "./static/images/msww/Captu01.jpg";
import MSWW03 from "./static/images/msww/Captu02.jpeg";
import Bison01 from "./static/images/Bizon/imacbizon.png";
import Bison02 from "./static/images/Bizon/Bizzon.png";
import Bison03 from "./static/images/Bizon/Mokebizoniphone.png";
import Lima from "./static/images/Banner02.png";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import {useTheme} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import SvgIcon from '@material-ui/core/SvgIcon';

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
            sample00:"John",
            sample01:Bison01 ,
            sample02:Bison02 ,
            sample03:Bison03 ,
            sample05:"Jones"
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
            sample00:"John" ,
            sample02:Bison02 ,
            sample03:Bison03 ,
            sample05: "Jones"
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
    if (!image) return <div style={{ backgroundColor:"#rgba(12,6,6,0.62)", height:"20em",}}>
        <Grid>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a style={{  color: "rgba(12,6,6,0.62)", letterSpacing: ".15em", textShadow: "1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, " +
                "-4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, " +
                "-8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, " +
                "-12px 24px 1px #9e9c9c,-13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, " +
                "-16px 32px 1px #b2b1b0,-17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, " +
                "-20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, " +
                "-24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #FFFDFC, " +
                "-28px 56px 1px #e4e3e2", fontSize:"8em", height:"5em",  }}> En cours de construction</a>
        </Grid>
        </div>;


    return (
        <Grid style={{ paddinTop:"4em",backgroundColor:"#102D40", color:"white"}}>
            <Grid>
                <div>

                        <Grid container spacing={1} xs={12} lg={12} >
                            <Container>
                             <Grid container style={{fontSize:"4em", paddingTop:"1em"}}>  {image.title} </Grid>
                            </Container>
                        </Grid>


                    <Grid md={4} style={{fontSize:"1em",padding:"1em"}} >
                        <a href="/" > <HomeIcon  style={{color: "white",paddingLeft:"3em"}} /> </a>
                        {/*<a href="/" variant="h6" color="inherit" style={{}}>
                            <div  style={{color: "red",}}> HOME</div>
                        </a>*/}
                    </Grid>

                    {/* menus de navigation pour affichage de type medium à large */}

                   <Grid container>
                    <Grid spacing={1} xs={12} sm={3} lg={2} fixed  >
                        <Hidden only={['sm', 'lg', 'md']}>
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
                            <div position="static" color="default" style={{backgroundColor:"none", marginTop:"2em", padding:"1em"}}>
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
                                {image.texte01}
                            </Grid>
                            <Grid xs={12} sm={8} style={{fontSize:"2em",paddingLeft:"1em"}}>
                                <Typography>
                                    {image.texte010}
                                </Typography>
                            </Grid>
                        </TabPanel>

                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container spacing={2} >

                                <Grid xs={12} sm={12} style={{fontSize:"2em",}}>
                                    <h1>{image.title02}</h1>
                                    {image.title02}
                                </Grid>
                                <Grid xs={12} sm={8}>
                                    <Typography>
                                        {image.texte02}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Container>
                                <Grid item xs={12} sm={12} container direction="row" >
                                    <Grid xs={12} sm={3} style={{padding:"1em", height:"15em", margin:"1em",backgroundImage: `url(${image.sample01})`, backgroundSize: "cover"}}>
                                        <h3> </h3>
                                        <p></p>

                                    </Grid>
                                    <Grid xs={12} sm={3} style={{padding:"1em", height:"15em", margin:"1em",backgroundImage: `url(${image.sample02})`, backgroundSize: "cover"}}>
                                        <h3> </h3>
                                        <p></p>
                                    </Grid>

                                    <Grid xs={12} sm={4} style={{padding:"1em", height:"15em", margin:"1em",backgroundImage: `url(${image.sample03})`, backgroundSize: "cover"}}>
                                        <h3> </h3>
                                        <p></p>
                                    </Grid>

                                    <Grid xs={12} sm={2} style={{padding:"1em", height:"15em", margin:"1em",backgroundImage: `url(${image.sample04})`, backgroundSize: "cover"}}>
                                        <h3> </h3>
                                    </Grid>

                                    <Grid xs={12} sm={3} style={{padding:"1em", height:"15em", margin:"1em", backgroundImage: `url(${image.sample05})`, backgroundSize: "cover"}}>
                                        <h3> </h3>
                                        <p></p>
                                    </Grid>
                                </Grid>
                            </Container>
                        </TabPanel>
                    </SwipeableViews>
                    </Grid>
            </Grid>
                </div>
            </Grid>
</Grid>
    );}

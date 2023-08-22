import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../src/App.css'

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
const LISTE =  [
    { id: 1,titre: "DESIGN",background:"#F27127",
        content: [" Je conçois avec passion des logos percutants, des cartes de visite élégantes et des concepts graphiques innovants pour le web. Mon expertise s'étend au design de packaging impactant, aux templates web fonctionnels et aux plaquettes publicitaires captivantes. Mon objectif : donner vie à votre vision avec créativité et professionnalisme.", " cartes de visite •",] },
    { id: 2,titre: "DEV",background:"#F2A922",
        content: ["En tant que concepteur et développeur d'applications, je crée des sites vitrines et e-commerce qui captent l'attention. Ma maîtrise d'HTML, CSS, JavaScript, CMS tels que WordPress et WooCommerce, ainsi que des frameworks comme React, ReactNative, Angular, Laravel et Symphony, garantit des expériences interactives et performantes. Mes compétences incluent également SQL, PHP, NodeJS et Ajax pour des fonctionnalités fluides. Avec un regard vers l'avenir, je me prépare à intégrer Java J2EE et C pour des solutions encore plus puissantes.",] },
];

function Carddyn() {
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    });
    return LISTE.map(i => <div key={i.id} className="script-bf-box " style={{ transform: radians.interpolate(interp(i.id)), width: "100%" }}>


            <div key={i.id}  style={{margin:"1em", justifyContent: "center"}} >
                <h1 >{i.titre}</h1>
                <p>{i.content}</p>
            </div>

    </div>)
}

export default Carddyn

import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../src/App.css'

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
const LISTE =  [
    { id: 1,titre: "DESIGN",background:"#F27127",
        content: [" Création  logo •", " cartes de visite •", " Concept graphique et web design •" ," Packaging •", " Templates Web •", " Plaquettes publicitaires, Newsletters " ] },
    { id: 2,titre: "DEV",background:"#F2A922",
        content: ["Site vitrine •", " e-commerce •", " HTML, CSS, JavaScript •", " CMS Wordpress, wooCommerce •", " React, ReactNative, AngularJS, Laravel, Symphony •", " SQL, PHP, NodeJS, Ajax " ] },
    { id: 3,titre: "SOFT SKILL'S",background:"#F27127",
        content: [ " Créatif •", " Curiosité intellectuelle •", " Capacité à résoudre les problèmes •", " Sens du travail en équipe •", " Esprit critique •", " Bon communicant " ] },
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
    return LISTE.map(i => <animated.div key={i.id} className="script-bf-box col-3" style={{ transform: radians.interpolate(interp(i.id)) }}>


            <div key={i.id}  style={{margin:"1em", justifyContent: "center"}} >
                <h1>{i.titre}</h1>
                <p>{i.content}</p>
            </div>

    </animated.div>)
}

export default Carddyn

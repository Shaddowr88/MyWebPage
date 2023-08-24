import React from 'react'
import { useSpring, animated } from 'react-spring'
import ILLUS2 from "./static/images/illustration02.png";

const calc = (x, y) => [x - window.innerWidth / 6, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 40}px,${y / 8 - 20}px,0)`;

function BannerIll02() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.img  src={ILLUS2} alt="" style={{position:"absolute", filter: "blur(6px)",
                height: "32em",left: "1.2em",top:"2em", marginTop:"3em",transform: props.xy.interpolate(trans1)}}/>
            <animated.img  src={ILLUS2} alt="" style={{position:"absolute", opacity:0.33,
                height: "30em",left: "1.1em",top:"5em", marginTop:"3em",transform: props.xy.interpolate(trans2)}}/>
        </div>
    )
}
export default BannerIll02


import React from 'react'
import { useSpring, animated } from 'react-spring'
import INTRO from "../../static/images/Banner.png";

const calc = (x, y) => [x - window.innerWidth / 6, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 60}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 55}px,${y / 8 - 25}px,0)`;

function BannerIll() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.img className="img" src={INTRO} alt="" style={{position:"absolute", filter: "blur(6px)",
                height: "35em",left: "34em",top:"10em", marginTop:"6em",transform: props.xy.interpolate(trans1)}}/>
            <animated.img className="img" src={INTRO} alt="" style={{position:"absolute",
                height: "35em",left: "30em",top:"10em", marginTop:"6em",transform: props.xy.interpolate(trans2)}}/>
        </div>
    )
}
export default BannerIll

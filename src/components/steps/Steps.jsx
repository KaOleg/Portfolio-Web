import React, { useEffect, useRef } from "react";
import packMan from "../../images/packman.svg";
import "./Steps.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
function Step(props) {
    const ref = useRef(null)
    useEffect(()=>{
        gsap.fromTo(ref.current, {opacity:0, y:100}, {
            opacity:1, y:0, duration:1,scrollTrigger:{trigger:ref.current, start:"top 80%", scrub: 1,}
        })
    }, [])
    return (
        <div ref={ref} className="step">
            <div className="step__left">
                <p>{props.number}</p>
                <div className="step__line"></div>
            </div>
            <div className="step__right">
                <img src={packMan} alt="PackMan" />
                <h3>
                    Step {props.number}: {props.title}
                </h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function Steps(props) {

    return (
        <div>
            <Step description="This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions." title="Product design Research" number="1" />
            <Step description="This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions." title="UI design in figma" number="2" />
            <Step description="This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions." title="Code develope with React" number="3" />
        </div>
    );
}

export default Steps;

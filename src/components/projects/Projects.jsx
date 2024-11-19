import React from 'react'
import { useState } from 'react'
import "./Projects.css"
import { useEffect ,useRef} from 'react'
import gsap from 'gsap'
import coffeShopImage from "../../images/coffeeshopoleg.netlify.app_ (1).png"
function ProjectCard (props){
    const [imageIsLoading,setImageIsLoading] = useState(true)
    const ref = useRef(null)
    useEffect(()=>{
        gsap.fromTo(ref.current, {opacity:0, y:100}, {
            opacity:1, y:0, duration:1,scrollTrigger:{trigger:ref.current, start:"top 80%", scrub: 1,}
        })
    }, [])
    return (
        <div ref={ref} className='project'>
            <div className='project__left'>
                <a href={props.link}><img onLoad={()=>setImageIsLoading(false)} className='project__image' src={props.image} alt={props.name} /></a>
                {imageIsLoading ? <div className='project__skeleton'></div> : null}
            </div>
            <div className='project__right'>
                <p className='project__number'><span>{props.number}</span></p>
                <h3 className='project__name'>{props.name}</h3>
            </div>
        </div>
    )
}
function Projects(props) {
  return (
    <div>
        <ProjectCard link="https://coffeeshopoleg.netlify.app/" number="1" name="Coffee Shop" image={coffeShopImage}/>
        <ProjectCard link="https://coffeeshopoleg.netlify.app/" number="2" name="Coffee Shop" image={coffeShopImage}/>
        <ProjectCard link="https://coffeeshopoleg.netlify.app/" number="3" name="Coffee Shop" image={coffeShopImage}/>

    </div>
  )
}

export default Projects
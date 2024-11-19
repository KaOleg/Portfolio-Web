import React from "react";
import quote from "../../images/quote.svg";
import "./Certificates.css";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import picture from "../../images/coffeeshopoleg.netlify.app_ (1).png";
function Certificate(props) {
    return (
        <div className="certificate" onClick={()=>props.onClick(props.image)}>
            <div className="certificate__content">
                <div className="certificate__header">
                    <div className="certificate__wrap">

                        <img src={props.image} alt={props.name} />
                        <div className="certificate__info">
                            <h3>{props.name}</h3>
                            <p>{props.company}</p>
                        </div>
                    </div>

                    <img src={quote} alt="Quote" />
                </div>
                <div className="certificate__description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

function Certificates() {
  const [openedCertificate, setOpenedCertificate] = useState("")
    return (
        <div className="certificates">
            <Certificate
                image={picture}
                description='За прохождение начального уровня курса "Frontend"'
                company="Hello World School"
                name="Frontend-Начальный уровень"
                onClick={setOpenedCertificate}
            />
            <Certificate
                image={picture}
                description='За прохождение начального уровня курса "Frontend"'
                company="Hello World School"
                name="Frontend-Начальный уровень"
                onClick={setOpenedCertificate}
            />
            <Certificate
                image={picture}
                description='За прохождение начального уровня курса "Frontend"'
                company="Hello World School"
                name="Frontend-Начальный уровень"
                onClick={setOpenedCertificate}
            />
            <Certificate
                image={picture}
                description='За прохождение начального уровня курса "Frontend"'
                company="Hello World School"
                name="Frontend-Начальный уровень"
                onClick={setOpenedCertificate}
            />
           {openedCertificate != "" ?  <div className="certificate__opened">
            <img src={openedCertificate} alt="" />
           <button onClick={()=>setOpenedCertificate("")} className="certificate__close"><RxCross1/></button>
           </div> : null}
           
        </div>
    );
}

export default Certificates;

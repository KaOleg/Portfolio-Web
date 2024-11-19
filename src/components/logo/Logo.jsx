import "./Logo.css"
import logoImg from "./logo.svg"
function Logo(props){
    return <div className="logo">
        <img src={logoImg} alt="Logo" />
        <span>Oleg</span>
    </div>
    
}
export default Logo
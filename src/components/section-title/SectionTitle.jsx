import star from "../../images/sectionTitleStar.svg"
import "./SectionTitle.css"
function SectionTitle (props) {
return <h2 className="section__title">
    {props.text}
    <img src={star} alt="star" />
</h2>
}
export default SectionTitle 
import "./Button.css";
function Button(props) {
    return (
        <button className="gradient-button">
            <span className="gradient-button-stroke"></span>
            <span className="gradient-button-content">{props.children}</span>
        </button>
    );
}
export default Button;

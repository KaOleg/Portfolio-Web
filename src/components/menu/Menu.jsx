import "./Menu.css";
function Menu(props) {
    return (
        <div className="menu">
            <div className="menu__stroke"></div>
            <ul className="menu__content">
                {props.children}
            </ul>
        </div>
    );
}
export function MenuItem(props) {
return (
    <li>
        {typeof(props.content)=="string"? props.content : <span>{props.content}</span>}
    </li>
)
}
export default Menu;

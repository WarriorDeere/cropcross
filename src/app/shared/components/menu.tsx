import "../style/globals.css";
import "../style/menu.css";

import { MdMenu } from "react-icons/md";

export default function Menu() {
    return (
        <nav className="menu">
            <button className="menu-main-btn"><MdMenu /></button>
        </nav>
    )
}

import { BsArrowRightCircle } from "react-icons/bs";
import "../style/globals.css";
import "../style/home.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="slogan-container">
                <h2 className="slogan-title">CropCross</h2>
                <p>- Deine Züchtung zum Erfolg -</p>
            </div>
            <div className="ui-container">
                <Link
                    href="/app"
                    className="home-action-btn"
                >
                    Los Geht's
                    <BsArrowRightCircle />
                </Link>
            </div>
        </>
    )
}

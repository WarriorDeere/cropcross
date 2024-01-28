import "../shared/style/globals.css";
import "../shared/style/app.css";
import { MdOutlineAdd, MdOutlineFileDownload, MdSettings } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

export default function App() {
    return (
        <>
            <Toolbox />
            <Content />
        </>
    )
}

function Content() {
    return (
        <>
            <section className="tier-parent">
                <div className="plant-item">
                    <div className="plant-head">
                        <div className="plant-avatar">
                            <PiPlantFill />
                        </div>
                        <div className="plant-desc">
                            <p>Pflanze 1</p>
                        </div>
                    </div>
                    <div className="plant-details">
                        <ul>
                            <li>Merkmal 1</li>
                            <li>Merkmal 2</li>
                            <li>Merkmal 3</li>
                        </ul>
                    </div>
                </div>
                <div className="plant-item">
                    <div className="plant-head">
                        <div className="plant-avatar">
                            <PiPlantFill />
                        </div>
                        <div className="plant-desc">
                            <p>Pflanze 2</p>
                        </div>
                    </div>
                    <div className="plant-details">
                        <ul>
                            <li>Merkmal 1</li>
                            <li>Merkmal 2</li>
                            <li>Merkmal 3</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="tier-child"></section>
        </>
    )
}

function Toolbox() {
    return (
        <nav className="toolbox">
            <div className="toolbox-item">
                <button><MdOutlineAdd /></button>
            </div>
            <div className="toolbox-item">
                <button><MdOutlineFileDownload /></button>
            </div>
            <div className="toolbox-item">
                <button><MdSettings /></button>
            </div>
        </nav>
    )
}
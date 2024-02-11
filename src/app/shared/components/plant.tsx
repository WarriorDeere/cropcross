'use client'

import { useRouter } from "next/navigation";
import "../style/globals.css";
import "../style/plant.css";
import { useEffect, useRef, useState } from "react";
import { PiPlantFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { SmallTraitCard, TraitCard } from "./trait";

export default function Plantmenu({ item_id }: { item_id: string }) {

    const router = useRouter();
    const dialog = useRef<HTMLDialogElement>(null);
    const [isDropdownVisible, setDropownVisibility] = useState<boolean>(false);

    useEffect(() => {
        dialog.current?.showModal();
        dialog.current?.addEventListener('close', (e) => {
            e.preventDefault();
            dialog.current?.close();
            router.replace('/app');
        });
    }, [])

    function toggleDropdown() {
        switch (isDropdownVisible) {
            case false:
                return setDropownVisibility(true);
            default:
                return setDropownVisibility(false);
        }
    }

    return (
        <dialog className="plant-edit-menu" ref={dialog}>
            <menu className="pem-ui">
                <div className="pem-item">
                    <button className="close-pem"
                        onClick={() => {
                            dialog.current?.close();
                        }}
                    >
                        ESC
                    </button>
                </div>
            </menu>
            <div className="plant-opt-header">
                <div className="plant-icon">
                    <PiPlantFill />
                </div>
                <h4 className="plant-name">{item_id}</h4>
                <div className="plant-type">
                    <button className="plant-type-drp"
                    // onClick={toggleDropdown}
                    >
                        <PlantTypeTag plant_type={"Weizen"} />
                    </button>
                    {
                        isDropdownVisible && (
                            <div className="plant-type-content">
                                <div className="plant-type">Weizen</div>
                                <div className="plant-type">Gerste</div>
                                <div className="plant-type">Raps</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="plant-opt-menu">
                <div className="trait-opt-container">
                    <SmallTraitCard type={"PLANT_TRAIT_YIELD"} score={5} />
                    <SmallTraitCard type={"PLANT_TRAIT_RESISTANCE"} score={4} />
                    <SmallTraitCard type={"PLANT_TRAIT_QUALITY"} score={9} />
                    <SmallTraitCard type={"PLANT_TRAIT_GROWTH"} score={10} />
                    <SmallTraitCard type={"PLANT_TRAIT_TOLERANCE"} score={7} />
                </div>
            </div>
        </dialog>
    )
}

function PlantTypeTag({ plant_type }: { plant_type: string }) {
    return (
        <span className="ptt">{plant_type}</span>
    )
}
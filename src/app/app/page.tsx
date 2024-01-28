'use client'

import "../shared/style/globals.css";
import "../shared/style/app.css";
import { MdEdit, MdOutlineAdd, MdOutlineFileDownload, MdSettings } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import { PlantTierTypes } from "../shared/types/types";
import { TraitCard } from "../shared/components/trait";

export default function App() {
    return (
        <>
            <Toolbox />
            <Content />
        </>
    )
}

function Content() {

    const [plantDetail, setPlantDetail] = useState<string | React.JSX.Element>(
        <>
            <TraitCard score={0} type="PLANT_TRAIT_DEFAULT" />
        </>
    );

    function handlePlantInteraction(plant_id: PlantTierTypes) {
        switch (plant_id) {
            case "PLANT_TIER_PARENT_1":
                return setPlantDetail(
                    <>
                        <TraitCard score={5} type="PLANT_TRAIT_GROWTH" />
                        <TraitCard score={1} type="PLANT_TRAIT_QUALITY" />
                        <TraitCard score={10} type="PLANT_TRAIT_RESISTANCE" />
                        <TraitCard score={6} type="PLANT_TRAIT_TOLERANCE" />
                        <TraitCard score={7} type="PLANT_TRAIT_YIELD" />
                    </>
                );
            case "PLANT_TIER_PARENT_2":
                return setPlantDetail(
                    <>
                        <TraitCard score={1} type="PLANT_TRAIT_GROWTH" />
                        <TraitCard score={4} type="PLANT_TRAIT_QUALITY" />
                        <TraitCard score={3} type="PLANT_TRAIT_RESISTANCE" />
                        <TraitCard score={10} type="PLANT_TRAIT_TOLERANCE" />
                        <TraitCard score={4} type="PLANT_TRAIT_YIELD" />
                    </>
                );
            default:
                return setPlantDetail(`[Error]: unexpected value of plant_id: ${plant_id}`);
        }
    }

    return (
        <>
            <section className="tier-parent">
                <PlantItem plant_id={"PLANT_TIER_PARENT_1"} />
                <div className="plant-details">
                    {plantDetail}
                </div>
                <PlantItem plant_id={"PLANT_TIER_PARENT_2"} />
            </section>
            <section className="tier-child"></section>
        </>
    )

    function PlantItem({ plant_id }: { plant_id: PlantTierTypes }) {
        return (
            <div className="plant-item"
                onMouseEnter={() => {
                    handlePlantInteraction(plant_id);
                }}
                onClick={() => {
                    handlePlantInteraction(plant_id);
                }}
            >
                <div className="plant-head">
                    <div className="plant-avatar">
                        <PiPlantFill />
                    </div>
                    <div className="plant-desc">
                        <p>Pflanze</p>
                    </div>
                </div>
                <div className="plant-item-ui">
                    <button className="pi-btn">
                        <MdEdit />
                    </button>
                </div>
            </div>
        )
    }
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
'use client'

import "../style/globals.css";
import "../style/app.css";

import { MdEdit, MdOutlineAdd, MdOutlineFileDownload, MdSettings } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import React, { useState } from "react";
import { PlantTierTypes } from "../types/types";
import { TraitCard } from "../components/trait";
import { useRouter } from "next/navigation";

export function Content() {

    const router = useRouter();

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
                <div className="parent-container">
                    <PlantItem plant_id={"PLANT_TIER_PARENT_1"} />
                    <PlantItem plant_id={"PLANT_TIER_PARENT_2"} />
                </div>
                <div className="plant-details">
                    {plantDetail}
                </div>
            </section>
            <section className="tier-child"></section>
        </>
    )

    function PlantItem({ plant_id }: { plant_id: PlantTierTypes }) {

        return (
            <div className="plant-item"
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
                    <button className="pi-btn"
                        onClick={() => {
                            router.replace(`/app/edit/${plant_id}`);
                        }}
                    >
                        <MdEdit />
                    </button>
                </div>
            </div>
        )
    }
}

export function Toolbox() {
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
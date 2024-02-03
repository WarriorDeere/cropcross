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
                        <TraitCard score={4} type="PLANT_TRAIT_SUMMARY" />
                    </>
                );
            case "PLANT_TIER_PARENT_2":
                return setPlantDetail(
                    <>
                        <TraitCard score={8} type="PLANT_TRAIT_SUMMARY" />
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
                    {plantDetail}
                    <PlantItem plant_id={"PLANT_TIER_PARENT_2"} />
                </div>
            </section>
            <section className="tier-child">
                child-score: 
            </section>
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
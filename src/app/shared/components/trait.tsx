'use client'

import "../style/globals.css";
import "../style/trait.css";
import { useState, useEffect } from "react"
import { TraitCardTypes } from "../types/types"

export function TraitCard({ type, score }: { type: TraitCardTypes, score: number }) {
    switch (type) {
        case "PLANT_TRAIT_DEFAULT":
            return (
                <div className="plant-trait-card ptc-default">
                    <div className="trait-name">
                        <h4>Pflanzenmerkmal</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Verschiedene Pflanzenmerkmale, welche u.a. Ertrag, Krankheitsresitenz und Nährstoffgehalte beeinflussen.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_YIELD":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Ertrag</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Der Ertrag pro Pflanze bzw. Hektar.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_RESISTANCE":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Resistenz</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Widerstandsfähigkeit gegen Krankheiten und Schädlinge.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_QUALITY":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Qualität</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Bestimmt Geschmack, Textur, Farbe und Nährstoffgehalt der Kulturpflanze.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_GROWTH":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Wachstum</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Beeinflusst das Wachstum abhängig vom Standort.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_TOLERANCE":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Toleranz</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Wiederstandsfähigkeit der Pflanze gegenüber negativer abiotischer Faktoren.</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )

        case "PLANT_TRAIT_SUMMARY":
            return (
                <div className="plant-trait-card">
                    <div className="trait-name">
                        <h4>Gesamtscore</h4>
                    </div>
                    <div className="trait-desc">
                        <p>Gesamtscore der Pflanze. Von 0 (Schlecht) bis 10 (Beste).</p>
                    </div>
                    <TraitScore score={score} />
                </div>
            )
    }
}

export function TraitScore({ score }: { score: number }) {
    const [crcfm, setCrcfm] = useState<number>(0);

    useEffect(() => {
        const r = document.querySelector('.score-ring') as SVGElement;
        const nc = 2 * Math.PI * parseFloat(r.getAttribute('r')!)
        setCrcfm(nc);
    }, []);

    const p = (score / 10) * 100;
    const ap = Math.max(0, Math.min(100, p));
    const pr = (crcfm * ap) / 100;
    const dof = crcfm - pr;
    return (
        <svg className="trait-score" height="100%" width="100%">
            <circle
                className="score-inner-ring"
                cy="50%"
                cx="50%"
                r="45%"
            ></circle>
            <circle className="score-ring" cy="50%" cx="50%" r="45%"
                style={{
                    strokeDasharray: `${crcfm}px`,
                    strokeDashoffset: `${-dof}%`,
                }}
            ></circle>
            <text className="score-number" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{score}</text>
        </svg>
    )
}
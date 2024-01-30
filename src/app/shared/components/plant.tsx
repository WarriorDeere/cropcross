'use client'

import { useRouter } from "next/navigation";
import "../style/globals.css";
import "../style/plant.css";
import { MdEdit } from "react-icons/md";

export default function Plantmenu({ item_id }: { item_id: string }) {

    const router = useRouter();

    return (
        <dialog className="plant-edit-menu" open>
            <div className="plant-opt-header">
                <h3>{item_id}</h3>
                <button className="edit-btn"
                    onClick={() => {
                        router.replace(`/app`);
                    }}
                >
                    <MdEdit />
                </button>
            </div>
            <div className="plant-opt-menu"></div>
        </dialog>
    )
}
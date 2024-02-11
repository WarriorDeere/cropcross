import { PlantObject, TraitTypes } from "../types/types";

export class plantInstance {

    plant_name: string;
    plant_children: string[];
    plant_parents: string[];
    plant_siblings: string[];

    constructor(plant: PlantObject) {
        this.plant_name = plant.plant_roots.name
        this.plant_children = plant.plant_roots.children
        this.plant_parents = plant.plant_roots.parents
        this.plant_siblings = plant.plant_roots.siblings
    }
}
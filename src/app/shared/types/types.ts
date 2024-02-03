export type PlantTierTypes =
    "PLANT_TIER_PARENT_1" |
    "PLANT_TIER_PARENT_2" |
    "PLANT_TIER_CHILD_1" |
    "PLANT_TIER_CHILD_2" |
    "PLANT_TIER_CHILD_3" |
    "PLANT_TIER_CHILD_4"

export type TraitCardTypes =
    "PLANT_TRAIT_DEFAULT" |
    "PLANT_TRAIT_YIELD" |
    "PLANT_TRAIT_RESISTANCE" |
    "PLANT_TRAIT_QUALITY" |
    "PLANT_TRAIT_GROWTH" |
    "PLANT_TRAIT_TOLERANCE" | 
    "PLANT_TRAIT_SUMMARY"

export interface PlantObject {
    "plant_trait": {
        "PLANT_TRAIT_YIELD": number
        "PLANT_TRAIT_RESISTANCE": number
        "PLANT_TRAIT_QUALITY": number
        "PLANT_TRAIT_GROWTH": number
        "PLANT_TRAIT_TOLERANCE": number
    }
    "plant_roots": {
        "name": string
        "parents": string[]
        "children": string[]
        "siblings": string[]
    }
}
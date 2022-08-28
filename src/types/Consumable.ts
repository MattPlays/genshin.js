import { request } from "../utils"

export type craftingRecipe = {
    item: string, 
    quantity: number
}

export interface Food {
    name: string,
    rarity: number,
    type: string,
    effect: string,
    hasRecipe: boolean,
    description: string,
    proficiency: number,
    recipe: craftingRecipe[],
}


export interface Potion {
    name: string,
    effect: string,
    rarity: number,
    crafting: craftingRecipe[]
}

export async function getAllFood(): Promise<Map<string, Food>> {
    return request({
        method: "GET",
        url: "consumables/food"
    }).then(res => res.json() as Promise<Map<string, Food>>)
}

export async function getAllPotions(): Promise<Map<string, Potion>> {
    return request({
        method: "GET",
        url: "consumables/potions"
    }).then(res => res.json() as Promise<Map<string, Potion>>)
}

export async function getFoodByName(name: string): Promise<Food> {
    return (await getAllFood()).get(name) as Food;
}

export async function getPotionByName(name: string): Promise<Potion> {
    return (await getAllPotions()).get(name) as Potion;
}
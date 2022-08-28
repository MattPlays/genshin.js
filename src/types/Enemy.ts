import { request } from "../utils"

export type enemyDrop = {
    name: string, 
    rarity: number, 
    "minimum-level": number
}

export type enemyElementalDescription = {
    element: string, 
    description: string
}

export interface Enemy {
    id: string,
    name: string,
    region: string,
    description: string,
    type: string,
    family: string,
    elements: string[],
    drops: enemyDrop[],
    "elemental-descriptions": enemyElementalDescription[]
}

export async function getAllEnemies(): Promise<Enemy[]> {
    return request({
        method: "GET",
        url: "enemies"
    }).then(res => res.json() as Promise<Enemy[]>)
}

export async function getAllEnemieIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "enemies"
    }).then(res => res.json() as Promise<string[]>)
}

export async function getEnemyByName(name: string): Promise<Enemy> {
    return request({
        method: "GET",
        url: `enemies/${name}`
    }).then(res => res.json() as Promise<Enemy>)
}
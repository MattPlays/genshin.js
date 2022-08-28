import { request } from "../utils"

export interface Weapon {
    name: string,
    type: string,
    rarity: number,
    baseAttack: number,
    subStat: string,
    passiveName: string,
    passiveDesc: string,
    location: string
}

export async function getAllWeaponsIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "weapons"
    }).then(res => res.json() as Promise<string[]>)
}

export async function getAllWeapons(): Promise<Weapon[]> {
    return request({
        method: "GET",
        url: "weapons/all"
    }).then(res => res.json() as Promise<Weapon[]>)
}

export async function getWeaponByName(name: string): Promise<Weapon> {
    return request({
        method: "GET",
        url: `weapons/${name}`
    }).then(res => res.json() as Promise<Weapon>)
}
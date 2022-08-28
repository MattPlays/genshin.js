import { request } from "../utils";

export type skillTalentUpgrade = {
    name: string, 
    value: string
}

export type skillTalent = {
    name: string, 
    unlock: string, 
    description: string, 
    upgrades: skillTalentUpgrade[], 
    type: string
}

export type passiveTalent = {
    name: string, 
    unlock: string, 
    description: string, 
    level: number
}

export type constellation = {
    name: string, 
    unlock: string, 
    description: string, 
    level: number
}

export interface Character {
    name: string,
    vision: string,
    weapon: string,
    nation: string,
    affiliation: string,
    rarity: number,
    constellation: string,
    birthday: string,
    description: string,
    skillTalents: skillTalent[],
    passiveTalents: passiveTalent[],
    constellations: constellation[],
    vision_key: string,
    weapon_type: string
}

export async function getAllCharacters(): Promise<Character[]> {
    return request({
        method: "GET",
        url: "characters/all"
    }).then(res => res.json() as Promise<Character[]>)
};

export async function getAllCharacterIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "characters"
    }).then(res => res.json() as Promise<string[]>)
};

export async function getCharacterByName(name: string): Promise<Character> {
    return request({
        method: "GET",
        url: `characters/${name}`
    }).then(res => res.json() as Promise<Character>)
};

import { request } from "../utils"

export type domainRequirement = {
    level: number, 
    adventureRank: number, 
    recommendedLevel: number, 
    leyLineDisorder: string[]
}

export type domainDrop = {
    name: string, 
    drop_min: number, 
    drop_max: number
}

export type domainDetail = {
    level: number, 
    adventureExperience: number, 
    companionshipExperience: number, 
    mora: number, 
    drops?: domainDrop[],
    items?: domainDrop[]
}

export type domainReward = {
    day: string, 
    details: domainDetail[]
}

export interface Domain {
    name: string,
    type: string,
    description: string,
    location: string,
    nation: string,
    requirements: domainRequirement[],
    recommendedElements: string[],
    rewards: domainReward[]
}

export async function getAllDomains(): Promise<Domain[]> {
    return request({
        method: "GET",
        url: "domains/all"
    }).then(res => res.json() as Promise<Domain[]>);
}

export async function getAllDomainIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "domains"
    }).then(res => res.json() as Promise<string[]>);
}

export async function getDomainByName(name: string): Promise<Domain> {
    return request({
        method: "GET",
        url: `domains/${name}`
    }).then(res => res.json() as Promise<Domain>)
}
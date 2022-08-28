import {request} from "../utils";

export interface Artifact {
    name: string,
    max_rarity: number,
    "2-piece_bonus": string,
    "4-piece_bonus": string
}

export async function getAllArtifacts(): Promise<Artifact[]> {
    return request({
        method: "GET",
        url: "artifacts/all"
    }).then(res => res.json() as Promise<Artifact[]>)
}

export async function getAllArtifactIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "artifacts"
    }).then(res => res.json() as Promise<string[]>)
}

export async function getArtifactByName(name: string): Promise<Artifact> {
    return request({
        method: "GET",
        url: `artifacts/${name}`
    }).then(res => res.json() as Promise<Artifact>)
}
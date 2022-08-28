import { request } from "../utils"

export interface Nation {
    name: string,
    element: string,
    archon: string,
    controllingEntity: string
}

export async function getAllNations(): Promise<Nation[]> {
    return request({
        method: "GET",
        url: "nations"
    }).then(res => res.json() as Promise<Nation[]>)
};

export async function getAllNationIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "nations"
    }).then(res => res.json() as Promise<string[]>)
};

export async function getNationByName(name: string): Promise<Nation> {
    return request({
        method: "GET",
        url: `nations/${name}`
    }).then(res => res.json() as Promise<Nation>)
}
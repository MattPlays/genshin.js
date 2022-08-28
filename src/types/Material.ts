import { request } from "../utils";


export async function getAllMaterials(): Promise<Map<string, object>> {
    return request({
        method: "GET",
        url: "materials"
    }).then(res => res.json() as Promise<Map<string, object>>)
}

export async function getAllMaterialIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "materials"
    }).then(res => res.json() as Promise<string[]>)
}

export async function getMaterialByName(name: string): Promise<Map<string, object>> {
    return request({
        method: "GET",
        url: `materials/${name}`
    }).then(res => res.json() as Promise<Map<string, object>>)
}
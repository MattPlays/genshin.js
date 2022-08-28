import { request } from "../utils" 

export type reaction = {
    name: string, 
    elements: string[], 
    description: string
}

export interface Element {
    name: string,
    key: string,
    reactions: reaction[]
}

export async function getAllElements(): Promise<Element[]> {
    return request({
        method: "GET",
        url: "elements/all"
    }).then(res => res.json() as Promise<Element[]>)
}

export async function getAllElementIDs(): Promise<string[]> {
    return request({
        method: "GET",
        url: "elements"
    }).then(res => res.json() as Promise<string[]>)
}

export async function getElementByName(name: string): Promise<Element> {
    return request({
        method: "GET",
        url: `elements/${name}`
    }).then(res => res.json() as Promise<Element>)
}
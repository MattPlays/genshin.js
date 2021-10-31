import axios from "axios";
const instance = axios.create({
    method: "GET",
    baseURL: "https://api.genshin.dev",
    responseType: "json"
})
export interface Artifact {
    name: string,
    max_rarity: number,
    "2-piece_bonus": string,
    "4-piece_bonus": string
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
    skillTalents: {name: string, unlock: string, description: string, upgrades: {name: string, value: string}[], type: string}[],
    passiveTalents: {name: string, unlock: string, description: string, level: number}[],
    constellations: {name: string, unlock: string, description: string, level: number}[],
    vision_key: string,
    weapon_type: string
}

export interface Food {
    name: string,
    rarity: number,
    type: string,
    effect: string,
    hasRecipe: boolean,
    description: string,
    proficiency: number,
    recipe: {item: string, quantity: number}[],
}

export interface Potion {
    name: string,
    effect: string,
    rarity: number,
    crafting: {item: string, quantity: number}[]
}

export interface Domain {
    name: string,
    type: string,
    description: string,
    location: string,
    nation: string,
    requirements: {level: number, adventureRank: number, recommendedLevel: number, leyLineDisorder: string[]},
    recommendedElements: string[],
    rewards: {
        day: string, 
        details: {
            level: number, 
            adventureExperience: number, 
            companionshipExperience: number, 
            mora: number, 
            drops: {
                name: string, 
                drop_min: number, 
                drop_max: number
            }[]
        }[]
    }[]
}

export interface Element {
    name: string,
    key: string,
    reactions: {name: string, elements: string[], description: string}[]
}

export interface Enemy {
    id: string,
    name: string,
    region: string,
    description: string,
    type: string,
    family: string,
    elements: string[],
    drops: {name: string, rarity: number, "minimum-level": number}[],
    "elemental-descriptions": {element: string, description: string}[]
}

export interface Nation {
    name: string,
    element: string,
    archon: string,
    controllingEntity: string
}

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

const Artifacts = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/artifacts"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(name: string): Promise<Artifact> => {
        return instance({
            url: `/artifacts/${name}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)}); 
    }
}
const Characters = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/characters"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(character: string): Promise<Character> => {
        return instance({
            url: `/characters/${character}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Consumables = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/consumables"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(consumable: string): Promise<Map<string, Food | Potion>> => {
        return instance({
            url: `/consumables/${consumable}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Domains = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/domains"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(domain: string): Promise<Domain> => {
        return instance({
            url: `/domains/${domain}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Elements = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/elements"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(element: string): Promise<Element> => {
        return instance({
            url: `/elements/${element}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Enemies = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/enemies"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(enemy: string): Promise<Enemy> => {
        return instance({
            url: `/enemies/${enemy}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Materials = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/materials"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(material: string): Promise<Map<string, object>> => {
        return instance({
            url: `/materials/${material}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Nations = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/nations"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(nation: string): Promise<Nation> => {
        return instance({
            url: `/nations/${nation}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
const Weapons = {
    List: async(): Promise<string[]> => {
        return instance({
            url: "/weapons"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    getInfo: async(weapon: string): Promise<Weapon> => {
        return instance({
            url: `/weapons/${weapon}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}

export const Genshin = {
    Artifacts: {...Artifacts},
    Characters: {...Characters},
    Consumables: {...Consumables},
    Domains: {...Domains},
    Elements: {...Elements},
    Enemies: {...Enemies},
    Materials: {...Materials},
    Nations: {...Nations},
    Weapons: {...Weapons},
}


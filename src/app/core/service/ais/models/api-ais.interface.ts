export interface ApiAiI {
    _id: string;
    name : string;
    category: ApiAiCategory[];
    logo? : string;
    year : number;
    lenguage? : string;
    description : string;
    link : string;
    price : string;
    __v?: number;
    createdAt?: string;
    updateAt?:string;
}

export interface AiI {
    _id: string;
    name : string;
    category: ApiAiCategory[];
    logo? : string;
    year : number;
    lenguage? : string;
    description : string;
    link : string;
    price : string;
}

export interface AiRequestBody {
    name : string;
    category: ApiAiCategory[];
    logo? : string;
    year : number;
    lenguage? : string;
    description : string;
    link : string;
    price : string;
}

export type ApiAiCategory = 'chatBot'
| 'text to image'
| 'software tool';
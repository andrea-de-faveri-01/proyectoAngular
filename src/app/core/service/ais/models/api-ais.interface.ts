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
}

export type ApiAiCategory = 'chatBot'
| 'text to image'
| 'software tool';
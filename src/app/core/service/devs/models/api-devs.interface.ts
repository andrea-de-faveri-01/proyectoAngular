export interface ApiDevI {
_id: string;
name : string;
year : string;
logo : string;
link: string;
ais: { _id: string }[];
__v?: number;
}

export interface DevI {
_id: string;
name : string;
year : string;
logo : string;
link: string;
ais: { _id: string }[];
}

export interface DevRequestBody {
    _id: string;
name : string;
year : string;
logo : string;
link: string;
ais: { _id: string }[];
}

 
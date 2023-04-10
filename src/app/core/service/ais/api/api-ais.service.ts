import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AiRequestBody, ApiAiI } from '../models/api-ais.interface';

const API_URL = 'https://node-js-ai2-au8o.vercel.app'

@Injectable({
  providedIn: 'root'
})
export class ApiAisService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiAis(): Observable<ApiAiI[]>{
return this.http.get<ApiAiI[]>(`${API_URL}/ais`);
  }

public getApiAiById(_id: string): Observable<ApiAiI> {
  return this.http.get<ApiAiI>(`${API_URL}/ais/${_id}`)
}

public createApiAi(body: AiRequestBody): Observable<ApiAiI> {
  return this.http.post<ApiAiI>(`${API_URL}/ais`, body);
}

public editApiAi(body: AiRequestBody, id: string): Observable<ApiAiI> {
  return this.http.put<ApiAiI>(
    `${API_URL}/ais/${id}`,
    body
  );
}

public deleteApiAi(_id: string): Observable<ApiAiI> {
  return this.http.delete<ApiAiI>(`${API_URL}/ais/${_id}`);
}
}

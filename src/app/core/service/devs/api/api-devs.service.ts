import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDevI, DevRequestBody } from '../models/api-devs.interface';
import { ApiAiI } from '../../ais/models/api-ais.interface';

const API_URL = 'https://node-js-ai2-au8o.vercel.app';

@Injectable({
  providedIn: 'root',
})
export class ApiDevsService {
  constructor(private http: HttpClient) {}

  public getApiDevs(): Observable<ApiDevI[]> {
    return this.http.get<ApiDevI[]>(`${API_URL}/devs`);
  }

  public getApiDevById(_id: string): Observable<ApiDevI> {
    return this.http.get<ApiDevI>(`${API_URL}/devs/${_id}`);
  }

  public getApiAiById(_id: string): Observable<ApiAiI> {
    return this.http.get<ApiAiI>(`${API_URL}/ais/${_id}`);
  }

  public createApiDev(body: DevRequestBody): Observable<ApiDevI> {
    return this.http.post<ApiDevI>(`${API_URL}/devs`, body);
  }

  public editApiDev(body: DevRequestBody, id: string): Observable<ApiDevI> {
    return this.http.put<ApiDevI>(`${API_URL}/devs/${id}`, body);
  }

  public deleteApiDev(_id: string): Observable<ApiDevI> {
    return this.http.delete<ApiDevI>(`${API_URL}/devs/${_id}`);
  }
}

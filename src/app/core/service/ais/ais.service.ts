import { Observable, map, filter } from 'rxjs';
import { ApiAisService } from './api/api-ais.service';
import { Injectable } from '@angular/core';
import { AiI, AiRequestBody, ApiAiI } from './models/api-ais.interface';

@Injectable({
  providedIn: 'root',
})
export class AisService {
  constructor(private apiAisService: ApiAisService) {}

  public getAis(): Observable<AiI[]> {
    return this.apiAisService.getApiAis().pipe(
      map((apiAis: ApiAiI[]) => this.transformAis(apiAis)),
      filter((ais: AiI[]) => {
        return ais.length > 0;
      })
    );
  }

  public getAiById(_id: string): Observable<AiI> {
    return this.apiAisService.getApiAiById(_id).pipe(
      map((apiAi: ApiAiI) => {
        console.log('API response:', apiAi);
        const transformedAi = this.transformAi(apiAi);
        console.log('Transformed AI:', transformedAi);
        return transformedAi;
      })
    );
  }

  public createAi(body: AiRequestBody): Observable<AiI> {
    return this.apiAisService
      .createApiAi(body)
      .pipe(map((apiAi) => this.transformAi(apiAi)));
  }

  public editAi(body: AiRequestBody, _id: string): Observable<AiI> {
    return this.apiAisService
      .editApiAi(body, _id)
      .pipe(map((apiAi) => this.transformAi(apiAi)));
  }

  public deleteAi(_id: string): Observable<AiI> {
    return this.apiAisService
      .deleteApiAi(_id)
      .pipe(map((apiAi) => this.transformAi(apiAi)));
  }

  private transformAis(apiAis: ApiAiI[]): AiI[] {
    const aiTransformed = apiAis.map((ai) => this.transformAi(ai));

    return aiTransformed;
  }

  private transformAi(apiAi: ApiAiI): AiI {
    delete apiAi.__v, apiAi.createdAt, apiAi.updateAt;
    return apiAi;
  }
}

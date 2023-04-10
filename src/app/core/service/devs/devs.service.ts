import { Observable, filter, map } from 'rxjs';
import { ApiDevsService } from './api/api-devs.service';
import { Injectable } from '@angular/core';
import { DevI, ApiDevI, DevRequestBody} from './models/api-devs.interface'

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(
    private apiDevsService : ApiDevsService
  ) { }

  public getDevs(): Observable<DevI[]> {
    return this.apiDevsService.getApiDevs().pipe(
    map((apiDevs: ApiDevI[]) => this.transformDevs(apiDevs)),
    filter((devs: DevI[])=> {
      return devs.length > 0
    })
    );
  }

  

  public getDevById(_id: string): Observable<DevI> {
    return this.apiDevsService.getApiDevById(_id).pipe(
      map((apiDev: ApiDevI) => {
        const transformedDev = this.transformDev(apiDev);
        return transformedDev;
    })
);
}

  public createAi(body: DevRequestBody): Observable<DevI> {
  return this.apiDevsService.createApiDev(body).pipe(
  map((apiDev) => this.transformDev(apiDev))
  );
  }

  public editDev(body: DevRequestBody, _id: string): Observable<DevI> {
    return this.apiDevsService.editApiDev(body, _id).pipe(
      map((apiDev) => this.transformDev(apiDev))
    );
  }

  public deleteDev(_id: string): Observable<DevI> {
    return this.apiDevsService.deleteApiDev(_id).pipe(
      map((apiDev) => this.transformDev(apiDev))
    );
  }


  private transformDevs(apiDevs: ApiDevI[]): DevI[] {
    const devTransformed = apiDevs.map((dev) => this.transformDev(dev));
 
    return devTransformed;
  }

  private transformDev(apiDev: ApiDevI): DevI {
delete apiDev.__v
return apiDev;


  }
}


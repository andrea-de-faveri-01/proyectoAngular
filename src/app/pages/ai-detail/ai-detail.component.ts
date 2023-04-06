import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aisData } from 'src/app/core/service/ais/models/api-ais.data';
import { ApiAiI } from 'src/app/core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-ai-detail',
  templateUrl: './ai-detail.component.html',
  styleUrls: ['./ai-detail.component.scss']
})
export class AiDetailComponent {

  public aiToShow?: ApiAiI;

  constructor(
    private actvateRoute: ActivatedRoute
  ) {
    this.actvateRoute.params.subscribe((params) => {
this.aiToShow = aisData.find(ai => ai._id === params["_id"])
    });
  }
}

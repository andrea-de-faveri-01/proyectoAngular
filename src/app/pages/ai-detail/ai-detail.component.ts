import { AisService } from './../../core/service/ais/ais.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AiI } from 'src/app/core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-ai-detail',
  templateUrl: './ai-detail.component.html',
  styleUrls: ['./ai-detail.component.scss'],
})
export class AiDetailComponent {
  public aiToShow?: AiI;

  constructor(
    private actvateRoute: ActivatedRoute,
    private aisService: AisService
  ) {
    this.actvateRoute.params.subscribe((params) => {
      const aiId = params['_id'];
      this.aisService.getAiById(aiId).subscribe((aiToShow) => {
        this.aiToShow = aiToShow;
      });
    });
  }
}

import { AisService } from './../../core/service/ais/ais.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AiI } from 'src/app/core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.scss']
})
export class EditElementComponent {

  public ai?: AiI;

constructor(
  private activatedRoute: ActivatedRoute,
  private aisService: AisService
  ) {
  this.activatedRoute.params.subscribe((params) => {
     const aiId = params['_id'];
     this.aisService.getAiById(aiId).subscribe((ai) => {
      this.ai = ai;
     })
  })
}

}

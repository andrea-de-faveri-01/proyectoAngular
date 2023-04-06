import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAiI } from 'src/app/core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent {

constructor(
  private router: Router
){}

@Input() public aiToShow?: ApiAiI

public navigateToDetail(_id: string) {
this.router.navigate(['ai-detail',_id])
}

}

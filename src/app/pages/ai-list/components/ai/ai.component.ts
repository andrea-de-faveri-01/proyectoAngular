import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AiI } from 'src/app/core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss'],
})
export class AiComponent {
  constructor(private router: Router) {}

  @Input() public aiToShow?: AiI;
  @Output() public onRemoveAi = new EventEmitter<void>();

  public removeAi() {
    this.onRemoveAi.emit();
  }

  public navigateToDetail(_id: string) {
    this.router.navigate(['ai-detail', _id]);
  }

  public navigateToEditElement(_id: string) {
    this.router.navigate(['edit-element', _id]);
  }
}

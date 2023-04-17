import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { DevI } from 'src/app/core/service/devs/models/api-devs.interface';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent {
  constructor(private router: Router) {}

  @Input() public devToShow?: DevI;
  @Output() public onRemoveDev = new EventEmitter<void>();

  public removeDev() {
    this.onRemoveDev.emit();
  }

  public navigateToDetail(_id: string) {
    this.router.navigate(['dev-detail', _id]);
  }

  public navigateToAiDetail(_id: string) {
    this.router.navigate(['ai-detail', _id]);
  }

  public navigateToEditElement(_id: string) {
    this.router.navigate(['edit-element', _id]);
  }

  public navigateToComingSoon() {
    this.router.navigate(['coming-soon']);
  }
}

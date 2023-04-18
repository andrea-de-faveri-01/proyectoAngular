import { Component, OnInit } from '@angular/core';
import { AisService } from './../../core/service/ais/ais.service';
import { AiI } from './../../core/service/ais/models/api-ais.interface';

@Component({
  selector: 'app-ai-list',
  templateUrl: './ai-list.component.html',
  styleUrls: ['./ai-list.component.scss'],
})
export class AiListComponent implements OnInit {
  public ais?: AiI[];
  public originalAis?: AiI[];
  public inputValue: string = '';
  public currentPage: number = 1;
  public pageSize: number = 10;

  constructor(private aisService: AisService) {}

  public ngOnInit(): void {
    this.getAis();
  }

  public removeAi(_id: string) {
    this.aisService.deleteAi(_id).subscribe(() => this.getAis());
  }

  public filterAis() {
    this.ais = this.originalAis?.filter((ai) => {
      return ai.name.toLowerCase().includes(this.inputValue.toLowerCase());
    });
  }

  public getAis() {
    this.aisService.getAis().subscribe((ais: AiI[]) => {
      this.ais = ais;
      this.originalAis = ais;
    });
  }

  public previousPage() {
    this.currentPage--;
  }
  
  nextPage() {
    this.currentPage++;
  }
  
  public get totalPages(): number {
    if (!this.ais || !this.ais.length) {
      return 0;
    }
    return Math.ceil(this.ais.length / this.pageSize);
  }

}

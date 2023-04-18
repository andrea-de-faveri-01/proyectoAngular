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
    console.log("d");
    this.aisService.deleteAi(_id)
      .subscribe(() => this.getAis(), error => console.log(error));
    console.log("e");
  }

  public filterAis() {
    this.ais = this.originalAis?.filter((ai) => {
      return ai.name.toLowerCase().includes(this.inputValue.toLowerCase());
    });
  }

  public getAis() {
    console.log("f");
    this.aisService.getAis().subscribe((ais: AiI[]) => {
      console.log("g");
      
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

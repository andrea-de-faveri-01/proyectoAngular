import { Component } from '@angular/core';
import { aisData } from 'src/app/core/service/ais/models/api-ais.data';

@Component({
  selector: 'app-ai-list',
  templateUrl: './ai-list.component.html',
  styleUrls: ['./ai-list.component.scss']
})
export class AiListComponent {

public ais = aisData;
public originalAis = aisData
public inputValue: string = ""

public filterAis() {
  this.ais = this.originalAis.filter(ai => {
    return ai.name.toLowerCase().includes(this.inputValue.toLowerCase());
  });
}


}

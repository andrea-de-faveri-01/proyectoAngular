import { Component, OnInit } from '@angular/core';
import { DevsService } from 'src/app/core/service/devs/devs.service';
import { DevI } from 'src/app/core/service/devs/models/api-devs.interface';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss'],
})
export class DevListComponent implements OnInit {
  public devs?: DevI[];
  public originalDevs?: DevI[];
  public inputValue: string = '';
  public currentPage: number = 1;

  constructor(private devsService: DevsService) {}

  public ngOnInit(): void {
    this.getDevs();
  }

  public removeDev(_id: string) {
    this.devsService.deleteDev(_id).subscribe(() => this.getDevs());
  }

  public filterDevs() {
    this.devs = this.originalDevs?.filter((dev) => {
      return dev.name.toLowerCase().includes(this.inputValue.toLowerCase());
    });
  }

  public getDevs() {
    this.devsService.getDevs().subscribe((devs: DevI[]) => {
      this.devs = devs;
      this.originalDevs = devs;
    });
  }
}

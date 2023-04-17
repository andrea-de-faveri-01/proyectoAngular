import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevsService } from 'src/app/core/service/devs/devs.service';
import { DevI } from 'src/app/core/service/devs/models/api-devs.interface';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss'],
})
export class DevDetailComponent {
  public devToShow?: DevI;

  constructor(
    private actvateRoute: ActivatedRoute,
    private devsService: DevsService,
    private router:Router
  ) {
    this.actvateRoute.params.subscribe((params) => {
      const devId = params['_id'];
      this.devsService.getDevById(devId).subscribe((devToShow) => {
        this.devToShow = devToShow;
      });
    });
  }

  public navigateToAiDetail(_id: string) {
    this.router.navigate(['ai-detail',_id]);
    }

}

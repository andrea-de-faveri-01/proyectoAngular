import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDetailComponent } from './ai-detail.component';

describe('AiDetailComponent', () => {
  let component: AiDetailComponent;
  let fixture: ComponentFixture<AiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

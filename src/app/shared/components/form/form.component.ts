import { Router } from '@angular/router';
import { aiCategoriesOptions } from './config/form.config';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ApiAiI } from 'src/app/core/service/ais/models/api-ais.interface';
import { AisService } from 'src/app/core/service/ais/ais.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public ai?: ApiAiI;
  // @Input() public dev?: ApiDevI;
  @Input() public isEditMode: boolean = false;

  public aiForm?: FormGroup;
  public showErrors: boolean = false;
  public aiCategoriesOptions = aiCategoriesOptions;
  public hasSuccess: boolean = false;
  public imgSrc: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private aisService: AisService
    ) {}

  public ngOnInit(): void {
    this.initForm();
    this.aiForm?.get('logo')?.valueChanges.subscribe((value: string) => {
     this.imgSrc = value;
    });
  }

  public handleAi() {
    this.showErrors = true;
    if (this.aiForm?.valid) {
      if (this.isEditMode) {
        this.editAi();
      } else {
        this.createAi();
      }
    }
  }
  private createAi() {
 this.aisService.createAi(this.aiForm?.value).subscribe((ai) =>{
      this.aiForm?.reset();
      this.hasSuccess = true;
      setTimeout(() => {
        this.hasSuccess = false;
      }, 5000);
    })
   
  }

  private editAi() {
    if (!this.ai?._id) { return; }
    this.aisService.editAi(this.aiForm?.value, this.ai._id).subscribe((ai) =>{
      this.router.navigate(['../ai-list']);
    })
   
  }

  private initForm() {
    if (this.ai) {
      this.imgSrc = this.ai.logo || '';
    }
    this.aiForm = this.formBuilder.group({
      name: new FormControl(this.ai?.name || '', [Validators.required]),
      category: new FormControl(this.ai?.category || '', [Validators.required]),
      logo: new FormControl(this.ai?.logo || ''),
      year: new FormControl(this.ai?.year || '', [
        Validators.required,
        Validators.min(2000),
      ]),
      lenguage: new FormControl(this.ai?.lenguage || ''),
      description: new FormControl(this.ai?.description || '', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      link: new FormControl(this.ai?.link || '', [Validators.required]),
      price: new FormControl(this.ai?.price || '', [Validators.required]),
    });
  }
}

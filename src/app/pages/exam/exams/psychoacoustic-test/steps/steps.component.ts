import { Component } from '@angular/core';
import {
  LangService,
} from '../../../../../services/lang.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {

  userAgreementForm = this._formBuilder.group({
    age: [18, Validators.required],
    gender: [0, Validators.required],
    isConfirmed: ['', Validators.required]
  });

  selfReportForm = this._formBuilder.group({
    selfReport: ['', Validators.required]
  });

  misoquestNoSoundForm = this._formBuilder.group({
    misoquestNoSound: ['', Validators.required]
  });

  misoquestWithAudioForm = this._formBuilder.group({
    misoquestWithAudio: ['', Validators.required]
  });

  extraForm = this._formBuilder.group({
    extra: ['', Validators.required]
  });

  finalResultForm = this._formBuilder.group({
    finalResult: ['', Validators.required]
  });

  constructor(
    public langService: LangService,
    private _formBuilder: FormBuilder
  ) {}

  public navigateToNextStep(stepper: MatStepper) {
    requestAnimationFrame(() => {
      stepper.next();
    });
  }
}

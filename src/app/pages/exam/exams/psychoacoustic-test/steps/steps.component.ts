import { Component } from '@angular/core';
import {
  LangService,
} from '../../../../../services/lang.service';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AudioControllerComponent } from './audio-controller/audio-controller.component';

import {
  Sounds,
  SoundsToAssetPath
} from '../../../../../core/misoquest/core';

interface Sound {
  id: string;
  title: string;
  audioSrc: string;
  rating?: number;
}

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
    MatButtonModule,
    AudioControllerComponent
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  // public SoundsToAssetPath = SoundsToAssetPath;
  // public currentAudioPath = SoundsToAssetPath.ADDITIONAL[Sounds.ADDITIONAL.WHITE_NOISE];
  public currentAudioVolume = 1;

  private soundsOrderById: string[] | null = null;

  public ratingBySoundId: { [soundId: string]: number } = {};

  public currentSoundIndex = -1;

  userAgreementForm = this._formBuilder.group({
    age: [18, Validators.required],
    gender: [0, Validators.required],
    isConfirmed: ['', Validators.required]
  });

  misoquestWithAudioForm = this._formBuilder.group({
    isAllRated: ['', Validators.required],
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
  ) { }

  public navigateToNextStep(stepper: MatStepper) {
    requestAnimationFrame(() => {
      stepper.next();
    });
  }

  public onVolumeChangeHandler(volume: number): void {
    this.currentAudioVolume = volume;
  }

  private randomizeSoundsOrder(rateableSounds: Sound[]): void {
    this.soundsOrderById = rateableSounds.map(sound => sound.id);
    this.soundsOrderById = this.soundsOrderById.sort(() => Math.random() - 0.5);
  }

  private sortRateableSoundsBasedOnOrder(rateableSounds: Sound[]): Sound[] {
    if (!this.soundsOrderById) {
      return [];
    }
    return this.soundsOrderById.map(id => rateableSounds.find(sound => sound.id === id)) as Sound[];
  }

  private populateSoundsWithRating(rateableSounds: Sound[]): Sound[] {
    const rated = [];
    for (const sound of rateableSounds) {
      rated.push({
        ...sound,
        rating: this.ratingBySoundId[sound.id] || 50
      });
    }
    return rated;
  }

  private getRateableSounds(): Sound[] {
    const sounds = this.langService.currentLang.app.pages.exam.children.exams.psychoacoustic.steps.misoquest.content.sounds;
    const rateableSounds = sounds.rateableSounds;
    if (!this.soundsOrderById) {
      this.randomizeSoundsOrder(rateableSounds);
    }
    const sortedRateableSounds = this.sortRateableSoundsBasedOnOrder(rateableSounds);
    const populateSoundsWithRating = this.populateSoundsWithRating(sortedRateableSounds);

    return populateSoundsWithRating;
  }

  public getCurrentSound(): Sound {
    if (this.currentSoundIndex === -1) {
      const sounds = this.langService.currentLang.app.pages.exam.children.exams.psychoacoustic.steps.misoquest.content.sounds;
      return sounds.adjustmentSound;
    }
    const ratableSounds = this.getRateableSounds();

    return ratableSounds[this.currentSoundIndex];
  }

  public onNextAudioButton(stepper: MatStepper): void {
    if (!this.soundsOrderById) {
      // make sure it will be randomixed
      const sounds = this.langService.currentLang.app.pages.exam.children.exams.psychoacoustic.steps.misoquest.content.sounds;
      const rateableSounds = sounds.rateableSounds;
      if (!this.soundsOrderById) {
        this.randomizeSoundsOrder(rateableSounds);
      }
      this.currentSoundIndex += 1;
      return
    }
    this.currentSoundIndex += 1;
    if (this.currentSoundIndex === this.soundsOrderById?.length) {
      // end
      stepper.next();
      // make sure we can go back
      this.currentSoundIndex -= 1;
      this.misoquestWithAudioForm.controls.isAllRated.setValue('true');
    }
  }
}

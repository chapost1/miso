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
  calcByGroupCDS
} from '../../../../../core/misoquest/core';
import { MatSliderModule } from '@angular/material/slider';

interface Sound {
  id: string;
  title: string;
  audioSrc: string;
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
    AudioControllerComponent,
    MatSliderModule
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  public currentAudioVolume = 1;

  private soundsOrderById: string[] | null = null;

  public ratingBySoundId: { [soundId: string]: number } = {};

  public currentSoundIndex = -1;

  userAgreementForm = this._formBuilder.group({
    age: [18, Validators.required],
    gender: [0, Validators.required],
    isConfirmed: ['', [Validators.requiredTrue]],
  });

  misoquestWithAudioForm = this._formBuilder.group({
    isAllRated: ['', Validators.required],
  });

  extraForm = this._formBuilder.group({
    extra: ['', Validators.required]
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

  private getRateableSounds(): Sound[] {
    // in case lang has changed
    this.defineRandomizedSoundsOrder();
    //
    const sounds = this.langService.currentLang.app.pages.exam.children.exams.psychoacoustic.steps.misoquest.content.sounds;
    const sortedRateableSounds = this.sortRateableSoundsBasedOnOrder(sounds.rateableSounds);

    return sortedRateableSounds;
  }

  private defineRandomizedSoundsOrder(): void {
    if (this.soundsOrderById) {
      // already defined
      return;
    }
    const sounds = this.langService.currentLang.app.pages.exam.children.exams.psychoacoustic.steps.misoquest.content.sounds;
    this.randomizeSoundsOrder(sounds.rateableSounds);
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
      this.defineRandomizedSoundsOrder();
      this.currentSoundIndex += 1;
      return
    }
    const currentSoundId = this.soundsOrderById[this.currentSoundIndex];
    // make sure sound is rated
    this.setSoundRating(currentSoundId, this.getSoundRating(currentSoundId));

    this.currentSoundIndex += 1;
    if (this.currentSoundIndex === this.soundsOrderById?.length) {
      // done
      this.misoquestWithAudioForm.controls.isAllRated.setValue('true');

      requestAnimationFrame(() => {
        stepper.next();
        // make sure we can go back
        this.currentSoundIndex -= 1;
      });
    }
  }

  public setSoundRating(soundId: string, rating: number): void {
    this.ratingBySoundId[soundId] = rating;
  }

  public getSoundRating(soundId: string): number {
    if (!this.ratingBySoundId[soundId] && this.ratingBySoundId[soundId] !== 0) {
      return 50;
    }
    return this.ratingBySoundId[soundId];
  }

  public onSoundRatingChangeHandler(soundId: string, event: Event): void {
    const rating = Number((event.target as HTMLInputElement).value);
    this.setSoundRating(soundId, rating);
  }

  public getFinalResult(): any {
    const ratedSounds = [];
    for (const soundId in this.ratingBySoundId) {
      if (this.ratingBySoundId.hasOwnProperty(soundId)) {
        ratedSounds.push({
          name: soundId,
          rating: this.ratingBySoundId[soundId]
        });
      }
    }

    return calcByGroupCDS(ratedSounds);
  }
}

import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
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
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import {
  calcByGroupCDS,
  compareSoundsRatingsToControlGroupByGroup
} from '../../../../../core/misoquest/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

interface Sound {
  id: string;
  title: string;
  audioSrc: string;
}

interface Results {
  CDS_BY_GROUP: { [key: string]: { score: number, cutoff: number, isAboveCutoff: boolean } }
  VISUAL_LINE_CHART_DATA: { id: string, config: any }[];
  VISUAL_BAR_CHART_DATA: any;
};

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
    MatSliderModule,
    MatIconModule
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  public currentAudioVolume = 1;

  public soundsOrderById: string[] | null = null;

  public ratingBySoundId: { [soundId: string]: number } = {};
  private isPlayedBySoundId: { [soundId: string]: boolean } = {};

  public currentSoundIndex = -1;

  public caulculatedResults: Results | null = null;

  private isChartAlreadyRenderedById: { [id: string]: boolean } = {};

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

  public markSoundAsPlayed(soundId: string): void {
    this.isPlayedBySoundId[soundId] = true;
  }

  public isPlayed(soundId: string): boolean {
    return this.isPlayedBySoundId[soundId] || false;
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
  
    if (this.currentSoundIndex === this.soundsOrderById?.length - 1) {
      // done
      this.misoquestWithAudioForm.controls.isAllRated.setValue('true');

      // calculate results
      this.caulculatedResults = this.calculateResults();
      requestAnimationFrame(() => {
        stepper.next();
      });
    } else {
      this.currentSoundIndex += 1;
    }
  }

  public onPreviousAudioButton(): void {
    if (this.currentSoundIndex === -1) {
      return;
    }
    this.currentSoundIndex -= 1;
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

  private getRatedSoundsList(): { name: string, rating: number }[] {
    const ratedSounds = [];
    for (const soundId in this.ratingBySoundId) {
      if (this.ratingBySoundId.hasOwnProperty(soundId)) {
        ratedSounds.push({
          name: soundId,
          rating: this.ratingBySoundId[soundId]
        });
      }
    }
    return ratedSounds;
  }

  private calculateResults(): Results {
    return {
      CDS_BY_GROUP: this.getFinalResult(),
      VISUAL_LINE_CHART_DATA: this.getVisualLineChartData(),
      VISUAL_BAR_CHART_DATA: this.getRawVisualBarChartData()
    };
  }

  private getRawVisualBarChartData(): any {
    const labels = [];
    const dataPoints = [];

    for (const soundId in this.ratingBySoundId) {
      if (this.ratingBySoundId.hasOwnProperty(soundId)) {
        labels.push(soundId);
        dataPoints.push(this.ratingBySoundId[soundId]);
      }
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Your ratings (Unpleasantness)',
          data: dataPoints,
          borderColor: 'rgba(54, 162, 235, 1)',
        }
      ]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 100,
          }
        },
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    };

    return {
      id: 'fullRawBarChart',
      config: config
    };
  }

  private getFinalResult(): any {
    return calcByGroupCDS(
      this.getRatedSoundsList()
    );
  }

  private getVisualLineChartData(): { id: string, config: any }[] {
    const rawDataPerGroup = compareSoundsRatingsToControlGroupByGroup(
      this.getRatedSoundsList()
    );

    const charts = [];

    const LABELS = {
      YOUR_RATING: 'You',
      PERCENTILE_75: 'Percentile.75'
    }

    for (const groupName in rawDataPerGroup) {
      const rawData = rawDataPerGroup[groupName];
      const soundNamesLabels = [];
      const datasets = [];
      const yourRatings = [];
      const percentile75 = [];
      for (const sound of rawData) {
        soundNamesLabels.push(sound.soundName);
        yourRatings.push(sound.soundRating);
        percentile75.push(sound.controlGroup75thPercentile);
      }

      datasets.push({
        label: LABELS.YOUR_RATING,
        data: yourRatings,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      });

      datasets.push({
        label: LABELS.PERCENTILE_75,
        data: percentile75,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      });

      const data = {
        labels: soundNamesLabels,
        datasets: datasets
      }

      const chartConfig = {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: 'Rating'
              },
              min: 0,
              max: 100,
              ticks: {
                stepSize: 10
              }
            },
            x: {
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45
              }
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: groupName,
            }
          }
        },
      };

      const chartData = {
        id: groupName,
        config: chartConfig
      }

      charts.push(chartData);
    }

    return charts;
  }

  public chartDataToChart(chartData: { id: string, config: any }): void {
    if (this.isChartAlreadyRenderedById[chartData.id]) {
      return;
    }
    // render chart
    this.isChartAlreadyRenderedById[chartData.id] = true;
    new Chart(chartData.id, chartData.config);
  }

  public onDownloadReportButton(): void {
    const data = document.getElementById('report');
    if (!data) {
      return;
    }
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 2, 2, imgWidth, imgHeight);
      pdf.save('report.pdf');
    });
  }
}

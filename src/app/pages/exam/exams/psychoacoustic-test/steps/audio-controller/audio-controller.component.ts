import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  LangService
} from '../../../../../../services/lang.service';

import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-audio-controller',
  standalone: true,
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './audio-controller.component.html',
  styleUrl: './audio-controller.component.scss'
})
export class AudioControllerComponent implements OnChanges {
  @Input() audioSrc: string = '';
  @Input() volume: number = 1;
  @Output() onVolumeChange: EventEmitter<number> = new EventEmitter<number>();
  public isPlaying: boolean = false;
  public audio: HTMLAudioElement | null = null;

  private audioEndedListener: EventListener;

  constructor(
    public langService: LangService
  ) {
    this.audioEndedListener = this.onAudioEnded.bind(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioSrc']) {
      const audioSrc = changes['audioSrc'].currentValue;
      console.log('audioSrc', audioSrc);
      if (this.audio) {
        this.pause();
        this.audio.src = audioSrc;
      } else {
        this.audio = new Audio(audioSrc);
        this.audio.addEventListener('ended', this.audioEndedListener);
      }
    }
    if (changes['volume'] && !changes['volume'].firstChange) {
      this.setVolume(this.volume, false);
    }
  }

  private onAudioEnded(): void {
    this.isPlaying = false;
  }

  public get audioType(): string {
    const extension = this.audioSrc.split('.').pop();
    if (extension === 'mp3') {
      return 'audio/mpeg';
    } else if (extension === 'ogg') {
      return 'audio/ogg';
    } else if (extension === 'wav') {
      return 'audio/wav';
    } else {
      return '';
    }
  }

  public playPause(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public play(): void {
    if (this.isPlaying) {
      return;
    }
    if (this.audio) {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  public pause(): void {
    if (!this.isPlaying) {
      return;
    }
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public setVolume(volume: number, emit: boolean): void {
    if (this.audio) {
      this.audio.volume = volume;
    }
    if (emit) {
      this.onVolumeChange.emit(volume);
    }
  }

  public onVolumeChangeHandler(event: Event): void {
    const volume = Number((event.target as HTMLInputElement).value);
    this.setVolume(volume, true);
  }

}

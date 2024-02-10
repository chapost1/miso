import { Component } from '@angular/core';
import { LangService } from '../../../services/lang.service';

import {MatCardModule} from '@angular/material/card';
import Exam from '../../../core/exam';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './exam-selector.component.html',
  styleUrl: './exam-selector.component.scss'
})
export class ExamSelectorComponent {
  constructor(public langService: LangService) {}

  public getExams(): Exam[] {
    const examsByKey = <{[key: string]: Exam}>this.langService.currentLang.app.pages.exam.children.examSelector.state.exams;
    return Object.keys(examsByKey).map(key => examsByKey[key]);
  }

}

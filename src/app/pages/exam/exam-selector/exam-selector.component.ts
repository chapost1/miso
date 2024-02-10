import { Component, Inject } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { LangService } from '../../../services/lang.service';

import { MatCardModule } from '@angular/material/card';
import Exam from '../../../core/exam';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import {
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
  constructor(
    public langService: LangService,
    public dialog: MatDialog
  ) { }

  public getExams(): Exam[] {
    const examsByKey = <{ [key: string]: Exam }>this.langService.currentLang.app.pages.exam.children.examSelector.state.exams;
    return Object.keys(examsByKey).map(key => examsByKey[key]);
  }

  public onDisplayExamStudy(exam: Exam): void {
    this.dialog.open(ExamSelectorExamStudyDialog, {
      position: { top: "16px", left: "16px", right: "16px", bottom: "16px" },
      closeOnNavigation: true,
      height: "calc(100% - 32px)",
      width: "calc(100% - 32px)",
      maxWidth: "calc(100%)",
      maxHeight: "calc(100%)",
      data: exam
    });
  }
}

@Component({
  selector: 'exam-selector-exam-study-dialog',
  template: `
  <div class="text-center bg-dark p-1">
    <a [href]="data.studyPdfAssetSrc" download="study.pdf" target="_blank" class="text-white">
      Download PDF
    </a>
  </div>
  <pdf-viewer [src]="data.studyPdfAssetSrc"
            [render-text]="true"
            [original-size]="false"
            [zoom]="0.5"
            style="width: calc(100%); height: 100%; text-align: center; margin: 16px auto; display: block;"
  ></pdf-viewer>
  <!-- buttons -->
  <div class="text-center my-1">
    <button mat-raised-button color="primary" (click)="dialog.closeAll()">Close</button>
  </div>
  `,
  standalone: true,
  imports: [PdfViewerModule, MatButtonModule],
})
class ExamSelectorExamStudyDialog {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Exam,
  ) { }
}

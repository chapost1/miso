import { Component } from '@angular/core';
import { LangService } from '../../services/lang.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', [Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(public langService: LangService) {}

  public getErrorMessage(control: string): string {
    const errorMessages = this.langService.currentLang.app.pages.contact.content.form.errorMessages;
    if (this.contactForm.get(control)?.hasError('required')) {
      return errorMessages.requiredField;
    }
    if (this.contactForm.get(control)?.hasError('email')) {
      return errorMessages.invalidEmail;
    }
    return '';
  }

  onSubmit() {
    alert(this.langService.currentLang.app.pages.contact.content.form.submit.successMessage);
  }
}

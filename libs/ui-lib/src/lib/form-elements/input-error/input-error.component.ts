import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ControlValueAccesorDirective } from '../control-value-accesor.directive';
import { DefaultErrorMessages } from './input-error.interface';
@Component({
  standalone: true,
  selector: 'c-error-input',
  imports: [CommonModule, ControlValueAccesorDirective],
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ErrorInputComponent {
  @Input() public controlName?: string;
  @Input() public formContained!: AbstractControl;

  private get currentControl(): AbstractControl | null {
    if (this.formContained && this.controlName) {
      return this.formContained instanceof FormGroup
        ? this.formContained.get(this.controlName)
        : this.formContained;
    }
    return null;
  }

  protected get error(): string {
    const errorMessage = this.currentControl?.errors
      ? this.getErrorMessage(this.currentControl?.errors)
      : '';
    return errorMessage;
  }

  private getErrorMessage(errors: Record<string, any>): string {
    const [errorName] = Object.keys(errors);
    const errorFunction = DefaultErrorMessages[errorName];
    if (errorFunction) {
      return errorFunction(errors[errorName]);
    } else {
      return 'An error occurred';
    }
  }
}
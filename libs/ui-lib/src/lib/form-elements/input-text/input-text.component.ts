import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorInputComponent } from '../input-error/input-error.component';
import { ControlValueAccesorDirective } from '../control-value-accesor.directive';
import { InputType } from './input-text.interface';

@Component({
  standalone: true,
  selector: 'c-input',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorInputComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent<T>
  extends ControlValueAccesorDirective<T>
  implements InputType {
  @Input() id = '';
  @Input() css: InputType['css'] = 'input-primary';
  @Input() placeholder?: string | undefined;
  @Input() value?: string | number | undefined;
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() name!: string;
  @Input()
  set disabled(value: boolean) {
    this.setDisabledState(value);
  }
}
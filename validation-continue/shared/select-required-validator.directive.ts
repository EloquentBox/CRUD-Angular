import {AbstractControl, NG_VALIDATORS, Validators} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive ({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectRequiredValidatorDirective,
    multi: true
  }]
})

export class SelectRequiredValidatorDirective implements Validators {
  // tslint:disable-next-line:no-input-rename
  @Input('appSelectorValidator') defaultValue: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    return control.value === this.defaultValue ? { defaultSelected: true} : null;
  }
}

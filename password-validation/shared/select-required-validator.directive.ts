import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive ({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectRequiredValidatorDirective,
    multi: true
  }]
})

export class SelectRequiredValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('appSelectorValidator') defaultValue: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    const controlToCompare = control.parent.get(this.defaultValue);
    if (controlToCompare.value === this.defaultValue) {
      return {'defaultSelected': true};
    }
    return null;
  }
}
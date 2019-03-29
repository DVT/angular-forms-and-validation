import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[appMinAge]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinAgeDirective, multi: true }]
})
export class MinAgeDirective {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    if (!control.value) {
      return null;
    }

    const value = moment(control.value);
    const today = moment();

    if (value.isValid && today.diff(value, 'years') < 18) {
      return { appMinAge: { value: control.value } };
    }

    return null;
  }

}

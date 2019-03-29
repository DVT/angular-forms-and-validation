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
    /**
     * Compare the current date with the date provided.
     * Return an error object if the difference in years
     * is less than 18.
     */

     throw Error('Not implemented');
  }

}

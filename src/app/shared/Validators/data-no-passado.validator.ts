import { AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

export function dataNoPassado(campo: AbstractControl): ValidationErrors | null {

    const data = moment(campo.value);

    if (data.isAfter(moment.now())) {
        return { datanoapassado: true};
    }

    return null;
}

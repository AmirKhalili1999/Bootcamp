import {Injectable} from "@angular/core";
import * as moment from 'jalali-moment';
import * as momentMain from 'moment';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})

export class GlobalVariableService {
  EMAIL_REGEX = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  PHONE_REGEX = '(\\+98|0)?9\\d{9}';
  PHONE_INPUT_REGEX = '^[0]{1}[0-9]{0,10}$';
  OTP_INPUT_REGEX = '^[0-9]{0,4}$';
  NUMBER_REGEX = '^[0-9]+$';
  AMOUNT_REGEX = '^[1-9]{1}[0-9]{0,14}$';
  PERCENTAGE_REGEX = '^[1-9][0-9]?$|^100$';
  TIME_REGEX = '^([0-1]?[0-9]|2[0-3])(?::([0]{0,2}))?$';
  PASSWORD_REGEX = '^.{4,25}$';
  USER_NAME_REGEX = '^[a-z0-9_-]+$';
  ENGLISH_REGEX = '^[a-zA-Z\\s]+$';
  PERSIAN_REGEX = '^[ا-یءئأإ\\s]+$';
  // @ts-ignore
  branch = import.meta.env.NG_APP_ENABLE_ANALYTICS;
  VERSION = "0.0.1";
  API_URL = ""

  // admin -----------------------------------------------------------------------
  admin: string = this.API_URL + `panel/admin`;

  constructor(
    private _sanitizer: DomSanitizer,
  ) {
  }

  // @ts-ignore
  convertDate(value: any, toLang: 'fa' | 'en', format: 'YYYY-MM-DD' | 'jYYYY-jMM-jDD' | 'YYYY/MM/DD' | 'jYYYY/jMM/jDD' | 'HH:mm' | 'jYYYY' = 'YYYY-MM-DD') {
    if (!value) {
      return;
    }
    if (toLang == 'fa') {
      // return moment(value, 'YYYY-MM-DD').format('jYYYY-jMM-jDD');
      return moment(value, momentMain(value).creationData().format).format(format);
    } else if (toLang == 'en') {
      // return moment(value, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');
      // @ts-ignore
      const currentFormat = (momentMain(value).creationData().format).toString().replace('YYYY', 'jYYYY').replace('MM', 'jMM').replace('DD', 'jDD');
      return moment(value, currentFormat).format(format);
    }
  }
}

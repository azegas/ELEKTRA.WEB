import { Injectable } from '@angular/core';
import { LogLevel } from './log-level';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logLevel: LogLevel = new LogLevel();

  constructor() {}

  debug(msg: string): void {
    this.logWith(this.logLevel.Debug, msg);
  }

  info(msg: string): void {
    this.logWith(this.logLevel.Info, msg);
  }

  warn(msg: string): void {
    this.logWith(this.logLevel.Warn, msg);
  }

  error(msg: string): void {
    this.logWith(this.logLevel.Error, msg);
  }

  private logWith(level: any, msg: string): void {
    if (level <= this.logLevel.Error) {
      switch (level) {
        case this.logLevel.Debug:
          return console.log('%c' + msg, 'color: #6495ED');
        case this.logLevel.Info:
          // tslint:disable-next-line:no-console
          return console.info('%c' + msg, 'color: gray');
        case this.logLevel.Warn:
          return console.warn('%c' + msg, 'color: #FF8C00');
        case this.logLevel.Error:
          return console.error('%c' + msg, 'color: #DC143C');
        default:
          // tslint:disable-next-line:no-console
          console.debug(msg);
      }
    }
  }
}

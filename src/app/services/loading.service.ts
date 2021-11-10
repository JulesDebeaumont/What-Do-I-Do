import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// UNUSED
export class LoadingService {

  public state: boolean = false;

  constructor() { }

  public setIsLoading(state: boolean): void {
    this.state = state;
  }
}

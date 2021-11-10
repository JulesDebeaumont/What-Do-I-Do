import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: boolean = false;

  constructor() { }

  public setIsLoading(bool: boolean): void {
    this.isLoading = bool;
  }
}

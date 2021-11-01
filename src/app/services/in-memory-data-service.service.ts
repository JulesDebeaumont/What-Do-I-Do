import { HttpClient } from '@angular/common/http';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {

  constructor(private http: HttpClient) { }

  createDb() {

    // Fake table user
    const users = [
      { id: 1, email: 'random@yahoo.fr', password: '1234' },
      { id: 2, email: 'another@hotmail.fr', password: 'abcd'}
    ];

    return {
      users
    };
  }

  // https://github.com/angular/in-memory-web-api#commands
  resetBd() {
    this.http.post('command/resetDb', { clear: true })
  }
}
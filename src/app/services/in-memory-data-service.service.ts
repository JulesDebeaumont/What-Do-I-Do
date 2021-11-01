import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Fake table user
    const users = [
      { id: 1, email: 'random@yahoo.fr', password: '1234' }
    ];

    return {
      users
    };
  }
}
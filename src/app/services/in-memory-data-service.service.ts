import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const users = [
      { id: 1, email: 'random@yahoo.fr', password: '1234' },
      { id: 2, email: 'another@hotmail.fr', password: 'abcd' }
    ]

    const tasks = [
      { id: 1, name: 'Vacuum', activated: false, repeat: 3, start: new Date(), message: 'Vacuum please!', users: 1 },
      { id: 2, name: 'Dishes', activated: true, repeat: 1, start: new Date(), message: "It's dishes time", users: 1 },
      { id: 3, name: 'Mayor appointment', activated: false, repeat: 0, start: new Date('2021-11-20'), message: "Don't forgot about the mayor appointment", users: 2 }
    ]

    const activities = [
      { id: 1, name: 'Play video-games', duration: 60, users:  2},
      { id: 1, name: 'Restaurant', duration: 150, users:  2}
    ]

    return {
      users,
      tasks,
      activities
    };
  }

}
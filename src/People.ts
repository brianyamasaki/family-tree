import relatives from '@data/people.json';
import type { Person } from '@src/Person';

export class People {
  list:Person[];

  constructor(people: Person[]) {
    this.list = people;
  }
  
  getList() {
    return this.list;
  }
  
  getPerson(id: number) {
    return this.list[id-2];
  }
}

export const allPeople = new People(relatives);
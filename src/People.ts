import relatives from '@data/people.json';
import { Person} from '@src/Person';
import type { PersonJson } from '@src/Person';

export class People {
  list:Person[];

  constructor(people: PersonJson[]) {
    this.list = people.map(personJson => new Person(personJson))
  }
  
  getList() {
    return this.list;
  }
  
  getPerson(id: number): Person {
    return this.list[id-2];
  }
}

export const allPeople = new People(relatives);
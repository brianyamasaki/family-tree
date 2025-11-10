import people from '@data/people.json';
import { Person } from '@src/Person';

export class People {
  list:Person[] = [];

  constructor() {
    people.forEach(item => {
      this.list.push(new Person(item));
    })

    this.assignChildren();
  }

  assignChildren() {
    this.list.forEach(person => {
      const father = person.fatherId;
      if (father > 1) {
        this.list[father - 2].addChild(person.idnum);
      }
      const mother = person.motherId;
      if (mother > 1) {
        this.list[mother - 2].addChild(person.idnum);
      }
    })
  }
  
  getList() {
    return this.list;
  }
  
  getListDetails() {
    return this.list.map(person => {
      return person.details();
    })
  }

  getPerson(id: number) {
    return this.list[id-2];
  }
}

export const allPeople = new People();
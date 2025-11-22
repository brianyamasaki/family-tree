import { People } from"@src/People.ts";
import type { Person } from "./Person";

export type AncestorNode = {
  person: Person;
  fatherNode?: AncestorNode;
  motherNode?: AncestorNode;
}

export const ancestorTree = (
    people: People, 
    personId: number) :AncestorNode => {
  const person = people.getPerson(personId);
  const anc: AncestorNode = {
    person
  };

  if (anc.person.fatherId > 1) {
    anc.fatherNode = ancestorTree(people, person.fatherId);
  }
  if (anc.person.motherId > 1) {
    anc.motherNode = ancestorTree(people, person.motherId);
  }
  return anc;
}
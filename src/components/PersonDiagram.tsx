import { People } from "@src/People";
import PersonNode from "@components/PersonNode";
import './PersonDiagram.scss';

type Props = {
  id: number;
  people: People;
  nextPerson: (id:number) => void;
}

const PersonDiagram = ({id, people, nextPerson}: Props) => {
  if (id < 2) {
    return <h3>Please choose a person at left</h3>
  }
  const person = people.getPerson(id);
  const personDetails = person.details();
  const father = person.fatherId >= 2 ? people.getPerson(person.fatherId) : null;
  const mother = person.motherId >= 2 ? people.getPerson(person.motherId) : null;

  const renderChildren = () => {
    if (person.children.length === 0) return null;
    return (
      <>
        <h4 className="label">Children</h4>
        <div className="children">
          {person.children.map((childId) => {
            return (
              <PersonNode 
                person={people.getPerson(childId)} 
                nextPerson={nextPerson}
                key={childId} 
              />
            )
          })}
        </div>
      </>
    )
  }
  return (
    <div id="wrapper">
      <h4 className="label">Parents</h4>
      <div className="parents">
        <PersonNode person={father} nextPerson={nextPerson}/>
        <PersonNode person={mother} nextPerson={nextPerson}/>
      </div>
      <div className="self">
        <PersonNode person={person} nextPerson={nextPerson}/>
      </div>
      { renderChildren()}
    </div>
  );

}
export default PersonDiagram;
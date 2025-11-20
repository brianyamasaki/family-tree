import { People } from "@src/People";
import PersonNode from "@components/PersonNode";
import ParentPane from "./ParentPane";
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
      <div className="parents">
        <ParentPane parents={[father, mother]} nextPerson={nextPerson}/>
      </div>
      <div className="self">
        <h3>{person.firstName} {person.middleName} {person.lastName}</h3>
        <p>{person.kanji ? person.kanji : null}</p>
      </div>
      { renderChildren()}
    </div>
  );

}
export default PersonDiagram;
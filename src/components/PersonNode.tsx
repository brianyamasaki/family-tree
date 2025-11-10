import { Person } from "@src/Person"
import './PersonNode.scss';

type Props = {
  person: Person | null;
  nextPerson: (id:number) => void;
}
const PersonNode =({person, nextPerson}: Props ) => {
  if (!person) {
    return (
      <div className="person-bubble">
        <p>Unknown</p>
      </div>
    )
  }
  return (
    <div className="person-bubble selectable" onClick={() => nextPerson(person.idnum)}>
      <p>{person.firstName} {person.lastName}</p>
    </div>
  )
}
export default PersonNode;
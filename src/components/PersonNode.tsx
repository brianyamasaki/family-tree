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
  const renderMiddleName = () => {
    if (!person.middleName) return null;
    return (
      <li>Middle Name: <strong>{person.middleName}</strong></li>
    )    
  }
  const renderKanji = () => {
    if (!person.kanji) return null;
    return (
      <li>Kanji: <strong>{person.kanji}</strong></li>
    )
  }
  return (
    <div className="person-bubble selectable" onClick={() => nextPerson(person.idnum)}>
      <p className="first-last-name">{person.firstName} {person.lastName}</p>
      <ul>
        {renderMiddleName()}
        {renderKanji()}
      </ul>
    </div>
  )
}
export default PersonNode;
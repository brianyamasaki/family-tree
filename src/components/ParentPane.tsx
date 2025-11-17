import { Person } from "@src/Person";
import './ParentPane.scss';

type Props = {
  parents: (Person | null)[];
  nextPerson: (id:number) => void;
}


const ParentPane = ({parents, nextPerson}:Props) => {
  const [father, mother] = parents;

  const chooseNext = (id:number) => {
    if (id < 2) return;
    nextPerson(id);
  }

  const renderParent = (person:Person | null) => {
    if (!person) return <div className="parent">Unknown</div>
    return (
      <div className="parent" onClick={() => {if (person) chooseNext(person.idnum)}}>
        <h4>{person.firstName} {person.lastName}</h4>
      </div>      
    )
  }

  return (
    <div className="parent-pane">
      <h4 className="label">Parents</h4>
      <div className="side-by-side">
        {renderParent(father)}
        {renderParent(mother)}
      </div>
    </div>
  );
}

export default ParentPane;
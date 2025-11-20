import { useState } from 'react';
import NameList from "@src/components/NameList";
import PersonDiagram from './PersonDiagram';
import people from '@data/people.json';
import './ShowTree.scss';

const ShowTree = () => {
  const [ currentPerson, setCurrentPerson ] = useState(-1);

  const nextPerson = (iperson: number) => {
    setCurrentPerson(iperson);
  }

  return (
    <>
      <div id="side-by-side">
        <NameList id={currentPerson} nextPerson={nextPerson} />
        <div>
          <PersonDiagram id={currentPerson} people={people} nextPerson={nextPerson} />
        </div>
      </div>
    </>
  )

}
export default ShowTree;
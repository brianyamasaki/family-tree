import { useState } from "react";
import NameList from "./NameList";
import './NearestRelative.scss';
import { allPeople } from "@src/People";

const NearestCommonRelative = () => {
  const [choice1, setChoice1] = useState(-1);
  const [choice2, setChoice2] = useState(-1);

  const choosePerson = (id:number) => {
    console.log('choosePerson', id)
    if (id === choice1) {
      setChoice1(-1);
    } else if (id === choice2) {
      setChoice2(-1);
    } else if (choice1 === -1) {
      setChoice1(id);
    } else {
      setChoice2(id);
    }
  }

  const renderChoiceName = (id: number) => {
    if (id < 1) return null;
    const person = allPeople.getPerson(id);
    return (
      <p>{person.firstName} {person.lastName}</p>
    )
  }

  return (
    <div className="nearest-relative">
      <NameList choice1={choice1} choice2={choice2} choosePerson={choosePerson}/>
      <div>
        <h4>Person 1:</h4>
        {renderChoiceName(choice1)}
      </div>
      <div>
        <h4>Person 2:</h4>
        {renderChoiceName(choice2)}
      </div>
    </div>
  )
}

export default NearestCommonRelative;
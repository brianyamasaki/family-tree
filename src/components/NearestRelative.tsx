import { useState } from "react";
import NameList from "./NameList";
import './NearestRelative.scss';
import { allPeople } from "@src/People";
import { Person } from "@src/Person";
import { ancestorTree, compareTrees } from "@src/treeUtils";

const NearestCommonRelative = () => {
  const [choice1, setChoice1] = useState(-1);
  const [choice2, setChoice2] = useState(-1);

  const choosePerson = (id:number) => {
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
    if (!Person.isValidId(id)) return null;
    const person = allPeople.getPerson(id);
    return (
      <div>
        <a href={`/person/${person.id - 2}`}>
          {person.firstName} {person.lastName}
        </a>
      </div>
    )
  }

  const renderNearestCommonAncestor = () => {
    if (!Person.isValidId(choice1) || !Person.isValidId(choice2)) return null;
    const tree1 = ancestorTree(allPeople, choice1);
    const tree2 = ancestorTree(allPeople, choice2);
    const ancestor = compareTrees(tree1, tree2);
    if (!ancestor) {
      return (
        <div className="common-ancestor">Common Ancestor not found in current data</div>
      )
    } else {
      return (
        <div className="common-ancestor">
          <a href={`/person/${ancestor.person.id - 2}`}>
            {ancestor.person.firstName} {ancestor.person.lastName}
          </a>
        </div>
      )
    }
  }

  return (
    <div className="nearest-relative side-by-side">
      <div>
        <label>Choose Two People</label>
        <NameList choice1={choice1} choice2={choice2} choosePerson={choosePerson}/>
      </div>
      <div>
      <div className="side-by-side">
        <div className="choice">
          <h4>Person 1:</h4>
          {renderChoiceName(choice1)}
        </div>
        <div className="choice">
          <h4>Person 2:</h4>
          {renderChoiceName(choice2)}
        </div>
      </div>
      {renderNearestCommonAncestor()}
      </div>
    </div>
  )
}

export default NearestCommonRelative;
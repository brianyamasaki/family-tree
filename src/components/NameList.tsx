import type {Person } from '@src/Person';
import { allPeople } from '@src/People';
import '@components/NameList.scss'

type Props = {
  choice1: number;
  choice2: number;
  choosePerson: (id:number) => void;
}

const NameList = ({choice1, choice2, choosePerson}: Props) => {
  const people = allPeople.getList();
  // const sortedPeople = people.sort((personA, personB) =>(personA.firstName.toLowerCase() < personB.firstName.toLowerCase() ? -1 : 1));

  return (
    <div className="name-list">
      <ul>
        {
          people.map(detail => {
            return (
              <li 
                className={`${choice1 === detail.id || choice2 === detail.id? 'selected':''} selectable`}
                title='Click to select' 
                onClick={() => choosePerson(detail.id)}
                key={detail.id}
              >
                {`${detail.firstName} ${detail.lastName}`}
              </li>
            )
          })
        }      
      </ul>
    </div>
  )
}

export default NameList;
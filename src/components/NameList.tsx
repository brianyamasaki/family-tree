import { allPeople } from '@src/People';
import '@components/NameList.scss'

type Props = {
  id: number;
  nextPerson: (id:number) => void;
}

const NameList = ({id, nextPerson}: Props) => {
  const details = allPeople.getListDetails();

  return (
    <ul>
      {
        details.map(detail => {
          return (
            <li 
              className={`${id === detail.id ? 'selected':''} selectable`}
              title='Click to select' 
              onClick={() => nextPerson(detail.id)}
              key={`${detail.firstName}${detail.lastName}`}
            >
              {`${detail.firstName} ${detail.lastName}`}
            </li>
          )
        })
      }      
    </ul>
  )
}

export default NameList;
import { allPeople } from '@src/People';
import '@components/NameList.scss'

type Props = {
  id: number;
  nextPerson: (id:number) => void;
}

const NameList = ({id, nextPerson}: Props) => {
  const details = allPeople.getListDetails();

  return (
    <table>
      <tbody>
      {
        details.map(detail => {
          return (
            <tr 
              className={`${id === detail.id ? 'selected':''} selectable`}
              title='Click to select' 
              onClick={() => nextPerson(detail.id)}
              key={`${detail.firstName}${detail.lastName}`}
            >
              <td>
                {`${detail.firstName} ${detail.lastName}`}
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default NameList;
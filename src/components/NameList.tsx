import { allPeople } from '@src/People';
import '@components/NameList.scss'

const NameList = () => {
  const details = allPeople.getListDetails();

  return (
    <table>
      {
        details.map(detail => {
          return (
            <tr>
            <td key={`${detail.firstName}${detail.lastName}`}>
              {`${detail.firstName} ${detail.lastName}`}
            </td>
            <td className='kanji'>
              {detail.kanji}
            </td>
            </tr>
          )
        })
      }
    </table>
  )
}

export default NameList;
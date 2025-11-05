import { allPeople } from '@src/People';
import '@components/PeopleTable.scss';

const PeopleTable = () => {
  const renderPeople = () => {
    return allPeople.getList().map((person, j) => {
      const details = person.details();
      return (
        <tr key={j}>
        {Object.values(details).map((column, i) => {
        return (
          <td key={i}>{column}</td>
        )
        })}
        </tr>
      )
    })
  }
  const renderHeaders = () => {
    const details = allPeople.getList()[0].details();
    return Object.keys(details).map(key =>{
      return (
        <th key={key}>{key}</th>
      )
    })
  }

  return (
    <>
      <h2>People</h2>
      <table>
        <tr>
          {renderHeaders()}
        </tr>
        {renderPeople()}
      </table>
    </>
  )
}

export default PeopleTable;
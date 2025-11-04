import people from '@data/people.json'

const PeopleTable = () => {
  const renderPeople = () => {
    return people.map((person, j) => {
      
      return (
        <tr key={j}>
        {Object.values(person).map((column, i) => {
        return (
          <td key={i}>{column}</td>
        )
        })}
        </tr>
      )
    })
  }
  return (
    <>
      <h2>People</h2>
      <table>
        <tr>
          {Object.keys(people[0]).map(key =>{
            return (
              <th key={key}>{key}</th>
            )
          })} 
        </tr>
        {renderPeople()}
      </table>
    </>
  )
}

export default PeopleTable;
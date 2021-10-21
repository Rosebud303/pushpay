import { PersonType } from '../../types';
import './Person.css'

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {
  return(
      <div className='personContainer'>
        <h3 className='characterName'>{person.name}</h3>
        <p>Species: {person.specie}</p>
        <div>
          <h4>Movies</h4>
          {
            person.films.map((film: any) => {
              return <p>{film}</p>
            })
          }
        </div>
      </div>
  ) 
}

export default Person

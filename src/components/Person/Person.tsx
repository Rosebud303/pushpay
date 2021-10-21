import { PersonType } from '../../types';

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {
  return(
      <div>
        <h3>{person.name}</h3>
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

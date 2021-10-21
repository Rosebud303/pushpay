import React from 'react'

import { fetchJson, fetchSpecies, fetchFilms } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    fetchAll()
  }, [])
  
  const fetchAll = async () => {
    const people = await fetchJson<{ results: PersonType[] }>('people');
    const species = await fetchSpecies(people.results);
    const films = await fetchFilms(species);
    setPeople(films.map((specie: any) => {
      return {
        name: specie.name,
        specie: specie.speciesName,
        films: specie.filmsInfo.map((film: any) => film.title)
      }
    }));
    
  }

  return (
    <div>
      {people.map(person => <Person person={person} />)}
    </div>
  )
}

export default People

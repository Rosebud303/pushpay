import React from 'react'

import { fetchJson, fetchSpecies, fetchFilms } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import './People.css'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])
  const [searchBar, setSearchBar] = React.useState<String>('')

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

  const searchingInput = () => {

    let filteredPeople = people.filter((person: any) => {
      return person.name.includes()
    })
    setPeople(filteredPeople)
  }

  return (
    <div className='container'>
      <h1>Star Wars API</h1>
      <input onChange={()=>searchingInput()}/>
      <div className='swapiContainer'>
        {people.map(person => <Person person={person} />)}
      </div>
    </div>
  )
}

export default People

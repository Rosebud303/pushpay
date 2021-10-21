export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/${url}/`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

  const test = await response.text()
  return JSON.parse(test)
}


export const fetchSpecies = async (people: any) => {
  const speciesUpdate = people.map( async (people: any) => {
    if(!people.species[0]) {
      return {...people, speciesName: "Unknown"}
    } else {
      const response = await fetch(people.species[0])
      const speciesinfo = await  response.json()
      return {...people, speciesName: speciesinfo.name}
    }
  })
  return Promise.all(speciesUpdate)
}

export const fetchFilms = async (people: any) => {
  const filmsUpdate = await people.map(async (person: any) => {
     const films = await person.films.map(async (film: string) => {
      const response = await fetch(film)
      const filmInfo = await  response.json()
      return filmInfo;
     })
     const filmsList = await Promise.all(films)
     console.log(filmsList)
     return {...person, filmsInfo: filmsList }
  })
  return Promise.all(filmsUpdate);
}

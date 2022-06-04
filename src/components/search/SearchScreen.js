import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroByName } from '../../helpers/getHerosByName'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse( location.search )


  const [values, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = values

  const filterHeros = useMemo( () => getHeroByName(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchText)
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-4">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search a Hero' className='form-control' name='searchText' value={searchText} onChange={handleInputChange} />
            <button className='btn btn-outline-primary mt-3' type='submit'>Search...</button>
          </form>

        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-info'>Search a Hero</div>
              : ( filterHeros.length === 0 )
                && <div className='alert alert-danger'>No results: {q}</div>
          }

          {
            filterHeros.map(hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
import { useMemo } from 'react'
import { getHerosByPublisher } from '../../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heros = useMemo (() => getHerosByPublisher( publisher ), [ publisher ])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
                {
                    heros.map( hero => (
                        <HeroCard key={ hero.id } { ...hero }/>
                    ))
                }
        </div>
    )
}
import { heros } from '../data/heros'

export const getHeroByName = ( heroName = '') => {
    if (heroName === '') {
        return []
    }

    heroName = heroName.toLowerCase()
    return heros.filter( hero => hero.superhero.toLowerCase().includes( heroName ))
}
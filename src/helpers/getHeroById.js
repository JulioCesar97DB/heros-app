import { heros } from '../data/heros'

export const getHeroById = ( heroId ) => {
    return heros.find( hero => hero.id === heroId)
}

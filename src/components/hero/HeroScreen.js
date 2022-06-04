import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {

    const navigate = useNavigate()

    const { heroId } = useParams()

    const hero = useMemo( () =>  getHeroById( heroId ), [ heroId ])

    if (!hero) {
        return <Navigate to='/' />
    }

    const imgPath = `/assets/${hero.id}.jpg`

    const handleReturn = () => {
        // if (hero.publisher === 'DC Comics') {
        //     navigate('/dc')
        // }else navigate('/marvel')
        navigate( -1 )
    }
    
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={ imgPath } alt={ hero.superhero } className='img-thumbnail animate__animated animate__fadeInLeft'/>
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{ hero.superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className='list-group-item'><b>Publisher: </b>{ hero.publisher }</li>
                    <li className='list-group-item'><b>First Appereance: </b>{ hero.first_appearance }</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{ hero.characters }</p>

                <button className='btn btn-outline-info'
                        onClick={ handleReturn }
                >
                    Back
                </button>
            </div>            
        </div>
    )
}

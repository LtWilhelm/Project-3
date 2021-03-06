import React, { useState, useContext, useLayoutEffect } from 'react'
import dbAPI from '../../utils/dbAPI'
import { AppStateContext } from '../../AppContext';
import CharacterCard from './CharacterCard'
import {Link} from 'react-router-dom'
import Buttons from '../Buttons'

const MyCharacters = () => {
    const context = useContext(AppStateContext);
    const [character, setCharacter] = useState("")

    const findMyCharacters = () => {
        if (context.user) {
            let id = []
            for (let i = 0; i < context.user.length; i++) {
                id.push(context.user[i])
            }
            let userId = id.join('')
            dbAPI.populateCharacter(userId).then(data => setCharacter(data.data.characters))
        }
    }

    useLayoutEffect(findMyCharacters, [context])

    return (
        <>
            {/* class, name, gender, race, class, background, alignment,
             strength, dexterity, intelligence, charisma, constitution, wisdom */}
            <div className="container">
                <div className="row">
                    <div className="col m8 offset-m2 s12" style={{ fontFamily: 'Grenze' }}>
                        <h1 style={{ color: "#fff" }}>My Characters</h1>
                        <Link to="/character/create">
                            <Buttons
                                title="Make A New Character!"
                                colors={["red", "darken-4"]}
                            />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {character && character.map(data => {
                        return <div className="col s12 m6" style={{ height: "80vh", overflow: "auto" }} key={data._id}>
                            <CharacterCard
                                class={data.class}
                                name={data.name}
                                gender={data.gender}
                                race={data.race}
                                background={data.background}
                                alignment={data.alignment}
                                strength={data.stats.strength}
                                dexterity={data.stats.dexterity}
                                intelligence={data.stats.intelligence}
                                charisma={data.stats.charisma}
                                constitution={data.stats.constitution}
                                wisdom={data.stats.wisdom}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default MyCharacters
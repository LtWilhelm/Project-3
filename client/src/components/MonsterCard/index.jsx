import React from 'react'
import "./MonsterCard.css";

// title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
const RaceCard = (props) => {
  return (
    <>
      <div className="monsterCard" style={{ fontFamily: 'Grenze' }}>
        <div className="card">
          <div className="card-content">
            <h1 className="descriptionMonster">{props.title}</h1>
            <div>
              <p><span className="subHeadingMonster">Type: </span>{props.type}</p>
            </div>
            <div>
              <p><span className="subHeadingMonster">Languages: </span>{props.languages}</p>
            </div>
          </div>
          <div className="card-content grey lighten-4">
            <p><span className="subHeadingMonster">Average Size: </span>{props.size}</p>
            <p><span className="subHeadingMonster">Senses: </span>
              <ul>
                {props.senses.blindsight && <li>Blindsight: {props.senses.blindsight}</li>}
                {props.senses.fly && <li>Darkvision: {props.senses.darkvision}</li>}
                {props.senses.passive_perception && <li>Passive Perception: {props.senses.passive_perception}</li>}
              </ul>
            </p>
            <p><span className="subHeadingMonster">Speed: </span>
              <ul>
                {props.speed.walk && <li>Speed: {props.speed.walk}</li>}
                {props.speed.fly && <li>Fly: {props.speed.fly}</li>}
                {props.speed.swim && <li>Swim: {props.speed.swim}</li>}
              </ul>
            </p>
            <p><span className="subHeadingMonster">Hit Dice: </span>{props.hitDice}</p>
            <p><span className="subHeadingMonster">Alignment: </span>{props.alignment}</p>
            <div>
              <h6>{props.actions}</h6>
            </div>
            <div>
              <h6>{props.legendaryActions}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaceCard
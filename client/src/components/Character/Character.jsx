import React, { Component } from 'react'
import '../Builder';
// import '../App.css';
import './Character.css';

class Character extends Component {
    state = {
        ClassImages: {
            Wizard: 'https://piskel-imgstore-b.appspot.com/img/72a8fa1c-f2f9-11e9-8294-1f4b6e958b6c.gif'
        }      
    }
    render() {
        return (
            <div className="col l6">
                <div className="Character grey">
                    <div className="Character-image">
                        <img src={this.state.ClassImages[this.props.character.Class]} alt="" />
                    </div>
                    <h1 className="Character-title">{this.props.character.Name || "Character Name"}</h1>
                    <div style={{
                        fontFamily: 'Grenze'
                    }}>
                        <div className="Character-data">Race: {this.props.character.Race}</div>
                        <div className="Character-data">Class: {this.props.character.Class}</div>
                        <div className="Character-data">Gender: {this.props.character.Gender}</div>
                        <div className="Character-data">Background: <p>{this.props.character.Background}</p></div>
                        {/* <div className="Character-data">Languages: {this.props.character.Languages}</div> */}
                        <div className="Character-data">Equipment: {}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;
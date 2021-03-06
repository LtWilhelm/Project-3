import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown';
import "../../App.css";
import "./Nav.css";
import NavIcon from './NavIcon';

class NavBar extends Component {
    render() {
        return <>
            <div className='hide-on-med-and-down' style={{ height: '2em' }}></div>
            <nav className="red darken-4" >
                <ul style={{ 
                    fontFamily: 'Grenze'
                }}>
                    <NavIcon to="/mycharacters" label="My Characters" />
                    <NavIcon to="/mycampaigns" label="My Campaigns" />
                    <NavIcon to="/mytables" label="My Tables" />
                    {/* <li><NavLink to="/mycharacters"><img src={this.state.hover} alt=""/> My Characters</NavLink></li> */}
                    {/* <li><NavLink to="/mycampaigns">My Campaigns</NavLink></li>
                    <li><NavLink to="/mytables">My Tables</NavLink></li> */}
                    <Dropdown label="References">
                        <li><NavLink to="/spells">Spells</NavLink></li>
                        <li><NavLink to="/classes">Classes</NavLink></li>
                        <li><NavLink to="/races">Races</NavLink></li>
                        <li><NavLink to="/monsters">Monsters</NavLink></li>
                        {/* <Dropdown label="Spells" destination="/spells" size="small">
                            <li><NavLink to="/spells/bybook">By Book</NavLink></li>
                            <li><NavLink to="/spells/byclass">By Class</NavLink></li>
                            <li><NavLink to="/spells/byschool">By School</NavLink></li>
                            <li><NavLink to="/homebrew/spells">Homebrew Spells</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Classes" destination="/classes" size="small">
                            <li><NavLink to="/classes/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/classes">Homebrew Classes</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Races" destination="/races" size="small">
                            <li><NavLink to="/races/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/races">Homebrew Races</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Monsters" destination="/monsters" size="small">
                            <li><NavLink to="/monsters/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/monsters">Homebrew Monsters</NavLink></li>
                        </Dropdown> */}
                    </Dropdown>
                </ul >
                <div className="center brand-logo">
                    <NavLink to="/" className='valign-wrapper'>
                        <img src="/img/dragon_logo.png" alt="logo" className="hide-on-med-and-down" style={{
                            height: '2em'
                        }} />
                    </NavLink>
                </div>
            </nav >
        </>
    }
}

export default NavBar;
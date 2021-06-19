import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Home from './Home';
import Mail from './ContactUs';
import Subjects from './Subjects';
import Offer from './Offer.js';
import Tutor from './Tutor';

import background from "../bg.jpg";
import './homecss.css';

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="back">
        
        <Menu pointing>
        
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
    
          <Menu.Item
            name='Subjects'
            active={activeItem === 'Subjects'}
            onClick={this.handleItemClick}
            />

          <Menu.Item
            name='What we offer'
            active={activeItem === 'What we offer'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Become a Tutor'
            active={activeItem === 'Tutor'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {this.state.activeItem == "home" ? (<Home/>) : (<div></div>)}
        {this.state.activeItem == "Subjects" ? (<Subjects/>): (<div></div>) }
        {this.state.activeItem == "Become a Tutor" ? (<Tutor/>): (<div></div>) }
        {this.state.activeItem == "What we offer" ? (<Offer/>): (<div></div>) }
        {this.state.activeItem == "Contact" ? (<Mail/>): (<div></div>) }

      </div>
    )
  }
}
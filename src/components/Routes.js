import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Home from './Home';
import Mail from './ContactUs';
  

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        
        <Menu pointing>
        
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
    
          <Menu.Item
            name='Subjects'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            />

          <Menu.Item
            name='What we offer'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Become a Tutor'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contact'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {this.state.activeItem == "home" ? (<Home/>) : (<div></div>)}
        {this.state.activeItem == "messages" ? (<Mail/>): (<div></div>) }

      </div>
    )
  }
}
import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Offer extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
<Row>
    <Col></Col><Col align="left" xs={5}>
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Physics
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <ul>
        <li>Physics-1</li>
        <li>Physics-2</li>
        <li>Physics-3</li>
        <li>Classical Physics</li>
        <li>Optics</li>
        <li>Electromagnetic Theory</li>
        <li>Quantum Physics</li>
        <li>Algebra Based Physics</li>
        <li>General Physics</li>
        <li>Solid State Physics</li>
        <li>Calculus Based Physics</li>
        <li>Modern Physics</li>
        <li>Thermodynamics </li> 
        </ul>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
      </Col><Col></Col>
      </Row>
    )
  }
}
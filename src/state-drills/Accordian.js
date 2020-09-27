import React, { Component } from 'react';

export default class Accordion extends Component {
    static defaultProps = {
      sections: []
    };
  
    state = {
      activeSectionIndex: null,
    }
  
    handleSetActiveSecion = (sectionIndex) => {
      this.setState({ activeSectionIndex: sectionIndex })
    }
  
    renderItem(section, i, activeSectionIndex) {
      return (
        <li className='Accordion__item' key={i}>
          <button
            type='button'
            onClick={() => this.handleSetActiveSecion(i)}
          >
            {section.title}
          </button>
          {(activeSectionIndex === i) && <p>{section.content}</p>}
        </li>
      )
    }
  
    render() {
      const { activeSectionIndex } = this.state
      const { sections } = this.props
      return (
        <ul className='Accordion'>
          {sections.map((section, i) =>
            this.renderItem(section, i, activeSectionIndex)
          )}
        </ul>
      )
    }
  }


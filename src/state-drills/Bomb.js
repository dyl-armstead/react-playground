import React, { Component } from 'react';

export default class Bomb extends Component {
    state = {
      count: 0
    }

    componentDidMount = () => {
      const newCount = this.state.count + 1
      this.interval = setInterval(() => {
        this.setState(
          {count: newCount}
      )}, 1000)
    }
    

    componentWillUnmount(){
      clearInterval(this.interval)
    }

    displayCount = () => {
      if (this.state.count % 2 === 0){
        return 'tick'
      }
      else if (this.state.count % 2 !== 0){
        return 'tock'
      }
      else if (this.state.count >= 8){
        clearInterval(this.interval)
        return 'BOOM!!!!'
      }
    }

    render() {
        return (
          <div>
            <p>{this.displayCount()}</p>
          </div>
        )
      }
}
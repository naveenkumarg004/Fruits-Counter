import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mCount: 0, bCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mCount: prevState.mCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bCount: prevState.bCount + 1}))
  }

  render() {
    const {mCount, bCount} = this.state
    return (
      <div className="fruits-app-container">
        <div className="white-container">
          <h1 className="head">
            Bob ate <span className="count">{mCount}</span> mangoes
            <span className="count"> {bCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="pic"
                alt="mango"
              />
              <button
                onClick={this.mangoCount}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="pic"
                alt="banana"
              />
              <button
                onClick={this.bananaCount}
                type="button"
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

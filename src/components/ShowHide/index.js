import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: true, lastname: true}

  onFirstName = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    const first = firstname ? (
      <p className="first-name-heading first-name">Joe</p>
    ) : null
    const last = lastname ? (
      <p className="first-name-heading last-name">Jonas</p>
    ) : null

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            <div>{first}</div>
          </div>
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            <div>{last}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

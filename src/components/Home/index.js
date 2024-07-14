// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {iplTeamData: [], isLoading: true}

  componentDidMount() {
    this.getFetchApiData()
  }

  getFetchApiData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachobject => ({
      id: eachobject.id,
      name: eachobject.name,
      teamImageUrl: eachobject.team_image_url,
    }))
    this.setState({iplTeamData: updatedData, isLoading: false})
  }

  loaderComponent = () => {
    console.log('  ')
    return (
      <div testid="loader">
        {' '}
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    )
  }

  getMatchCardContainer = () => {
    const {iplTeamData} = this.state
    return (
      <ul className="Teamcardul">
        {iplTeamData.map(eachObject => (
          <TeamCard key={eachObject.id} TeamCradDeatils={eachObject} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="homeContainer">
        <div>
          <div className="headingAndIplImg">
            <img
              width="50px"
              height="50px"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL DashBoard</h1>
          </div>
          <div className="teamCard">
            {isLoading ? this.loaderComponent() : this.getMatchCardContainer()}
          </div>
        </div>
      </div>
    )
  }
}
export default Home

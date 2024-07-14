// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {recentMatchData: [], isLoading: true}

  componentDidMount() {
    this.getFetchedData()
  }

  getLastMatchFormatting = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getFetchedData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattingData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getLastMatchFormatting(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachobject =>
        this.getLastMatchFormatting(eachobject),
      ),
    }
    this.setState({recentMatchData: formattingData, isLoading: false})
  }

  loaderRender = () => {
    return (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    )
  }

  getRenderDetails = () => {
    const {recentMatchData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = recentMatchData
    return (
      <>
        <div className="bannerImgContainer">
          <img
            src={teamBannerUrl}
            alt="team banner"
            width="100%"
            height="10%"
          />
        </div>
        <p className="latestMatchheading">Latest Match</p>
        <div className="latestMatchContainer">
          <LatestMatch lastMatchDeatils={latestMatch} />
        </div>
        <div className="matchCardContainer">
          <ul className="recent-matches-list">
            {recentMatches.map(eachObject => (
              <MatchCard key={eachObject.id} matchCardDetails={eachObject} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    return (
      <div className={`${id} TeamContainerMatchesTeam`}>
        {isLoading ? this.loaderRender() : this.getRenderDetails()}
      </div>
    )
  }
}
export default TeamMatches

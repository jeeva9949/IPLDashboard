// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} =
    matchCardDetails

  const getMatchStatusClassName = () => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }
  const matchStatusClassName = `match-status ${getMatchStatusClassName()}`
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

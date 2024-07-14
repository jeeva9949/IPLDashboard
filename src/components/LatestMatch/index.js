import './index.css'

const LatestMatch = props => {
  const {lastMatchDeatils} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = lastMatchDeatils
  return (
    <div className="InnerContainerLatestMatch">
      <div className="firstContainer">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="computingLogoContainer">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          width="150px"
          height="150px"
        />
      </div>
      <div className="secondContainer">
        <p className="latest-match-details-label">First Innings</p>
        <p className="latest-match-details-value">{firstInnings}</p>
        <p className="latest-match-details-label">Second Innings</p>
        <p className="latest-match-details-value">{secondInnings}</p>
        <p className="latest-match-details-label">Man Of The Match</p>
        <p className="latest-match-details-value">{manOfTheMatch}</p>
        <p className="latest-match-details-label">Umpires</p>
        <p className="latest-match-details-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

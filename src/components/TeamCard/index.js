// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {TeamCradDeatils} = props
  const {id, name, teamImageUrl} = TeamCradDeatils
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamCARDcontainer">
        <img src={teamImageUrl} alt={name} width="100px" height="100px" />
        <p className="teamHeading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

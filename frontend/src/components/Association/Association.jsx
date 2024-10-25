import Core from "./Roles/Core"
import Event from "./Roles/Event"
import Cultural from "./Roles/Cultural"
import Technical from "./Roles/Technical"
import Developer from "./Roles/Developer"
import Sports from "./Roles/Sports"
import Joint from "./Roles/Joint"
import Others from "./Roles/Others"
import "./Association.css"

function Association() {
  return (
    <div id="association">
      <h1 className="title">Clouds Association</h1>
      <main className="clouds-association">
        <Core />
        <Event />
        <Cultural />
        <Technical />
        <Joint />
        <Sports />
        <Others />
        <Developer />
        {/* Others has Placement Co-ordinator and Documentation / Marketing */}
      </main>
    </div>
  )
}

export default Association

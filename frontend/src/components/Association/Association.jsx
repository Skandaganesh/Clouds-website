import Core from "./Roles/Core"
import Event from "./Roles/Event"
import Cultural from "./Roles/Cultural"
import Technical from "./Roles/Technical"
import Sports from "./Roles/Sports"
import Others from "./Roles/Others"
import PlacementAndMarketing from "./Roles/PlacementAndMarketing"
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
        <Sports />
        <Others />
        <PlacementAndMarketing />
      </main>
    </div>
  )
}

export default Association

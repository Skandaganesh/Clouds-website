import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Co-oridnators</p>
        <div className="section divide-2">
          <Profile
            img="Profile/Apeksha L Naik.jpg"
            name="Apeksha L Naik"
            role="Technical Head"
            socials="https://www.linkedin.com/in/apeksha-l-naik/"
          />
          <Profile 
            img="Profile/Ayyan Anwar.jpg"
            name="Ayyan Anwar"
            role="Joint Technical Head"
            socials="https://www.linkedin.com/in/ayyan-anwar-132965204/"
          />
          <Profile
            img="Profile/Adithya c.png"
            name="Adithya C"
            role="Joint Technical Head"
            socials="https://www.linkedin.com/in/adithya-c-871173289/"
          />
        </div>
      </div>
    </div>
  )
}

export default Technical

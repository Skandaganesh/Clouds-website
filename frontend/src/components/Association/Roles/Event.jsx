import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-2">
          <Profile
            img="Profile/tejasNayak.jpg"
            name="Tejas Nayak"
            socials="https://www.linkedin.com/in/blenson-d-souza-7879551ba"
          />
          <Profile 
            img="Profile/Anish_bg.jpeg" 
            name="Anish" 
            socials=""
          />
        </div>
      </div>
    </div>
  )
}

export default Event

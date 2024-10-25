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
            socials="https://www.linkedin.com/in/tejas-nayak-859a231b1/"
          />
          <Profile 
            img="Profile/Anish_bg.jpeg" 
            name="Anish Shetty" 
            socials=""
          />
        </div>
      </div>
    </div>
  )
}

export default Event

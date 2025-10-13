import Profile from "../Profile"

function Event() {
  return (
    <div>
      <div>
        <p className="sub-title">Event Co-ordinators</p>
        <div className="section divide-2">
          <Profile
            img="Profile/Vaishakh A.jpeg"
            name="Vaishakh A"
            role="Event Co-ordinator"
            socials="https://www.linkedin.com/in/vaishakh-arekere/?originalSubdomain=in"
          />
          <Profile
            img="Profile/Hisha.jpg"
            name="Hisha"
            role="Joint Event Co-ordinator"
            socials="https://www.linkedin.com/in/hisha-a010b0288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
      </div>
    </div>
  )
}

export default Event

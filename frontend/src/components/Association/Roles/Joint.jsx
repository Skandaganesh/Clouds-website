import Profile from "../Profile"

function Joint() {
  return (
    <div>
      <div>
        <p className="sub-title">Joint Secretary</p>
        <div className="section divide-2">
          <Profile
            img="Profile/SrishtiRaiM.jpg"
            name="Srishti Rai M "
            role="Joint Secretary"
            socials="https://www.linkedin.com/in/srishti-rai-m-b6092b272"
          />
          <Profile
            img="Profile/ShashankPatil.png"
            name="Shashank Patil"
            role="Joint Secretary"
            socials=""
          />
        </div>
        <p className="sub-title">Joint Treasurer</p>
        <div className="section divide-2">
          <Profile
            img="Profile/SKANDAGANESH.jpg"
            name="Skanda Ganesh P V"
            role="Joint Treasurer"
            socials="https://www.linkedin.com/in/skanda-ganesh"
          />
          <Profile
            img="Profile/KrathiRajesh.jpg"
            name="Krathi"
            role="Joint Treasurer"
            socials="https://www.linkedin.com/in/krathi-rajesh-285947267"
          />
        </div>
      </div>
    </div>
  )
}

export default Joint

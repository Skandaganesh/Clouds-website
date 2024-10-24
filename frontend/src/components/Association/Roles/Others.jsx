import Profile from "../Profile"

function Media() {
  return (
    <div className="clouds-association">
      <div className="divide-2">
        <div>
          <p className="sub-title">Media and Graphics Head</p>
          <div className="section">
          <Profile
            img="Profile/SathwikKrishna.jpeg"
            name="Sathwik Krishna N"
            socials="https://www.linkedin.com/in/sathwik-krishna-7a7630198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          </div>
        </div>

        <div>
          <p className="sub-title">Marketing and Placement</p>
          <div className="section">
            <Profile
              img="Profile/PratheekshaS.jpg"
              name="Pratheeksha S"
              socials="https://www.linkedin.com/in/pratheeksha-s-bangera-8a4a1a22a"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
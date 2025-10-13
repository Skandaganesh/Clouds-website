import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-2">
          <Profile
            img="Profile/AnanthHegde.jpeg"
            name="Ananth Hegde"
            role="Sports Head"
            socials="https://www.linkedin.com/in/ananth-hegde-3b478326a/"
          />
          <Profile
            img="Profile/Meghashree K.jpg"
            name="Meghashree K"
            role="Sports Head"
            socials="https://www.linkedin.com/in/meghashree-k-103893262/"
          />
          <Profile
            img="Profile/Anvesh R Bekal.jpg"
            name="Anvesh R Bekal"
            role="Joint Sports Head"
            socials="https://linkedin.com/in/anvesh-r-bekal-2573a5293"
          />
        </div>
      </div>
    </div>
  )
}

export default Sports

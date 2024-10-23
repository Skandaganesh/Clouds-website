import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-2">
        <Profile
            img="Profile/SanjayGowda.jpeg"
            name="Sanjay Gowda"
            role="Sports Head "
            socials="http://linkedin.com/in/sanjay-gowda-a611b7238"
          />
          <Profile
            img="Profile/SoujanyaRao.jpg"
            name="Soujanya Rao"
            role="Sports Head "
            socials="https://www.linkedin.com/in/soujanya-rao-3b5150229"
          />
        </div>
        <p className="sub-title">Joint Sports Secretary</p>
        <div className="section divide-2">
          <Profile
            img="Profile/AnanthHegde.jpeg"
            name="M Ananth Hegde"
            role="Joint Sports Head "
            socials="https://www.linkedin.com/in/ananth-hegde-3b478326a/"
          />
          <Profile 
            img="Profile/MEGHASHETTY.jpg" 
            name="Meghashree K" 
            role="Joint Sports Head "
            socials="https://www.linkedin.com/in/meghashree-k-103893262/"
          />
        </div>
      </div>
    </div>
  )
}

export default Sports

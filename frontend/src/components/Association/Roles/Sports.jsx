import Profile from "../Profile"

function Sports() {
  return (
    <div>
      <div>
        <p className="sub-title">Sports Secretary</p>
        <div className="section divide-3">
          <Profile
            img="Profile/SoujanyaRao.jpg"
            name="Soujanya Rao"
            role="Sports Head "
            socials="https://www.linkedin.com/in/soujanya-rao-3b5150229"
          />
          <Profile
            img="Profile/SanjayGowda.jpeg"
            name="Sanjay Gowda"
            role="Sports Head "
            socials="http://linkedin.com/in/sanjay-gowda-a611b7238"
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

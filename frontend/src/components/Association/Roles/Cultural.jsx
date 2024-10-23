import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Co-ordinators</p>
        <div className="section divide-3">
          <Profile 
            img="Profile/HamshiniShetty.jpg" 
            name="Hamshini S Shetty" 
            role="Cultural Head" 
            socials="https://www.linkedin.com/in/hamshini-shetty"
          />
          <Profile 
            img="Profile/VageeshBhat.jpg" 
            name="Vageesh Bhat" 
            role="Joint Cultural Head" 
            socials="https://www.linkedin.com/in/shashwath-shetty-004187235"
          />
          <Profile 
            img="Profile/VAISHNAVI.jpg" 
            name="Vaishnavi " 
            role="Joint Cultural Head" 
            socials="http://www.linkedin.com/in/vaishnavi-suvarna-97515226a"
          />
        </div>
      </div>
    </div>
  )
}

export default Cultural

import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="Profile/DrMustafaBasthikodi.jpg"
          role="President"
          name="Dr. Mustafa Basthikodi"
          socials="https://www.linkedin.com/in/dr-mustafa-basthikodi-3b644442"
          extras="HOD of Computer Science"
        />
        <Profile
          img="Profile/prapulla.jpg"
          role="Staff Co-ordinator"
          name="Ms. Prapulla G"
          socials=""
        />
        <Profile
          img="Profile/AdarshRag.jpg"
          role="Staff Co-ordinator"
          name="Dr. Adarsh Rag S"
          socials="https://www.linkedin.com/in/adarsh-rag-s-08791a76/"
        />
      </div>
      <br />
      <div className="section divide-3">
      <Profile
          img="Profile/DeveeshShetty.jpg"
          role="Vice President"
          name="Deveesh Shetty"
          socials="https://www.linkedin.com/in/deveesh-shetty/"
        />
        <Profile
          img="Profile/DeelanLasrado.png"
          role="Secretary"
          name="Deelan Lasrado"
          socials="https://www.linkedin.com/in/deelanlasrado"
        />
        <Profile 
          img="Profile/GaganV.jpg" 
          role="Treasurer" 
          name="Gagan V"
          socials="https://www.linkedin.com/in/gagan-v11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
      </div>
    </div>
  )
}

export default Core

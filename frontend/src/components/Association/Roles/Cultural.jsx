import Profile from "../Profile"

function Cultural() {
  return (
    <div>
      <div>
        <p className="sub-title">Cultural Co-ordinators</p>
        <div className="section divide-3">
          <Profile 
            img="Profile/VageeshBhat.jpg"
            name="Vageesh Bhat"
            role="Cultural Head"
            socials="https://www.linkedin.com/in/vageesh-bhat-bb2495237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <Profile
            img="Profile/ShreelakshmiPai.jpg"
            name="Shreelakshmi Pai"
            role="Cultural Head"
            socials="https://www.linkedin.com/in/shreelakshmi-pai-a14113256"
          />
          <Profile 
            img="Profile/Srajan Kumar Shetty.webp"
            name="Srajan Kumar Shetty"
            role="Joint Cultural Head"
            socials="https://www.linkedin.com/in/srajan-kumar-shetty-718231325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          
          <Profile
            img="Profile/Prajna Bhat.jpg"
            name="Prajna Bhat"
            role="Joint Cultural Head"
            socials="https://www.linkedin.com/in/prajna-bhat-522148293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
      </div>
    </div>
  )
}

export default Cultural

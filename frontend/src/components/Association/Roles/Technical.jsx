import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Co-oridnators</p>
        <div className="section divide-3">
        <Profile
            img="Profile/Chethan.jpeg"
            name="Maroor Chethan Pai"
            role="Technical Lead"
            socials="http://linkedin.com/in/chethanpai21"
          />
          <Profile
            img="Profile/ShreelakshmiPai.jpg"
            name="Shreelakshmi Pai"
            role="Joint Technical Head"
            socials="https://www.linkedin.com/in/shreelakshmi-pai-a14113256"
          />
          <Profile 
            img="Profile/VaishakhKottari.jpeg" 
            name="Vaishakh A"
            role="Joint Technical Head"
            socials="https://in.linkedin.com/in/vaishakh-arekere" 
          />
        </div>
      </div>
    </div>
  )
}

export default Technical

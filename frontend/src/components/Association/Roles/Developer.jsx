import Profile from "../Profile"

function Developer() {
  return (
    <div>
      <div>
        <p className="sub-title">Web Developers</p>
        <div className="section divide-2">
          <Profile
            img="Profile/HimanshuShetty.jpg"
            name="Himanshu Shetty"
            socials="https://in.linkedin.com/in/himanshu-shetty"
          />
          <Profile
            img="Profile/PratheekGShetty.jpg"
            name="Pratheek G Shetty"
            socials="https://in.linkedin.com/in/techshetty"
          />
        </div>
      </div>
    </div>
  )
}

export default Developer

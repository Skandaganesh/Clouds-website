function Profile({ img, name, role, extras, socials }) {
  return (
    <div className="profile-card">
      <a href={socials} target="_blank" className="profile-image-link">
        <img
          src={img}
          alt={role ? `${name} - ${role}` : name}
          loading="lazy"
          className="profile-image"
        />
      </a>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
        <p className="profile-extras">{extras}</p>
      </div>
    </div>
  );
}

export default Profile;

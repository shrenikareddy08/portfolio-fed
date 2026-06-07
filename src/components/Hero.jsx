const Hero = ({ name, role, image }) => {
  return (
    <div className="hero">
      <img src={image} alt="profile" className="profile-img" />
      <h1 className="name">{name}</h1>
      <p className="role">{role}</p>
    </div>
  )
}

export default Hero
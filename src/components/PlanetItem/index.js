import './index.css'

const PlanetItem = props => {
  const {planetData} = props
  const {name, imageUrl, description} = planetData

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  )
}

export default PlanetItem

// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planets} = props
  const {name, description, imageUrl} = planets
  return (
    <div className="planet">
      <h1>{name}</h1>
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem

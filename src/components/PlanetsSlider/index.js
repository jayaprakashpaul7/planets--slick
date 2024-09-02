import './index.css'

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    infinite: true,
    slidesToShow: 1,
  }

  return (
    <div data-testid="planets" className="slide-c">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planets={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetSlider

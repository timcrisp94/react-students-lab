import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api'
import { useLocation } from 'react-router-dom'


const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return ( 
    <>
      <p>fart</p>

    
    </>

   );
}
 
export default StarshipPage;
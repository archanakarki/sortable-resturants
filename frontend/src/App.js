import React, {useState} from 'react';
import Resturant from './Components/Resturant'
import Data from './data.json';
import './App.css';
import HeroImage from './Components/HeroImage'
import Button from './Components/Button'

/*  Step 1 : Extract values from resturants Object from original data.json file 
    Step 2 : Set state for resturants 
    Step 3 : Execute ascending, descending and original sorting  function

    'resturants' is  array of objects that contains (name, city, delivery price .....) of resturants
*/
const App = () => {  
  const data = Object.values(Data)[0]
  const [resturants, setResturants] = useState([...data])

  /* --- Ascending order sorting --- */
  const sortAZ = () => {
    const ascCompare = (first,second) => {
      const a = first.name
      const b = second.name

      if(a > b){
        return 1
      } else if(a < b){
        return -1
      } else {
        return 0
      }
    }
    setResturants(prevState => [...prevState].sort(ascCompare))
  }

  /* --- Descending order sorting --- */
  const sortZA = () => {
    const dscCompare = (first,second) => {
      const a = first.name
      const b = second.name

      if(a < b){
        return 1
      } else if(a > b){
        return -1
      } else {
        return 0
      }
    }
    setResturants(prevState => [...prevState].sort(dscCompare))
  }

  /* --- Return to original state --- */
  const returnOriginal = () => {
    setResturants([...data])
  }

  return(
    <div className="App">
        <h1 className="App-header">Resturants</h1>
        <HeroImage resturants={[...data]}/>

        <div className="App-buttons">
          <Button name={'Sort A-Z'} task={sortAZ}/>
          <Button name={'Sort Z-A'} task={sortZA}/>
          <Button name={'Original'} task={returnOriginal}/>
        </div>
    
        <div className="App-resturants row">
          {resturants.map((resturant,i) => <Resturant key={i} resturant={resturant}/>)}
        </div>
    </div>
  )
}

export default App
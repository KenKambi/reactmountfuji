import Navbar from "./Navbar"
import Sites from "./Sites"
import destinations from "./data.js"

function App() {

  const data = destinations.map(function (destination){
    return <Sites key={destination.name} destination={destination}/>
  })
  

  return (
    <>
      <Navbar />
      {data}
    </>
  )
}

export default App

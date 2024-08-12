import Router from "./routes/Router"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="bg-primary-100 min-h-screen ">
    <NavBar/>
      <Router/>
    </div>
  )
}

export default App

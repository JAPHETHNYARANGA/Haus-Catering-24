import './App.css'
import NavbarComponent from './components/Global/navbar/navbar'
import NavigationComponent from './navigation'




function App() {


  return (
    <>
    <div className="navbar">
      <NavbarComponent />
    </div>
     <div className="body">
     <NavigationComponent />
     </div>
     
    
    </>
  )
}

export default App

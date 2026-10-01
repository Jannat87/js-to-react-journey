import {Outlet, Link} from 'react-router-dom';

function App() {
  let name = 'Fatema Jannat';

  return (
    <>
      <h1>{name}</h1>
      <nav style={{margin:"20px;"}}>
        <Link 
          style={{ border: "1px solid black", margin: "3px 10px" }} 
          to="/">
          Home
        </Link>
        <Link 
          style={{ border: "1px solid black", margin: "3px 10px" }} 
          to="/about">
          About
        </Link>
      </nav>
      <main>
        <Outlet context={name}/>
      </main>
    </>
  )
}

export default App

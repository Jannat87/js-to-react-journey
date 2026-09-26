import { useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let name = 'Fatema Information';
  let Fatema = {
    name: 'Fatema Jannat',
    address: 'Dhaka.'
  }
async function getProduct() {
 const response = await axios.get(
 "https://health-api.phicsart.com/api/doctors/public"
);
  console.log('resp:', response.data.meta.current_page);
  const product = response.data;

  console.log('__dataLoaded: ', product);
}

useEffect(() => {
alert('vute coming..');
getProduct();
}, []);

  return (
    <>
      <h1>{name}</h1>
      <p>Name: {Fatema.name}</p>
      <p>Address: {Fatema.address}</p>
    </>
  )
}

export default App

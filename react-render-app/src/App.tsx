import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

{/* Variable থেকে Data Rendering */}
  let name = 'Fatema Jannat';
  let address = 'Dhaka.'

{/* Number Data Rendering */}
  let price1 = 500;
{/* Expression Rendering */}
  let price2 = 500;
  let quantity = 3;
{/* Object Data Rendering */}
  let user = {
    name: "Jannat",
    age: 25,
    city: "Dhaka"
  };
{/* Array Data Rendering */}
let fruits = ["Apple", "Mango", "Banana"];

{/* Array of Objects Rendering */}
let users = [
  {
    id: 1,
    name: "Jannat",
    age: 25
  },
  {
    id: 2,
    name: "Rahim",
    age: 30
  },
  {
    id: 3,
    name: "Karim",
    age: 28
  }
];

{/* Conditional Rendering */}
  let isLoggedIn = true;

{/* && দিয়ে Conditional Rendering */}
  let isAdmin = true;

{/* Function-এর Return করা Data Rendering */}
function getName() {
  return "Jannat";
}

{/* State Data Rendering */}
  const [count, setCount] = useState(0)

{/* Loading Data Rendering */}
  const [loading, setLoading] = useState(true);

{/* Empty Data Rendering */}


  return (
    <>
      <h1>Data Rendering</h1>
{/* Variable থেকে Data Rendering */}
      <p>Name: {name}</p>
      <p>Address: {address}</p>

{/* String Data Rendering */}
      <h1>Hello string data rendering</h1>

{/* Number Data Rendering */}
      <h2>Price: {price1} Tk</h2>

{/* Expression Rendering */}
      <h2>Total: {price2 * quantity} Tk</h2>

{/* Object Data Rendering */}
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>


{/* Array Data Rendering */}
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>

{/* Array of Objects Rendering */}

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}

{/* Conditional Rendering */}
      {isLoggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}

{/* && দিয়ে Conditional Rendering */}
      <h2>Dashboard</h2>

      {isAdmin && <button>Admin Panel</button>}

{/* Function-এর Return করা Data Rendering */}
      <h2>Hello {getName()}</h2>

{/* Props থেকে Data Rendering */}
{/* <User name="Jannat" age={25} />

function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
} */}

{/* State Data Rendering */}
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
{/* API Data Rendering */}

{/* Loading Data Rendering */}
  {loading ? (
    <p>Loading...</p>
      ) : (
  <p>Data Loaded</p>
    )}
{/* Empty Data Rendering */}

    </>
  )
}

export default App

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Product from './Product';
import Header from './Header/Header';
import { FaAtlassian } from "react-icons/fa";
function App() {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID ="7a4c96ee";
  const YOUR_APP_KEY ="2a2b964c19acd8a692bfd4e406e9259b"
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
  response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <Header />
      <center>
        <h2 className='mt-5'>FOOD RECIPE</h2>
        <form onSubmit={submitHandler}>
          <input className="bg-light border-dark" type="text"  value={search} onChange={(e)=>setSearch(e.target.value)}/><br />
          <input className="m-2 btn btn-primary " type="submit" value="Search"/>
        </form>
        {data.length>=1 ? <Product data={data}/>:null}
      </center>
      <FaAtlassian />
    </div>
  );
}

export default App;

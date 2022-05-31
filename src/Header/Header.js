import React from 'react';
import {useState} from 'react';
import Product from "../Product/Product";
import {Link} from 'react-router-dom';
function Header() {
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
       <h1 className='hire'>Dileep Restaurant</h1>
       <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt='' className='muneer' />
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <Link className="nav-link text-white h2" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-link">
          <Link className="nav-link text-white h2 " to="food items">Food Items</Link>
        </li>
      </ul>
      <div className='mass'>
          <form onSubmit={submitHandler} >
          <input className="bg-light border-dark rounded-4" type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
          <input className="m-2 btn btn-primary rounded-4" type="submit" value="Search"/>
        </form>
        </div>
        <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active text-white me-5 h3" aria-current="page" to="login">Login</Link>
        </li>
      </ul>
        </div>
    </div>
  </div>
</nav>
{data.length>=1 ? <Product data={data}/>:null}

</div>
  )
}

export default Header;
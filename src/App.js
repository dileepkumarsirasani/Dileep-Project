import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header/Header';
import Carousel from './Carousal/Carousel'
import Footer from './Footer/Footer';
import RouterComponent from './Route/RouteComponent';
function App() {
  
  return (
    <div>
      {/* <Header /> */}
      <RouterComponent />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

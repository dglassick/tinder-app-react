import './App.css';
import Header from './Components/Header/Header';
import TinderCard from './Components/TinderCards/TinderCards';

function App() {
  return (
    //BEM naming
    <div className='app'>
      <Header />
      <TinderCard />
      {/* SwipeButton */}
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import TinderCard from './Components/TinderCards/TinderCards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';

function App() {
  return (
    //BEM naming
    <div className='app'>
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;

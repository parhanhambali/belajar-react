import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superhero'

import './style/LandingPage.css';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end section */}

      {/* Trending Section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End Trending Section */}

      {/* Superhero Section */}
      <div className='superhero'>
        <Superhero />
      </div>
    </div>
  );
}

export default App;

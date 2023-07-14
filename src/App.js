import './App.css';
import Hero from './components/Herosection/Hero';
import Program from './components/Herosection/Programs/Program';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Program />
      <Reasons />
    </div>
  );
}

export default App;

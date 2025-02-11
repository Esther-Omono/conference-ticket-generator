import Navbar from './components/Navbar';
import { Outercard } from './components/Outercard';

function App() {
  return (
    <div className='bg-[#02191D] bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)] w-full h-screen py-6'>
      <div className='max-w-5xl mx-auto'>
        <Navbar />
        <Outercard />
      </div>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import { OuterCard } from './components/OuterCard';
import { TicketProvider } from './context/FormContext';

function App() {
  return (
    <div className=' bg-[#02191D] bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)] w-full h-[1180px] px-4 py-4 sm:py-6'>
      <div className='w-full max-w-5xl mx-auto'>
        <Navbar />
        <TicketProvider>
          <OuterCard />
        </TicketProvider>
      </div>
    </div>
  );
}

export default App;

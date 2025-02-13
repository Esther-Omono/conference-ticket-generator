import { Attendeedetails } from './Attendeedetails';
import { useTicket } from '../context/FormContext';
import { Ticketselection } from './Ticketselection';
import { Ticketready } from './Ticketready';

export const Outercard = () => {
  const { step } = useTicket();

  const stepTitles = {
    1: 'Ticket Selection',
    2: 'Attendee Details',
    3: 'Ticket Ready',
  };

  return (
    <div className='w-full max-w-[600px] h-[960px] px-4 sm:px-7 py-3 bg-[#041e22] rounded-xl sm:rounded-2xl border border-[#0e464f] mx-auto mt-3 sm:mt-5'>
      <div className='flex justify-between items-center -mb-2 py-2'>
        <div className='flex-1'>
          <h2 className='text-white text-lg sm:text-[20px] font-[JejuMyeongjo]'>
            {stepTitles[step]}
          </h2>
        </div>
        <p className='text-neutral-50 text-xs leading-normal ml-4 font-[Roboto]'>
          Step {step}/3
        </p>
      </div>
      <div className='w-full h-1 bg-[#0E464F] relative mb-4'>
        <div
          className='h-full bg-[#24A0B5] transition-all duration-300 ease-in-out'
          style={{
            width: `${(step / 3) * 100}%`,
            borderRadius: '0 2px 2px 0',
          }}
        />
      </div>
      <div className='w-full'>
        {step === 1 && <Ticketselection />}
        {step === 2 && <Attendeedetails />}
        {step === 3 && <Ticketready />}
      </div>
    </div>
  );
};

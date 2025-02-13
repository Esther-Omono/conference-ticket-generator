import { Attendeedetails } from './AttendeeDetails';
import { useTicket } from '../context/FormContext';
import Ticketselection from './Ticketselection';
import { Ticketready } from './Ticketready';

export const Outercard = () => {
  const { step } = useTicket();

  return (
    <div className='w-full max-w-[600px] px-4 sm:px-7 py-3 bg-[#041e22] rounded-xl sm:rounded-2xl border border-[#0e464f] mx-auto mt-3 sm:mt-5'>
      <div className='flex justify-between items-center -mb-2 py-2'>
        <div className='flex-1'>
          <h2 className='text-white text-lg sm:text-[20px] font-[JejuMyeongjo]'>
            Attendee Details
          </h2>
        </div>
        <p className='text-neutral-50 text-xs leading-normal ml-4 font-[Roboto]'>
          Step {step}/3
        </p>
      </div>
      <div className='w-full overflow-hidden'>
        <svg
          className='w-full'
          viewBox='0 0 604 4'
          fill='none'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z'
            fill='#0E464F'
          />
          <path
            d={`M0 2C0 0.895431 0.895431 0 2 0H${(step / 3) * 602}C${
              (step / 3) * 602 + 1.105
            } 0 ${(step / 3) * 602 + 2} 0.895431 ${(step / 3) * 602 + 2} 2C${
              (step / 3) * 602 + 2
            } 3.10457 ${(step / 3) * 602 + 1.105} 4 ${
              (step / 3) * 602
            } 4H2.00001C0.895436 4 0 3.10457 0 2Z`}
            fill='#24A0B5'
          />
        </svg>
      </div>
      <div className='w-full'>
        {step === 1 && <Ticketselection />}
        {step === 2 && <Attendeedetails />}
        {step === 3 && <Ticketready />}
      </div>
    </div>
  );
};

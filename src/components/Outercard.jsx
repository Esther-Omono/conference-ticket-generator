import { Attendeedetails } from './AttendeeDetails';
import { useTicket } from '../context/FormContext';
import Ticketselection from './Ticketselection';
import { Ticketready } from './Ticketready';

export const Outercard = () => {
  const { step } = useTicket();

  return (
    <div className='w-[600px] px-7 py-3 bg-[#041e22] rounded-2xl border border-[#0e464f] mx-auto mt-5'>
      <div className='h-12 flex justify-between items-center -mb-2'>
        <div className='grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex'>
          <h2 className='self-stretch text-white text-[20px] font-[JejuMyeongjo]'>
            Attendee Details
          </h2>
        </div>
        <p className='text-neutral-50 text-xs leading-normal'>Step 2/3</p>
      </div>
      <div data-svg-wrapper>
        <svg
          width='545'
          height='4'
          viewBox='0 0 604 4'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z'
            fill='#0E464F'
          />
          <path
            d='M0 2C0 0.895431 0.895431 0 2 0H324C325.105 0 326 0.895431 326 2C326 3.10457 325.105 4 324 4H2.00001C0.895436 4 0 3.10457 0 2Z'
            fill='#24A0B5'
          />
        </svg>
      </div>
      {step === 1 && <Ticketselection />}
      {step === 2 && <Attendeedetails />}
      {step === 3 && <Ticketready />}
    </div>
  );
};

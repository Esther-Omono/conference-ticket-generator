import { useTicket } from '../context/FormContext';
import bg from '../assets/Subtract.png';
import JsBarcode from 'jsbarcode';
import { useEffect } from 'react';

export const Ticketready = () => {
  /* Destructuring the useContetxt() */
  const { resetData, data } = useTicket();

  useEffect(() => {
    JsBarcode('#barcode', '123456789012', { format: 'CODE128' });
  }, []);

  const formatSpecialRequest = (text) => {
    if (!text) return 'Nil';
    const words = text.split(' ');
    if (words.length > 24) {
      // Roughly 3 lines of text
      return words.slice(0, 24).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className='p-3 w-full max-w-md mx-auto'>
      <div className='flex flex-col justify-center items-center p-4 gap-2'>
        <h1 className='text-center text-white text-xl sm:text-2xl font-normal font-[Alatsi]'>
          Your Ticket is Booked!
        </h1>
        <p className='text-center text-neutral-50 text-xs sm:text-sm font-normal font-[Roboto] leading-normal'>
          Check your email for a copy or you can{' '}
          <span className='text-neutral-50 font-bold '>
            <a href='#'>download</a>
          </span>
        </p>
      </div>

      <div className='relative z-10 my-2.5 h-[600px] mx-auto w-full pt-3'>
        <img
          src={bg}
          alt='background vector'
          className='absolute z-20 left-0 right-0 top-0 w-full h-full'
        />
        <div className='w-full sm:w-[260px] rounded-2xl border border-[#23a0b5] flex flex-col justify-start items-center text-center mx-auto gap-3 relative z-30'>
          <div className='w-full p-4 flex flex-col gap-1'>
            <h2 className="text-white text-4xl sm:text-[45px]font-normal font-['Road_Rage'] leading-[34px]">
              Techember Fest &quot;25
            </h2>
            <p className="text-white text-[10px] sm:text-xs font-normal font-['Roboto'] leading-[15px]">
              📍 04 Rumens road, Ikoyi, Lagos
            </p>
            <p className="text-white text-[10px] sm:text-xs font-normal font-['Roboto'] leading-[15px]">
              📅 March 15, 2025 | 7:00 PM
            </p>
          </div>

          {data.image ? (
            <img
              className='w-[140px] h-[140px] rounded-xl border-4 border-[#23a0b5]/50 object-cover'
              src={data.image}
              alt="Attendee's Image"
            />
          ) : (
            <div className='w-[140px] h-[140px] rounded-xl border-4 border-[#23a0b5]/50 bg-[#07333c] flex items-center justify-center'>
              <p className="text-white text-xs font-normal font-['Roboto']">
                No Image
              </p>
            </div>
          )}

          <div className='w-[calc(100%-1.75rem)] h-45 p-1.5 bg-[#07333c] rounded-lg border border-[#123d43] flex-col justify-center items-center inline-flex mx-3.5 mb-3.5'>
            <div className='-mb-1 border-b border-[#12464e] justify-start items-center gap-2 w-full'>
              <div className='p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex w-1/2'>
                <p className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  Your Name
                </p>
                <p className="text-white text-[10px] font-bold font-['Roboto'] leading-[18px]">
                  {data.name || 'N/A'}
                </p>
              </div>

              <div className='p-1 flex-col justify-center items-start gap-1 inline-flex w-1/2'>
                <p className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  Your Email
                </p>
                <p className="text-white text-[10px] font-bold font-['Roboto'] truncate leading-[18px]">
                  {data.email || 'N/A'}
                </p>
              </div>
            </div>

            <div className='border-b border-[#12464e] justify-start items-center gap-2 w-full'>
              <div className='p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex w-1/2'>
                <p className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  Ticket Type
                </p>
                <p className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  {data.tickets[0]?.ticket || 'N/A'}
                </p>
              </div>

              <div className='p-1 flex-col justify-center items-start gap-1 inline-flex w-1/2'>
                <p className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  Ticket For
                </p>
                <p className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  {data.tickets[0]?.quantity || 'N/A'}
                </p>
              </div>
            </div>

            <div className='p-2 flex flex-col gap-1 text-left'>
              <p className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                Special request?
              </p>
              <p className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                {formatSpecialRequest(data.specialRequest)}
              </p>
            </div>
          </div>
        </div>
        <svg
          id='barcode'
          className='relative z-20 max-w-4xl w-full h-20 mt-6'
        ></svg>
      </div>

      <div className='mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full '>
        <button
          onClick={resetData}
          className='w-full sm:w-1/2 rounded-lg border border-[#23a0b5] py-2 text-[#23a0b5] text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-[#23a0b5] hover:text-white'
        >
          Book Another Ticket
        </button>
        <button className='w-full sm:w-1/2 bg-[#23a0b5] rounded-lg text-white py-2 text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-transparent hover:border hover:text-[#23a0b5]'>
          Download Ticket
        </button>
      </div>
    </div>
  );
};

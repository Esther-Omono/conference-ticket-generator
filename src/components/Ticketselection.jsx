import { useTicket } from '../context/FormContext';

const TicketSelection = () => {
  /* Destructuring the useContetxt() */
  const { nextStep, data, setData } = useTicket();

  const ticketOption = [
    { ticket: 'Free', access: 'Regular Access', number: '20/52' },
    { ticket: '$150 VIP', access: 'VIP Access', number: '20/52' },
    { ticket: '$150 VVIP', access: 'VVIP Access', number: '20/52' },
  ];

  const handleSelection = (selectedTicket) => {
    setData((prev) => ({
      ...prev,
      tickets: [
        { ...selectedTicket, quantity: prev.tickets[0]?.quantity || 1 },
      ],
    }));
  };

  const handleChange = (e) => {
    const quantity = parseInt(e.target.value);
    setData((prev) => ({
      ...prev,
      tickets:
        prev.tickets.length > 0
          ? [{ ...prev.tickets[0], quantity }]
          : [{ ticket: '', access: '', number: '', quantity }],
    }));
  };

  //   const handleKeySelection = (e, selectedTicket) => {
  //     if (e.key === 'Enter' || e.key === ' ') {
  //       handleSelection(selectedTicket);
  //     }
  //   };

  const NextStep = (e) => {
    e.preventDefault();
    if (data.tickets.length > 0) {
      nextStep();
    }
  };

  return (
    <div className='p-4 sm:p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] my-4 sm:my-7'>
      <div className='border border-[rgb(14,70,78)] rounded-2xl p-4 sm:p-6 min-h-[200px] bg-[radial-gradient(ellipse_at_top_left,rgba(36,160,181,0.1)_0%,rgba(36,160,181,0.2)_30%,rgba(36,160,181,0)_100%)]'>
        <div className='flex flex-col gap-4'>
          <h1 className=' text-center text-neutral-50 text-[40px] sm:text-[62px] font-normal font-[Road_Rage]'>
            Techember Fest &quot;25
          </h1>
          <p className='text-center text-neutral-50 text-sm sm:text-base font-normal leading-normal font-[Roboto] '>
            Join us for an unforgettable experience at
            <span>
              <br />
            </span>
            HNG12! Secure your spot now.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center'>
            <p className='text-neutral-50 text-sm sm:text-base font-normal leading-normal font-[Roboto]'>
              📍 Lagos
            </p>
            <p className='hidden sm:block text-neutral-50 text-base font-normal leading-normal font-[Roboto]'>
              | |
            </p>
            <p className='text-neutral-50 text-sm sm:text-base font-normal leading-normal font-[Roboto]'>
              March 15, 2025 | 7:00 PM
            </p>
          </div>
        </div>
      </div>

      <hr className='my-4 sm:my-6 text-[#07373f] border-2 border-[#07373f]' />

      <p className='mb-2 text-white font-[Roboto]'>Select Ticket Type:</p>

      <div className='w-full p-4 bg-[#042127] rounded-2xl border border-[#07363e] flex flex-col sm:flex-row justify-center items-center gap-4'>
        {ticketOption.map((option) => {
          return (
            <button
              key={option.ticket}
              className={`w-full sm:w-[140px] p-2.5 rounded-xl border-2 ${
                data.tickets[0]?.ticket === option.ticket
                  ? 'bg-[#12464e] border-[#064c4f]'
                  : 'border-[#064c4f]'
              } text-left flex flex-col sm:flex-col justify-between sm:justify-start items-start gap-4`}
              onClick={() => handleSelection(option)}
            >
              <p className='text-white text-lg sm:text-xl font-semibold font-[Roboto]'>
                {option.ticket}
              </p>

              <div className='flex flex-col justify-center items-start'>
                <p className='text-neutral-50 text-base sm:text-sm font-normal uppercase font-[Roboto]'>
                  {option.access}
                </p>
                <p className='text-[#d9d9d9] text-base sm:text-sm font-normal font-[Roboto]'>
                  {option.number}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className='mt-5 flex flex-col gap-2 w-full'>
        <label className="text-neutral-50 text-sm sm:text-base font-normal font-['Roboto'] leading-normal">
          Number of Tickets:
        </label>
        <select
          className='w-full p-3 rounded-xl border text-white border-[#07363e] bg-transparent text-sm sm:text-base font-[Roboto]'
          value={data.tickets[0]?.quantity || 1}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <option key={num} value={num} className='text-white bg-[#042127]'>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className='mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full'>
        <button className='w-full sm:w-1/2 rounded-lg border border-[#23a0b5] py-2 text-[#23a0b5] text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-[#23a0b5] hover:text-white'>
          Cancel
        </button>
        <button
          onClick={NextStep}
          className='w-full sm:w-1/2 bg-[#23a0b5] rounded-lg text-white py-2 text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-transparent hover:border hover:text-[#23a0b5]'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;

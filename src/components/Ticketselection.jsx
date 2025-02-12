const Ticketselection = () => {
  const ticketOption = [
    { ticket: 'Free', access: 'Regular Access', number: '20/52' },
    { ticket: '$150 VIP', access: 'VIP Access', number: '20/52' },
    { ticket: '$150 VVIP', access: 'VVIP Access', number: '20/52' },
  ];

  return (
    <div className='p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] my-7'>
      <div className='border border-[#0e464e] rounded-2xl p-6 h-[200px] bg-[radial-gradient(103.64%_57.39%_at_14.02%_32.06%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%),rgba(10,12,17,0.1)]'>
        {/* TODO: Work on the fonts road rage and roboto */}
        <div className='flex flex-col gap-4'>
          <h1 className=' text-center text-neutral-50 text-[30px] font-normal font-[Road Rage]'>
            Techember Fest &quot;25
          </h1>
          <p className='text-center text-neutral-50 text-base font-normal leading-normal'>
            Join us for an unforgettable experience at
            <span>
              <br />
            </span>
            HNG12! Secure your spot now.
          </p>
          <div className='justify-center items-center gap-4 flex text-center'>
            <p className='text-neutral-50 text-base font-normal leading-normal'>
              📍 Lagos
            </p>
            <p className='text-neutral-50 text-base font-normal leading-normal'>
              | |
            </p>
            <p className='text-neutral-50 text-base font-normal leading-normal'>
              March 15, 2025 | 7:00 PM
            </p>
          </div>
        </div>
      </div>

      <hr className='my-6 text-[#07373f] border-2 border-[#07373f]' />

      <div className='h-[142px] w-full p-4 bg-[#042127] rounded-2xl border border-[#07363e] flex-row justify-center items-center gap-4 inline-flex'>
        {ticketOption.map(({ ticket, access, number }) => {
          return (
            <button
              key={ticket}
              className='w-[140px] h-[110px] flex flex-col gap-4 p-3 rounded-xl border-2 border-[#197686] text-left'
            >
              <p className='text-white text-xl font-semibold'>{ticket}</p>

              <div className='flex-col justify-center items-start flex '>
                <p className='text-neutral-50 text-sm font-normal uppercase'>
                  {access}
                </p>
                <p className='text-[#d9d9d9] text-sm font-normal'>{number}</p>
              </div>
            </button>
          );
        })}
      </div>
      {/* TODO: text color for options */}
      <div className='h-28 flex-col justify-start items-start gap-2 flex w-full mt-5'>
        <label className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          Number of Tickets:
        </label>
        <select className='w-full p-3 rounded-xl border text-white border-[#07363e] justify-center items-center inline-flex'>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            1
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            2
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            3
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            4
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            5
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            6
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            7
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            8
          </option>
          <option className="text-white text-base font-normal font-['Roboto'] leading-normal">
            9
          </option>
        </select>
      </div>

      <div className='h-12 justify-end items-end gap-6 flex w-full'>
        <button className='rounded-lg border border-[#23a0b5] py-3 text-[#23a0b5] w-1/2 text-base font-normal font-[JejuMyeongjo] leading-normal'>
          Cancel
        </button>
        <button className='bg-[#23a0b5] rounded-lg text-white py-3 w-1/2 text-base font-normal font-[JejuMyeongjo] leading-normal'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Ticketselection;

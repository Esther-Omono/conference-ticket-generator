import { CloudDownload, Mail } from 'lucide-react';

export const Attendeedetails = () => {
  return (
    <div className='p-4 sm:p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] my-4 sm:my-7'>
      <div className='w-full sm:w-[495px] h-[250px] px-3 sm:px-5 pt-4 pb-8 sm:pb-12 bg-[#042127] rounded-2xl border border-[#07363e]  flex flex-col justify-start items-start gap-8 sm:gap-8 relative z-10'>
        <h2 className='w-full text-neutral-50 text-sm font-normal leading-normal'>
          Upload Profile Photo
        </h2>
        <div className='w-full relative flex justify-center items-center min-h-[160px] sm:h-[200px] bg-black/20'>
          <div className='w-[140px] sm:w-[180px] h-[160px] sm:h-[180px] p-4 sm:p-6 bg-[#0e464e] rounded-[24px] sm:rounded-[32px] border-4 border-[#23a0b5]/50 flex flex-col justify-center items-center gap-4'>
            <CloudDownload className='text-white w-8 h-8 sm:w-10 sm:h-10' />
            <p className='text-center text-neutral-50 text-xs sm:text-sm leading-normal px-2'>
              Drag & drop or click to upload
            </p>
          </div>
        </div>
      </div>

      <hr className='my-4 text-[#07373f] border-2 border-[#07373f]' />

      {/* TODO: Fix the input focus and placeholder padding? Import Roboto font */}
      <form className='space-y-4'>
        <div className=' w-full flex flex-col gap-2 '>
          <label className=' text-neutral-50 text-sm font-normal leading-normal'>
            Enter your name
          </label>
          <input
            className='w-full px-3 py-2 rounded-xl border border-[#07373f] bg-transparent text-white text-sm sm:text-base font-normal focus:outline-none focus:border-[#23a0b5]'
            required
          />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label className='text-neutral-50 text-sm font-normal leading-normal'>
            Enter your email *
          </label>
          <input
            className='relative w-full px-10 py-2 rounded-xl border border-[#07373f] bg-transparent text-white text-sm sm:text-base font-normal focus:outline-none focus:border-[#23a0b5]'
            required
            placeholder='hello@avioflagos.io'
          />
          <Mail className='absolute left-[500px] sm:left-[450px] top-[625px] w-5 h-5 text-gray-400' />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label className='text-neutral-50 text-sm leading-normal'>
            Special request?
          </label>
          <textarea className='w-full h-[120px] p-3 rounded-xl border border-[#07363e] bg-transparent text-white text-sm sm:text-base focus:outline-none focus:border-[#23a0b5]'></textarea>
        </div>

        <div className='mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full'>
          <button className='w-full sm:w-1/2 rounded-lg border border-[#23a0b5] py-2 text-[#23a0b5] text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-[#23a0b5] hover:text-white'>
            Back
          </button>
          <button className='w-full sm:w-1/2 bg-[#23a0b5] rounded-lg text-white py-2 text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-transparent hover:border hover:text-[#23a0b5]'>
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

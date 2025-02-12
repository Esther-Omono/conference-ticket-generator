import { CloudDownload } from 'lucide-react';

export const Attendeedetails = () => {
  return (
    <div className='p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] my-7'>
      <div className='w-[495px] h-[250px] px-5 pt-4 pb-12 bg-[#042127] rounded-2xl border border-[#07363e]  flex-col justify-start items-start gap-8 inline-flex relative z-10'>
        <h2 className='text-center text-neutral-50 text-sm font-normal leading-normal'>
          Upload Profile Photo
        </h2>
        <div className='self-stretch h-[200px] bg-black/20 justify-center items-center gap-2.5 inline-flex relative z-20'>
          <div className='w-[180px] h-[180px] p-6 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50 flex-col justify-center items-center gap-4 inline-flex absolute'>
            <CloudDownload className='text-white' />
            <p className='self-stretch text-center text-neutral-50 text-sm leading-normal'>
              Drag & drop or click to upload
            </p>
          </div>
        </div>
      </div>

      <hr className='my-4 text-[#07373f] border-2 border-[#07373f]' />

      {/* TODO: Fix the input focus and placeholder padding? Import Roboto font */}
      <form className='space-y-4'>
        <div className=' w-full flex-col justify-start items-start gap-2 flex'>
          <label className=' text-neutral-50 text-sm font-normal leading-normal'>
            Enter your name
          </label>
          <input
            className='border border-[#07373f] text-white text-base font-normal px-2.5 py-1.5 w-full rounded-xl'
            required
          />
        </div>

        <div className='self-stretch flex-col justify-start items-start gap-2 flex'>
          <label className='self-stretch text-neutral-50 text-sm font-normal leading-normal'>
            Enter your email *
          </label>
          <input
            className='border border-[#07373f] text-white text-base font-normal px-2.5 py-1.5 w-full rounded-xl'
            required
            placeholder='hello@avioflagos.io'
          />
        </div>

        <div className='self-stretch h-[159px] flex-col justify-start items-start gap-2 flex'>
          <label className='self-stretch text-neutral-50 text-sm leading-normal'>
            Special request?
          </label>
          <textarea className='self-stretch h-[127px] p-3 rounded-xl border border-[#07363e] justify-start items-start gap-2 inline-flex'></textarea>
        </div>

        <div className='h-12 justify-end items-end gap-6 flex w-full'>
          <button className='rounded-lg border border-[#23a0b5] py-3 text-[#23a0b5] w-1/2 text-base font-normal font-[JejuMyeongjo] leading-normal'>
            Back
          </button>
          <button className='bg-[#23a0b5] rounded-lg text-white py-3 w-1/2 text-base font-normal font-[JejuMyeongjo] leading-normal'>
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

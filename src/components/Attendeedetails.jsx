import { CloudDownload } from 'lucide-react';

export const Attendeedetails = () => {
  return (
    <div className='p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] mt-5'>
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
    </div>
  );
};

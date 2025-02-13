import { CloudDownload, Mail } from 'lucide-react';
import { useTicket } from '../context/FormContext';
import { useState } from 'react';

export const Attendeedetails = () => {
  /* Destructuring the useContetxt() */
  const { prevStep, nextStep, data, setData } = useTicket();
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  /*Handling input change for the inputs */
  const InputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle file upload */
  const FileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');

      const response = await fetch(import.meta.env.VITE_CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const imageData = await response.json();
      console.log('Uploaded Image URL:', imageData.secure_url); // Remove before final push

      // Save uploaded image link in form data
      setData((prev) => ({
        ...prev,
        image: imageData.secure_url,
      }));

      setErrors((prev) => ({ ...prev, image: '' }));
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const validateEmail = (email) => {
    const allowedDomains = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'rocketmail.com',
    ];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!emailPattern.test(email)) return 'Invalid email format';

    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain))
      return 'Only Gmail, Yahoo, Hotmail, and Rocketmail are allowed';

    return '';
  };

  const Submit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // to ensure name has at least 3 characters
    if (!data.name || data.name.trim().length < 3) {
      validationErrors.name = 'Name must be at least 3 characters long';
    }

    // to validate email
    if (!data.email) {
      validationErrors.email = 'Email is required';
    } else {
      const emailError = validateEmail(data.email);
      if (emailError) validationErrors.email = emailError;
    }

    // ensure an image is uploaded
    if (!data.image) {
      validationErrors.image = 'Profile image is required';
    }

    setErrors(validationErrors);

    // If no errors, proceed to the next step
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className='p-4 sm:p-6 bg-[#08252b] rounded-2xl border border-[#0e464e] my-4 sm:my-7'>
      <div className='w-full sm:w-[495px] h-[250px] px-3 sm:px-5 pt-4 pb-8 sm:pb-12 bg-[#042127] rounded-2xl border border-[#07363e]  flex flex-col justify-start items-start gap-8 sm:gap-8 relative z-10'>
        <h2 className='w-full text-neutral-50 text-sm font-normal leading-normal font-[Roboto]'>
          Upload Profile Photo
        </h2>
        <div className='w-full relative flex justify-center items-center min-h-[160px] sm:h-[200px] bg-black/20'>
          <label className='relative w-[140px] sm:w-[180px] h-[160px] sm:h-[180px] bg-[#0e464e] rounded-[24px] sm:rounded-[32px] border-4 border-[#23a0b5]/50 flex flex-col justify-center items-center gap-4'>
            <input
              type='file'
              accept='image/*'
              onChange={FileChange}
              className='hidden'
            />
            {data.image ? (
              <div className='w-full h-full'>
                <img
                  src={data.image}
                  alt='Profile'
                  className='w-full h-full object-cover rounded-[24px] sm:rounded-[32px]'
                />
              </div>
            ) : (
              <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                <CloudDownload className='text-white w-8 h-8 sm:w-10 sm:h-10' />
                <p className='text-center text-neutral-50 text-xs sm:text-sm leading-normal px-2 font-[Roboto]'>
                  {uploading ? 'Uploading...' : 'Click to upload'}
                </p>
              </div>
            )}
          </label>
        </div>
        {errors.image && (
          <p className='text-red-500 text-sm mt-1'>{errors.image}</p>
        )}
      </div>

      <hr className='my-4 text-[#07373f] border-2 border-[#07373f]' />

      <form className='space-y-4' onSubmit={Submit}>
        <div className=' w-full flex flex-col gap-2 '>
          <label className=' text-neutral-50 text-sm font-normal leading-normal font-[Roboto]'>
            Enter your name
          </label>
          <input
            name='name'
            value={data.name}
            onChange={InputChange}
            required
            className='w-full px-3 py-2 rounded-xl border border-[#07373f] bg-transparent text-white text-sm sm:text-base font-normal focus:outline-none focus:border-[#23a0b5]'
          />
          {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label className='text-neutral-50 text-sm font-normal leading-normal font-[Roboto]'>
            Enter your email *
          </label>
          <div className='relative w-full'>
            <Mail className='absolute left-5 top-3 sm:left-2 w-5 h-5 text-gray-400' />
            <input
              name='email'
              value={data.email}
              onChange={InputChange}
              className='relative w-full px-10 py-2 rounded-xl border border-[#07373f] bg-transparent text-white text-sm sm:text-base font-normal focus:outline-none focus:border-[#23a0b5]'
              required
              placeholder='hello@avioflagos.io'
            />
          </div>
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label className='text-neutral-50 text-sm leading-normal font-[Roboto]'>
            Special request?
          </label>
          <textarea
            name='specialRequest'
            value={data.specialRequest || ''}
            onChange={InputChange}
            className='w-full h-[120px] p-3 rounded-xl border border-[#07363e] bg-transparent text-white text-sm sm:text-base focus:outline-none focus:border-[#23a0b5]'
          ></textarea>
        </div>

        <div className='mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full'>
          <button
            onClick={prevStep}
            className='w-full sm:w-1/2 rounded-lg border border-[#23a0b5] py-2 text-[#23a0b5] text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-[#23a0b5] hover:text-white'
          >
            Back
          </button>
          <button
            type='submit'
            className='w-full sm:w-1/2 bg-[#23a0b5] rounded-lg text-white py-2 text-sm font-normal font-[JejuMyeongjo] leading-normal hover:bg-transparent hover:border hover:text-[#23a0b5]'
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

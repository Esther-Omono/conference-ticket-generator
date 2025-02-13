import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Creating the context
const TicketContext = createContext();

// Creating a provider component
export const TicketProvider = ({ children }) => {
  // Retrieve step from localStorage, default to 1 if not found
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('step');
    return savedStep ? JSON.parse(savedStep) : 1;
  });

  // Retrieve data from localStorage, default to empty fields if not found
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('setData');
    return savedData
      ? JSON.parse(savedData)
      : { tickets: [], image: '', name: '', email: '', specialRequest: '' };
  });

  // Reset function to clear stored values
  const resetData = () => {
    localStorage.removeItem('setData');
    localStorage.removeItem('step');
    setData({
      tickets: [],
      image: '',
      name: '',
      email: '',
      specialRequest: '',
    });
    setStep(1);
  };

  // Step navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('setData', JSON.stringify(data));
  }, [data]);

  // Save step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  return (
    <TicketContext.Provider
      value={{ step, setStep, data, setData, nextStep, prevStep, resetData }}
    >
      {children}
    </TicketContext.Provider>
  );
};

// PropTypes validation
TicketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for using the context
export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('This hook should be used within the TicketContext');
  }
  return context;
};

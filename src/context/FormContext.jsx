import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//creating the context here
const TicketContext = createContext();

//creating a provider component
export const TicketProvider = ({ children }) => {
  const [step, setStep] = useState(3);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('setData');
    return savedData
      ? JSON.parse(savedData)
      : { tickets: [], image: '', name: '', email: '' };
  });

  useEffect(() => {
    localStorage.setItem(data, JSON.stringify(data));
  }, [data]);

  return (
    <TicketContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </TicketContext.Provider>
  );
};

//to remove the proptype error thrown by children
TicketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('This hook should be used within the TicketContext');
  }
  return context;
};

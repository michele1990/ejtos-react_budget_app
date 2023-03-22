import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(true);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    // Add more currencies as needed
  ];

  const selectedCurrency = currencies.find((curr) => curr.code === currency);

  const handleChange = (newCurrency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency.code,
    });
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id='currencyDropdown'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCurrency.name} ({selectedCurrency.symbol})
      </button>
      {isOpen && (
        <div
          className='dropdown-menu'
          aria-labelledby='currencyDropdown'
          onClick={(e) => e.stopPropagation()}
        >
          {currencies.map((currency) => (
            <button
              key={currency.code}
              className='dropdown-item'
              type='button'
              onClick={() => handleChange(currency)}
            >
              {currency.name} ({currency.symbol})
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;

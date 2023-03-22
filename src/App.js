import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';
import { AppProvider } from './context/AppContext';

import './App.css';


const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          <div className='col-sm ini'>
            <Budget />
          </div>
          <div className='col-sm ini'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <div className='d-flex'>
              <div className='mr-auto ini'>
                <ExpenseTotal />
              </div>
              <div className='ini cur'> 
                <CurrencySelector />
              </div>
            </div>
          </div>
        </div>

        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Allocation</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;

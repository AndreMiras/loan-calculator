import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoanForm from './components/LoanForm';
import LoanResult from './components/LoanResult';

const App = (): JSX.Element => {
  const [amount, setAmount] = useState(200000);
  const [term, setTerm] = useState(20);
  const [interest, setInterest] = useState(1.9);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LoanForm onAmount={setAmount} onTerm={setTerm} onInterest={setInterest} />
        <LoanResult amount={amount} term={term} interest={interest} />
      </div>
    </div>
  );
};

export default App;

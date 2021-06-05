import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoanForm from './components/LoanForm';

const App = (): JSX.Element => (
  <div className="App">
    <Header />
    <div className="container">
      <LoanForm />
    </div>
  </div>
);

export default App;

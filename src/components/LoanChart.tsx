import React, { FunctionComponent } from 'react';
// import 'chartjs-plugin-colorschemes/dist/chartjs-plugin-colorschemes.min';
import { Pie } from 'react-chartjs-2';
// import { Card, Col, Row } from 'react-bootstrap';

const getChartParameters = (data) => ({
  labels: ['Principal', 'Intest'],
  datasets: [
    {
      label: 'Loan distribution',
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
});



type LoanChartProps = {
  amount: number,
  totalInterest: number,
}

const LoanChart: FunctionComponent<LoanChartProps> = ({ amount, totalInterest }) => (
  <div>
  <Pie data={getChartParameters([amount, totalInterest])} />
  </div>
);

export default LoanChart;

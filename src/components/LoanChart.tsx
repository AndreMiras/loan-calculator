import React, { FunctionComponent } from 'react';
import { Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const getChartParameters = (data) => ({
  labels: ['Principal', 'Intest'],
  datasets: [
    {
      label: 'Loan distribution',
      data: data,
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
    },
  ],
});

type LoanChartProps = {
  amount: number,
  totalInterest: number,
}

const LoanChart: FunctionComponent<LoanChartProps> = ({ amount, totalInterest }) => (
  <Card className="mt-4">
    <Card.Header>Loan Distribution</Card.Header>
    <Card.Body>
      <Pie data={getChartParameters([amount, totalInterest])} />
    </Card.Body>
  </Card>
);

export default LoanChart;

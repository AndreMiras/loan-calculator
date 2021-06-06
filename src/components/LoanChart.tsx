import React, { FunctionComponent } from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const getLabels = (
  amount: number,
  totalInterest: number,
  total: number
): [string, string] => {
  const principalRatio = ((100 * amount) / total).toFixed(2);
  const interestRatio = ((100 * totalInterest) / total).toFixed(2);
  return [`Principal (${principalRatio}%)`, `Interest (${interestRatio}%)`];
};

const getChartParameters = (
  amount: number,
  totalInterest: number,
  total: number
) => ({
  labels: getLabels(amount, totalInterest, total),
  datasets: [
    {
      label: "Loan distribution",
      data: [amount, totalInterest],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
    },
  ],
});

type LoanChartProps = {
  amount: number;
  totalInterest: number;
  total: number;
};

const LoanChart: FunctionComponent<LoanChartProps> = ({
  amount,
  totalInterest,
  total,
}) => (
  <Card className="mt-4">
    <Card.Header>Loan Distribution</Card.Header>
    <Card.Body>
      <Doughnut
        data={getChartParameters(amount, totalInterest, total)}
        type="doughnut"
      />
    </Card.Body>
  </Card>
);

export default LoanChart;

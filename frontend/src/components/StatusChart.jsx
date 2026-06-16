import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function StatusChart({ stats }) {
  const data = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        data: [
          stats.approved,
          stats.pending,
          stats.rejected,
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Contractor Status
      </h2>

      <Pie data={data} />
    </div>
  );
}

export default StatusChart;
import { useAppSelector } from "@/lib/hooks";
import { Card } from "@mui/material";
import { ChartContainer, LineChart, LinePlot } from "@mui/x-charts";

export default function SalesGraphCard() {
  const salesData = useAppSelector(state => state.product.sales);
  return (
    <Card>

      <LineChart 
        dataset={salesData}
        xAxis={[{
          data: salesData.map(entry => new Date(entry.weekEnding)),
          // valueFormatter: (value) => (value.toLocaleString()),
          // dataKey: "weekEnding"
        }]}
        series={[
          {
            dataKey: "retailSales",
            label: "Retail Sales"
          },
          {
            dataKey: "wholesaleSales",
            label: "Wholesale Sales"
          }
        ]}
        height={1000}
        sx={{
          '.MuiChartsAxis-directionY': {
            display: "none" // somewhat clunky way to disable Y axis
          },
          width: "100%",
        }}
      />
    </Card>
  );
};
import { Card } from "@mui/material";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "@/lib/hooks";

function formatPrice(value: number): string {
  return '$' + new Intl.NumberFormat().format(value);
}

export default function SalesTableCard() {
  const data = useAppSelector(state => state.product.sales);

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "weekEnding",
      headerName: "Week Ending",
      resizable: false,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "retailSales",
      headerName: "Retail Sales",
      resizable: false,
      flex: 1,
      valueFormatter: formatPrice,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "wholesaleSales",
      headerName: "Wholesale Sales",
      resizable: false,
      flex: 1,
      valueFormatter: formatPrice,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "unitsSold",
      headerName: "Units Sold",
      resizable: false,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "retailerMargin",
      headerName: "Retailer Margin",
      resizable: false,
      flex: 1,
      valueFormatter: formatPrice,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <Card style={{ height: "1000px" }}>
      <DataGrid 
        columns={columns}
        rows={data}
        getRowId={row => row.weekEnding} // assuming only one entry per week for unique row ID
        // autoHeight={false}
      />
    </Card>
  );
};
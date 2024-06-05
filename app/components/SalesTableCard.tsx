import { Card } from "@mui/material";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "@/lib/hooks";

export default function SalesTableCard() {
  const data = useAppSelector(state => state.product.sales);

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "weekEnding",
      headerName: "Week Ending",
      resizable: false,
      flex: 1,
    },
    {
      field: "retailSales",
      headerName: "Retail Sales",
      resizable: false,
      flex: 1,
    },
    {
      field: "wholesaleSales",
      headerName: "Wholesale Sales",
      resizable: false,
      flex: 1,
    },
    {
      field: "unitsSold",
      headerName: "Units Sold",
      resizable: false,
      flex: 1,
    },
    {
      field: "retailerMargin",
      headerName: "Retailer Margin",
      resizable: false,
      flex: 1,
    },
  ];

  return (
    <Card>
      <DataGrid 
        columns={columns}
        rows={data}
        getRowId={row => row.weekEnding} // assuming only one entry per week for unique row ID
      />
    </Card>
  );
};
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
import { deliveredOrders } from "./data/mockData";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};
const columns = [
  {
    field: "بررسی سفارش",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          بررسی سفارش
        </Button>
      );
    },
    align: "center",
    headerAlign: "center",
    flex: 0.5,
  },
  {
    field: "date",
    headerName: "تاریخ ",
    flex: 1,
    cellClassName: "date-column--cell",
    align: "right",
    headerAlign: "right",
  },
  {
    field: "name",
    headerName: "نام",
    flex: 1,
    cellClassName: "name-column--cell",
    align: "right",
    headerAlign: "right",
  },
  {
    field: "id",
    headerName: "شمارنده",
    flex: 0.5,
    align: "right",
    headerAlign: "right",
  },
];

const DeliveredOrders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Title title="سفارشات" subtitle="بررسی و ویرایش اطلاعات سفارشات" />

      <div className="flex justify-center items-center">
        <Link to="/orders/inprogress">
          <button className="bg-slate-800 text-slate-700 px-10 py-3 rounded-l-md">
            سفارشات در حال انجام
          </button>
        </Link>

        <button className="bg-slate-700 px-10 py-3 rounded-r-md">
          سفارشات تحویل داده شده
        </button>
      </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          rows={deliveredOrders}
          columns={columns}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          components={{ Toolbar: GridToolbar }}
          onCellClick={handleCellClick}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default DeliveredOrders;

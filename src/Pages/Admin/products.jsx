// import { Link } from "react-router-dom";
// const Products = () => {
//   return (
//     <div className="flex gap-5 text-cyan-700 ">
//       <div>Products</div>
//       <Link to="/Login">go back to Login</Link>
//     </div>
//   );
// };
// export default Products;
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="flex gap-5 text-cyan-700 ">
//       <div>Orders</div>
//       <Link to="/Login">go back to Login</Link>
//     </div>
//   );
// };
// export default Orders;
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
import { products } from "./data/mockData";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";

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
    field: "حذف",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          حذف
        </Button>
      );
    },
    align: "center",
    headerAlign: "center",
    flex: 0.5,
  },
  {
    field: "ویرایش",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          ویرایش
        </Button>
      );
    },
    align: "center",
    headerAlign: "center",
    flex: 0.5,
  },
  {
    field: "brand",
    headerName: "برند ",
    flex: 1,
    cellClassName: "brand-column--cell",
    align: "right",
    headerAlign: "right",
  },
  {
    field: "category",
    headerName: "دسته بندی",
    flex: 1,
    cellClassName: "category-column--cell",
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

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box p="15px">
      <Title
        title="محصولات"
        subtitle="لیست تمامی محصولات به همراه قابلیت ویرایش و حذف آنها"
      />
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
          rows={products}
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

export default Products;

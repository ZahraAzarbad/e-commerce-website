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
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
// import { products } from "./data/mockData";
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
    field: "price",
    headerName: "قیمت",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "brand",
    headerName: "برند ",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "category",
    headerName: "دسته بندی",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "نام",
    flex: 1,
    cellClassName: "name-column--cell",
    align: "right",
    headerAlign: "right",
  },
];

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const productsResponse = await axios.get(
      "http://localhost:8000/api/products",
      {
        params: {
          limit: 36, // Request all products at once
        },
      }
    );
    const categoriesResponse = await axios.get(
      "http://localhost:8000/api/categories"
    );

    const products = productsResponse.data.data.products;
    const categories = categoriesResponse.data.data.categories;

    // Combine the data as needed
    const combinedData = products.map((product) => ({
      ...product,
      category: categories.find((category) => category._id === product.category)
        ?.name,
    }));

    return combinedData;
  };
  useEffect(() => {
    fetchData().then((combinedData) => {
      setData(combinedData);
    });
  }, []);

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
          rows={data}
          getRowId={(row) => row._id}
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

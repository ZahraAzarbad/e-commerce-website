import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
import { inProgressOrders } from "./data/mockData";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeliveredStatusModal from "./Modals/InProgressModal";
import publicAxios from "../../Services/instances/publicAxios";
import { useEffect } from "react";
import privateAxios from "../../Services/instances/privateAxios";
import DateComponent from "../../Components/Common/dateEditor";

const InProgressOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [refreshTable, setRefreshTable] = useState(false);

  const fetchData = async () => {
    const res = await publicAxios.get("/orders", {
      params: {
        deliveryStatus: true,
      },
    });
    const resProducts = await publicAxios.get("/products", {
      params: {
        limit: 1000, // Request all products at once
      },
    });
    const resUser = await privateAxios.get("/users");

    const users = resUser.data.data.users;
    const orders = res.data.data.orders;
    const products = resProducts.data.data.products;
    console.log(products);

    const combinedData = orders.map((order) => ({
      ...order,
      products: order.products.map((prd) => {
        const list = {
          count: prd.count,
          product: products.find((item) => {
            return item._id === prd.product;
          }),
        };
        return list;
      }),
      user: users.find((item) => {
        return item._id === order.user;
      }),
    }));
    console.log(combinedData);
    setOrderList(combinedData);
    setRefreshTable((prev) => !prev);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleClick = (event, cellValues) => {
    console.log(cellValues);
    const selectOrder = orderList.find((item) => {
      return item._id === cellValues.id;
    });
    setSelectedItem(selectOrder);
    openModal();
    // Open the modal when the button is clicked
  };

  const columns = [
    {
      field: "بررسی سفارش",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="secondary"
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
      field: "deliveryDate",
      headerName: "تاریخ ",
      flex: 1,
      cellClassName: "date-column--cell",
      align: "right",
      headerAlign: "right",
      renderCell: (item) => {
        return <DateComponent dateString={item.row.deliveryDate} />;
      },
    },
    {
      field: "firstname",
      headerName: "نام",
      flex: 1,
      cellClassName: "name-column--cell",
      align: "right",
      headerAlign: "right",
      renderCell: (item) => {
        return `${item.row.user.firstname} ${item.row.user.lastname}`;
      },
    },
  ];
  console.log(orderList);
  return (
    <Box m="20px">
      <Title title="سفارشات" subtitle="بررسی و ویرایش اطلاعات سفارشات" />
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Typography
          textAlign="center"
          padding="5px 15px"
          fontSize="20px"
          bgcolor={colors.blueAccent[950]}
          borderRadius="5px"
        >
          سفارشات در حال انجام
        </Typography>
        <Link to="/orders/deliverd">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              padding: "5px 15px",
              fontSize: "20px",
            }}
          >
            سفارشات تحویل داده شده
          </Button>
        </Link>
      </Box>
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
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 25]}
          rows={orderList}
          columns={columns}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          components={{ Toolbar: GridToolbar }}
          onCellClick={handleCellClick}
          onRowClick={handleRowClick}
        />
        <DeliveredStatusModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onClick={handleClick}
          product={selectedItem}
        />
      </Box>
    </Box>
  );
};

export default InProgressOrders;

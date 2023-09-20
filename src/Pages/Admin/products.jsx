import { useState, useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
import Title from "../../Components/Title";
import publicAxios from "../../Services/instances/publicAxios";
import MyModal from "./Modals/AddModal";
import DeleteModal from "./Modals/DeleteModal";
import privateAxios from "../../Services/instances/privateAxios";
import EditModal from "./Modals/EditModal";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [changeData, setChangeData] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingProduct(null);
    setIsEditModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedProduct) {
      privateAxios.delete(`/products/${selectedProduct._id}`).then(() => {
        setData((previousData) =>
          previousData.filter((item) => item._id !== selectedProduct._id)
        );
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
      });
    }
  };

  const addProduct = (newProduct) => {
    setData((prevData) => [...prevData, newProduct]);
    setChangeData((s) => !s);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fetchData = async () => {
    const [productsResponse, categoriesResponse] = await Promise.all([
      publicAxios.get("/products", {
        params: {
          limit: 1000, // Request all products at once
        },
      }),
      publicAxios.get("/categories"),
    ]);

    const products = productsResponse.data.data.products;
    const categories = categoriesResponse.data.data.categories;

    // Combine the data as needed
    const combinedData = products.map((product) => ({
      ...product,
      category:
        categories.find((category) => category._id === product.category)
          ?.name || "",
    }));

    return combinedData;
  };

  useEffect(() => {
    fetchData().then((combinedData) => {
      setData(combinedData);
    });
  }, [changeData]);

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
            color="secondary"
            onClick={() => {
              setSelectedProduct(cellValues.row);
              setIsDeleteModalOpen(true);
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
            color="secondary"
            onClick={() => openEditModal(cellValues.row)}
            disabled={isEditModalOpen}
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
    {
      field: "images",
      headerName: "عکس",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <img
          src={`http://localhost:8000/images/products/images/${params.row.images[0]}`}
          alt={`Product ${params.row._id}`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            padding: "3px",
          }}
        />
      ),
    },
  ];

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
        <Button
          style={{
            backgroundColor: "green",
            padding: "5px 10px",
            borderRadius: "3px",
            margin: "5px",
            color: "white",
            fontSize: "18px",
          }}
          onClick={openModal}
          disabled={isModalOpen}
        >
          افزودن کالا +
        </Button>
        <MyModal
          open={isModalOpen}
          onClose={closeModal}
          addProduct={addProduct}
        />
        <EditModal
          open={isEditModalOpen}
          onClose={closeEditModal}
          editingProduct={editingProduct}
        />

        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
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

        <DeleteModal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default Products;

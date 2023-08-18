import { useState, useEffect } from "react";
import {
  DataGrid,
  GridCellEditStopReasons,
  faIR,
  GridToolbar,
} from "@mui/x-data-grid";
import axios from "axios";

import { Box } from "@mui/material";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/Theme";
export default function SaveChangesWithButton() {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [setEditedRows] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const columns = [
    {
      field: "price",
      headerName: "(تومان) قیمت ",
      flex: 0.5,
      cellClassName: "price-column--cell",
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "quantity",
      headerName: "(عدد) موجودی",
      flex: 0.5,
      cellClassName: "quantity-column--cell",
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "category",
      headerName: "دسته بندی",
      flex: 1,
      cellClassName: "category-column--cell",
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
  const handleCellEditStop = (params, event) => {
    if (params.reason === GridCellEditStopReasons.cellFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditCellChange = (params) => {
    setEditedRows((prevEditedRows) => ({
      ...prevEditedRows,
      [params.id]: {
        ...prevEditedRows[params.id],
        [params.field]: params.value,
      },
    }));
  };

  const handleEditCellCommit = (params) => {
    setEditedRows((prevEditedRows) => ({
      ...prevEditedRows,
      [params.id]: {
        ...prevEditedRows[params.id],
        [params.field]: params.value,
      },
    }));
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);

    // Here you can send the entire editedRows object to your server to save the changes
    // Example of sending data to a hypothetical saveChanges function
    // await saveChanges(editedRows);

    setIsSaving(false);
  };

  return (
    <Box p="15px">
      <Title
        title="قیمت و موجودی محصولات"
        subtitle="قابلیت ویرایش قیمت و موجودی تمامی محصولات"
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
        <button
          style={{
            backgroundColor: "green",
            padding: "5px 10px",
            borderRadius: "3px",
            margin: "5px",
          }}
          onClick={handleSaveChanges}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "ذخیره تغییرات"}
        </button>
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          components={{ Toolbar: GridToolbar }}
          onCellEditStop={handleCellEditStop}
          onEditCellChange={handleEditCellChange}
          onEditCellCommit={handleEditCellCommit}
        />
      </Box>
    </Box>
  );
}

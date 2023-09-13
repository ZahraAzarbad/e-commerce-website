import { useState, useEffect } from "react";
import {
  DataGrid,
  GridCellEditStopReasons,
  faIR,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/Theme";
import publicAxios from "../../Services/instances/publicAxios";
import { updateQueue } from "../../Services/api/updateQueue";
export default function SaveChangesWithButton() {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [editedRows, setEditedRows] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [focusedCell, setFocusedCell] = useState(null);

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

  const fetchData = async () => {
    const productsResponse = await publicAxios.get("/products", {
      params: {
        limit: 1000, // Request all products at once
      },
    });
    const categoriesResponse = await publicAxios.get("/categories");

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
    } else {
      setFocusedCell(params.id);
    }
  };

  const handleKeyChange = (key, event) => {
    const isExist = editedRows.find((item) => item.id === key.id);
    if (!!isExist) {
      setTimeout(() => {
        if (event.key === "Escape") {
          setEditedRows((data) => {
            const result = data.map((item) => {
              if (item.id === key.id) {
                delete item[key.field];
                return item;
              }
              return item;

              // id: key.id, [key.field]: key.formattedValue
            });
            return result;
          });
        } else {
          setEditedRows(
            editedRows.map((item) => {
              if (item.id === isExist.id) {
                return { ...item, [key.field]: event.target.value };
              }
              return { ...item };
            })
          );
        }
      }, 500);
    } else {
      setTimeout(() => {
        setEditedRows([
          ...editedRows,
          {
            id: key.id,
            [key.field]: event.target.value,
          },
        ]);
        console.log(event.target.value);
      }, 500);
    }
  };
  console.log(editedRows);

  const handleSaveChanges = async () => {
    setIsSaving(true);
    updateQueue(editedRows).then((res) => {
      console.log(res);
      setIsSaving(false);
      // setFocusedCell(null);
    });
  };

  // Here you can send the entire editedRows object to your server to save the changes
  // Example of sending data to a hypothetical saveChanges function
  // await saveChanges(editedRows);

  // setIsSaving(false);
  // };

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
        <Button
          style={{
            backgroundColor: "green",
            padding: "5px 10px",
            borderRadius: "3px",
            margin: "5px",
            color: "white",
            fontSize: "18px",
          }}
          onClick={handleSaveChanges}
          disabled={isSaving}
        >
          {isSaving ? "" : "ذخیره تغییرات"}
        </Button>
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          components={{ Toolbar: GridToolbar }}
          onCellEditStop={handleCellEditStop}
          onCellKeyDown={handleKeyChange}
        />
      </Box>
    </Box>
  );
}

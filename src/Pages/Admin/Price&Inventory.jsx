import { useState } from "react";
import {
  DataGrid,
  GridCellEditStopReasons,
  faIR,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import { products } from "./data/mockData";
import { Box, Button } from "@mui/material";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/Theme";

export default function SaveChangesWithButton() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [editedRows, setEditedRows] = useState({});
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
      field: "inventory",
      headerName: "(عدد) موجودی",
      flex: 0.5,
      cellClassName: "inventory-column--cell",
      align: "center",
      headerAlign: "center",
      editable: true,
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
      flex: 0.2,
      align: "right",
      headerAlign: "right",
    },
  ];

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
          rows={products}
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

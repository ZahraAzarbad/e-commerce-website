// import { Link } from "react-router-dom";

// const PriceAndInventory = () => {
//   return (
//     <div className="flex gap-5 text-cyan-700 ">
//       <div>PriceAndInventory</div>
//       <Link to="/Login">go back to Login</Link>
//     </div>
//   );
// };
// export default PriceAndInventory;

// // import * as React from "react";
// // import {
// //   GridColDef,
// //   GridRowsProp,
// //   DataGrid,
// //   GridCellEditStartParams,
// //   GridCellEditStopReasons,
// //   MuiEvent,
// // } from "@mui/x-data-grid";
// import {
//   GridColDef,
//   GridRowsProp,
//   DataGrid,
//   GridCellEditStopParams,
//   GridCellEditStopReasons,
//   MuiEvent,
// } from "@mui/x-data-grid";
// // import {
// //   randomCreatedDate,
// //   randomTraderName,
// //   randomUpdatedDate,
// // } from "@mui/x-data-grid-generator";

// export default function DisableStopEditModeOnFocusOut() {
//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
//           if (params.reason === GridCellEditStopReasons.cellFocusOut) {
//             event.defaultMuiPrevented = true;
//           }
//         }}
//       />
//     </div>
//   );
// }

// const columns: GridColDef[] = [
//   { field: "name", headerName: "Name", width: 180, editable: true },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     editable: true,
//     align: "left",
//     headerAlign: "left",
//   },
//   {
//     field: "dateCreated",
//     headerName: "Date Created",
//     type: "date",
//     width: 180,
//     editable: true,
//   },
//   {
//     field: "lastLogin",
//     headerName: "Last Login",
//     type: "dateTime",
//     width: 220,
//     editable: true,
//   },
// ];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: "hello",
//     age: 25,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 2,
//     name: "hello",
//     age: 36,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 3,
//     name: "hello",
//     age: 19,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 4,
//     name: "hello",
//     age: 28,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 5,
//     name: "hello",
//     age: 23,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
// ];

// import { Box } from "@mui/material";
// import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
// import { tokens } from "../../utils/Theme";
// import { mockDataContacts } from "./data/mockData";
// import Title from "../../Components/Title";
// import { useTheme } from "@mui/material";

// const PriceAndInventory = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "registrarId", headerName: "Registrar ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       flex: 1,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       flex: 1,
//     },
//     {
//       field: "zipCode",
//       headerName: "Zip Code",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Title
//         title="CONTACTS"
//         subtitle="List of Contacts for Future Reference"
//       />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${colors.grey[100]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           initialState={{
//             pagination: { paginationModel: { pageSize: 5 } },
//           }}
//           pageSizeOptions={[5, 10, 25]}
//           rows={mockDataContacts}
//           columns={columns}
//           localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default PriceAndInventory;

// import React from "react";
// import { DataGrid, GridCellEditStopReasons } from "@mui/x-data-grid";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from "@mui/x-data-grid-generator";

// export default function DisableStopEditModeOnFocusOut() {
//   const handleCellEditStop = (params, event) => {
//     if (params.reason === GridCellEditStopReasons.cellFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const columns = [
//     { field: "name", headerName: "Name", width: 180, editable: true },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       editable: true,
//       align: "left",
//       headerAlign: "left",
//     },
//     {
//       field: "dateCreated",
//       headerName: "Date Created",
//       type: "date",
//       width: 180,
//       editable: true,
//     },
//     {
//       field: "lastLogin",
//       headerName: "Last Login",
//       type: "dateTime",
//       width: 220,
//       editable: true,
//     },
//   ];

//   const rows = [
//     {
//       id: 1,
//       name: randomTraderName(),
//       age: 25,
//       dateCreated: randomCreatedDate(),
//       lastLogin: randomUpdatedDate(),
//     },
//     {
//       id: 2,
//       name: randomTraderName(),
//       age: 36,
//       dateCreated: randomCreatedDate(),
//       lastLogin: randomUpdatedDate(),
//     },
//     {
//       id: 3,
//       name: randomTraderName(),
//       age: 19,
//       dateCreated: randomCreatedDate(),
//       lastLogin: randomUpdatedDate(),
//     },
//     {
//       id: 4,
//       name: randomTraderName(),
//       age: 28,
//       dateCreated: randomCreatedDate(),
//       lastLogin: randomUpdatedDate(),
//     },
//     {
//       id: 5,
//       name: randomTraderName(),
//       age: 23,
//       dateCreated: randomCreatedDate(),
//       lastLogin: randomUpdatedDate(),
//     },
//   ];

//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         onCellEditStop={handleCellEditStop}
//       />
//     </div>
//   );
// }

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
